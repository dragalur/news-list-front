import styled from 'styled-components';
import { Flex } from '../../../layout/Flex';
import { NewsWrapper } from '../ListNews/Styles';

export const ReadNewWrapper = styled(NewsWrapper)`
	display: block;
	padding: 20px 50px;
	overflow-wrap: break-word;
`;

export const ReadNewHeader = styled(Flex)`
	border-bottom: 1px solid white;
`;

export const ReadHeaderText = styled.p`
	font-size: 0.8rem;
	margin: 0;
`;

export const CreateNewTitle = styled.p`
	font-size: 1.5rem;
`;

export const CreateNewText = styled.p`
	font-size: 1.1rem;
`;
