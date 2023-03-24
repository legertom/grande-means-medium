import { object, ref, string } from 'yup';

const loginValidate = object().shape(
  {
    email: string().required('Email is required!'),
    // profile_image:string().required('Profile Image is required!'),
    password: string().required('Password is required!')
    .min(6, 'must be at least 6 characters long'),
  });

export default loginValidate;
