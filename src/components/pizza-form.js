import React from "react";
import styled from 'styled-components';
import Header from './header';
import { useHistory } from 'react-router-dom'

const StyledForm = styled.div `
    display: flex;
    border: solid 3px black;
    padding-bottom: 3%;
    form {
        width: 100%;
        display:flex;
        flex-flow:column;
        align-items:center;
    }
    div.form-group {
        width:50%;
        display:flex;
        flex-flow:column;
    }
    input {
        margin-left: 3%;
    }
    select {
        margin-left: 3%;
    }

`;


export default function Pizza(props) {
    const {values, update, submit, disabled, errors} = props;
    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse);
    };
    const history = useHistory();
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        history.push('/pizza/confirmation/')
    };

    return (
        <div>
            <Header />
            <StyledForm>
            <form className='pizza-form' onSubmit={onSubmit}>
                <h2>Create a pizza!</h2>
                <div className='form-group inputs'>
                    <label htmlFor='name'>Name: 
                    <input 
                    id='name-input'
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}/>
                    </label>
                    <label htmlFor='size'>Size:
                    <select id='size-dropdown' name='size' onChange={onChange} value={values.size}>
                    <option value=''>-- Select a Size --</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>large</option>
                    </select>
                    </label>
                    <label htmlFor='cheese'>Cheese:
                    <input 
                    id='cheese'
                    type='checkbox'
                    name='cheese'
                    onChange={onChange}
                    checked={values.cheese}
                    />
                    </label>
                    <label htmlFor='pepperoni'>Pepperoni:
                    <input 
                    id='pepperoni'
                    type='checkbox'
                    name='pepperoni'
                    onChange={onChange}
                    checked={values.pepperoni}
                    />
                    </label>
                    <label htmlFor='mushrooms'>Mushrooms:
                    <input 
                    id='mushrooms'
                    type='checkbox'
                    name='mushrooms'
                    onChange={onChange}
                    checked={values.mushrooms}
                    />
                    </label>
                    <label htmlFor='sausage'>Sausage:
                    <input 
                    id='sausage'
                    type='checkbox'
                    name='sausage'
                    onChange={onChange}
                    checked={values.sausage}
                    />
                    </label>
                    <label htmlFor='pineapple'>Pineapple:
                    <input 
                    id='pineapple'
                    type='checkbox'
                    name='pineapple'
                    onChange={onChange}
                    checked={values.pineapple}
                    />
                    </label>
                    <label htmlFor='special_instructions'>Special instructions: 
                    <input 
                    id='special-text'
                    type='text'
                    name='special_instructions'
                    onChange={onChange}
                    value={values.special_instructions}/>
                    </label>
                </div>
                <div>
                <button disabled={disabled} id='order-button' type="submit">Submit</button>
                </div>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </form>
            </StyledForm>
        </div>
    )
};