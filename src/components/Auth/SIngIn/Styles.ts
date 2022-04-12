import styled, { keyframes } from 'styled-components';
import { SingContainer } from '../Styles';
import singInImg from '../../../images/singIn.png';
const AuthDisappearAnimation = keyframes`
    0% {
        opacity: 1;
        transform: translate(0px);
    }
    100% {
        opacity: 0;
        transform: translate(-100%);
        display: none;
    }
`;

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
    animation: ${({ showSingUp }) => (showSingUp ? AuthDisappearAnimation : AuthAppearAnimation)} 1s forwards;
    background: url(${singInImg}) no-repeat center center fixed;
    float: right;
    opacity: 0;
`;
