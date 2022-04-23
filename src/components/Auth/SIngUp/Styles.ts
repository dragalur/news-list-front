import styled, { keyframes } from 'styled-components';
import { SingContainer } from '../Styles';

const AuthAppearAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translate(100%);
    }
    100% {
        opacity: 1;
        transform: translate(0px);
    }
`;

export const SingUpContainer = styled(SingContainer)`
	animation: ${AuthAppearAnimation} 1s;
	border-radius: 20px;
	background-color: #00acc1;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
