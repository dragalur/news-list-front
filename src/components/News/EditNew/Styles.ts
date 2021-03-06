import styled from 'styled-components';
import { NewsWrapper } from '../ListNews/Styles';

export const CreateNewWrapper = styled(NewsWrapper)`
	align-items: flex-start;
	// justify-content: center;
	align-content: flex-start;
	gap: 20px;
	flex-wrap: wrap;
	padding: 20px 40px;
`;

export const CreateInstructionBlock = styled.div`
	padding: 10px;
	border-bottom: 2px solid black;
	border-top: 1px solid black;
`;

export const CreateNewTitle = styled.p`
	font-size: 1.5rem;
	margin: 0;
`;

export const CreateNewText = styled.p`
	font-size: 1.1rem;
`;

export const ButtonBlock = styled.div`
	width: 100%;
	text-align: center;
`;
