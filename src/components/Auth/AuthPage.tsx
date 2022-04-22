import React from 'react';
import { useLocation } from 'react-router';
import { Outlet, useNavigate } from 'react-router';
import { AuthContainer } from './Styles';

export const AuthPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const redirectToStartPage = () => {
		navigate('../news', { replace: true });
	};

	const changeSingUpOnSingIn = () => {
		location.pathname === '/auth/login' ? navigate('register') : navigate('login');
	};
	return (
		<AuthContainer>
			<Outlet context={{ redirectToStartPage, changeSingUpOnSingIn }} />
		</AuthContainer>
	);
};
