import styled from 'styled-components';
import { Flex } from '../../../layout/Flex';

export const NewsWrapper = styled(Flex)`
	min-height: 100vh;
	width: 70%;
	padding: 20px;
	margin: auto;
	background: #e0f7fa;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const NewsListWrapper = styled(NewsWrapper)`
	align-items: flex-start;
	justify-content: center;
	align-content: flex-start;
	gap: 20px;
	flex-wrap: wrap;
`;
