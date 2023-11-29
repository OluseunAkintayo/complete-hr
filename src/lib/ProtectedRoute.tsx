import { Fragment, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
	children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
	const token = sessionStorage.getItem('auth_token') as string;
	return !token ? <Navigate to="/auth/login" /> : <Fragment>{children}</Fragment>
}

export default ProtectedRoute;
