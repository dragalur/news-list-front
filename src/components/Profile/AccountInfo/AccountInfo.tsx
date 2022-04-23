import React from 'react';
import { AccountInfoBlock, AccountInfoText, AccountInfoTitle } from './Styles';

export const AccountInfo = () => {
	return (
		<AccountInfoBlock>
			<AccountInfoTitle>Account info</AccountInfoTitle>
			<AccountInfoText>User name: daniel</AccountInfoText>
			<AccountInfoText>E-mail: thdsfj@gmail.com</AccountInfoText>
		</AccountInfoBlock>
	);
};
