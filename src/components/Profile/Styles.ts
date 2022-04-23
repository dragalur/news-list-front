import styled from 'styled-components';
import { Flex } from '../../layout/Flex';
import { NewsListWrapper } from '../News/Styles';

export const ProfileWrapper = styled(NewsListWrapper)`
	flex-direction: column;
	justify-content: flex-start;
	align-content: center;
	align-items: center;
	gap: 20px;
	flex-wrap: wrap;
	background-color: #0277bd;
	background-image: linear-gradient(to left bottom, #0097a7, #008fbc, #0084d2, #0074e0, #3a5cde);
	color: white;
`;

export const ProfilePostBlock = styled(Flex)`
	width: 100%;
	justify-content: flex-start;
	gap: 25px;
	flex-wrap: wrap;
`;
