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
`;
