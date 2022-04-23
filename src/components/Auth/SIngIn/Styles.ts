import styled, { keyframes } from 'styled-components';
import { SingContainer } from '../Styles';

const AuthAppearAnimation = keyframes`
    0% {
        display: block;
        opacity: 0;
        transform: translate(-100%);

    }
    100% {
        opacity: 1;
        display: block;
        transform: translate(0px);
    }
`;

export const SingInContainer = styled(SingContainer)`
	animation: ${AuthAppearAnimation} 1s forwards;
`;
