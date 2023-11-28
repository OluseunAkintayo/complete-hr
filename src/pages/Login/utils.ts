import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().required(),
  passcode: yup.string().min(8).max(32).required(),
});

export interface LoginProps {
	username: string;
	passcode: string;
}
