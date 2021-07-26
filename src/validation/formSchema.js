import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('A name is required')
    .min(2, 'name must be at least 2 characters'),
    size: yup
    .string()
    .trim()
    .required('A size is required'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
    sausage: yup.boolean(),
    pineapple: yup.boolean(),
    special_instructions: yup
    .string()
    .trim(),
});

export default formSchema;