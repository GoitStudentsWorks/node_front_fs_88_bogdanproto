import * as Yup from 'yup';

export const registerSchema = Yup.object({
  userName: Yup.string()
    .min(2, 'must be 2 characters or more')
    .max(32, 'must be 32 characters or less')
    .trim()
    .required('name is required'),
  email: Yup.string()
    .email('invalid email address')
    .trim()
    .required('email is required'),
  password: Yup.string()
    .min(8, 'must be 8 characters or more')
    .max(64, 'must be 64 characters or less')
    .trim()
    .required('password is required'),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('invalid email address')
    .trim()
    .required('email is required'),
  password: Yup.string()
    .min(8, 'must be 8 characters or more')
    .max(64, 'must be 64 characters or less')
    .trim()
    .required('password is required'),
});