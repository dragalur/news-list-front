import styled from 'styled-components';
import { Flex } from '../../layout/Flex';
import { SingProps } from './Types';
import authImg from '../../images/auth.jpg';

export const AuthContainer = styled(Flex)`
	width: 100wh;
	height: 100vh;
	justify-content: center;
	background: url(${authImg}) no-repeat center center fixed;
	background-size: cover;
`;

export const AuthLabel = styled.p`
	margin-left: 40px;
	font-size: 24px;
`;

export const SingContainer = styled(Flex)<Omit<SingProps, 'changeSingUpOnSingIn' | 'redirect'>>`
	flex-direction: column;
	width: 30%;
	padding-top: 5px;
	transition: 1s;
	animation-fill-mode: forwards;
	border: 2px solid white;
	border-radius: 20px;
	background-color: #00acc1;
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const SingWrapperBlock = styled(Flex)`
	width: 100%;
	padding: 30px 0;
	flex-direction: column;
	justify-content: start;
	align-items: flex-start;
	flex: 1 1;
	color: #000a12;
`;
