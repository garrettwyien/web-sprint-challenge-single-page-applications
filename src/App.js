import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router";
import { reach } from 'yup';
import Pizza from './components/pizza-form';
import Confirmation from './components/confirmation';
import Home from './components/home';
import formSchema from './validation/formSchema';

const initialPizza = [];
const initialFormValues = {
//Name (min 2 characters), size, toppings (pepperoni, mushrooms, sausage, pineapple), special instructions
id: '',
name: '',
size: '',
cheese: false,
pepperoni: false,
mushrooms: false,
sausage: false,
pineapple: false,
special_instructions: '',
};
const initialFormErrors = {
  name: '',
  size: '',
};
const initialDisabled = true;

const App = () => {
  const [ pizza, setPizza ] = useState(initialPizza);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getPizza = () => {
    axios.get(`https://reqres.in/api/orders`)
      .then(res => {
        setPizza(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }; 

  const orderPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
    .then(res => {
      setPizza([res.data, ...pizza]);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setFormValues(initialFormValues);
    })
  };

  const submitForm = () => {
    const newPizza = {
      id: pizza.length + 1,
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      cheese: formValues.cheese,
      pepperoni: formValues.pepperoni,
      mushrooms: formValues.mushrooms,
      sausage: formValues.sausage,
      pineapple: formValues.pineapple,
      special_instrucitons: formValues.special_instructions.trim(),
    };
    orderPizza(newPizza);
  };
  
  const validate = (name, value) => {
    reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  };

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue);
    setFormValues({ ...formValues, [inputName]: inputValue});
  };

  useEffect(() => {
    getPizza()
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues]);

  return (
    <div className='app-contianer'>
      <Switch>
        <Route exact path='/' component={Home}>
          <Home />
        </Route>
        <Route exact path='/pizza/' component={Pizza}>
          <Pizza 
            values={formValues}
            update={updateForm}
            submit={submitForm}
            disabled={disabled}
            errors={formErrors}/>
        </Route>
        <Route path='/pizza/confirmation/' component={Confirmation}>
          <Confirmation />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
