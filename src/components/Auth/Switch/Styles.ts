import styled from 'styled-components';
import { Flex } from '../../../layout/Flex';
import { AuthSwitchCssProps } from './Types';

export const SingUpSwitchBlock = styled(Flex)<AuthSwitchCssProps>`
    width: 100%;
    height: 10%;
    justify-content: flex-end;
    flex-direction: ${({ isRight }) => (isRight ? 'row' : 'row-reverse')};
    background: #66ffa6;
    gap: 5px;
    padding 30px;
    cursor: pointer;
`;

export const ArrowImg = styled.img<AuthSwitchCssProps>`
    width: 25px;
    height: 25px;
    transform: ${({ isRight }) => (isRight ? 'rotate(0)' : 'rotate(180deg)')};
`;

export const SwitchLabel = styled.p`
    font-size: 22px;
    margin: 0;
`;
