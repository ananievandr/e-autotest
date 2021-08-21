import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(255, 'Nice try, nobody has a name that long'),
  phone: Yup.string()
    .min(4, 'Must be longer than 4 characters')
    .max(255, 'Nice try, phone so long'),
  message: Yup.string().max(5000, 'Must be less than 5000 characters'),
});

export default validationSchema;