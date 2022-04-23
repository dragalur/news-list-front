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
	background-color: #6d4c41;
`;

export const ProfilePostBlock = styled(Flex)`
	width: 100%;
	justify-content: flex-start;
	gap: 25px;
	flex-wrap: wrap;
`;
