import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  passcode: yup.string().min(8).max(32).required(),
});

export interface LoginProps {
	email: string;
	passcode: string;
}
