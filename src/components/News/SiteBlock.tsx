import React from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { SiteContainer } from './Styles';

export const SiteBlock = () => {
	return (
		<>
			<SiteContainer>
				<Header />
				<Outlet />
			</SiteContainer>
		</>
	);
};
