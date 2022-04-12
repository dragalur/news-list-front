import styled, { keyframes } from 'styled-components';
import { SingContainer } from '../Styles';
import singUpImg from '../../../images/singUp.png';

const AuthDisappearAnimation = keyframes`
    0% {
        opacity: 1;
        transform: translate(0px);
    }
    100% {
        opacity: 0;
        transform: translate(100%);
    }
`;

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
    animation: ${({ showSingUp }) => (showSingUp ? AuthAppearAnimation : AuthDisappearAnimation)} 1s forwards;
    background: url(${singUpImg}) no-repeat center center fixed;
    float: left;
`;
