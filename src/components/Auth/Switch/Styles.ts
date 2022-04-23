import styled from 'styled-components';
import { Flex } from '../../../layout/Flex';
import { AuthSwitchCssProps } from './Types';

export const SingUpSwitchBlock = styled(Flex)<AuthSwitchCssProps>`
    width: 60%;
    height: 10%;
    justify-content: center;
    background: #00b0ff;
    gap: 5px;
    padding 20px;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 20px;
    transition: 1s;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

    &:hover{
    box-shadow: #18ffff 0px 19px 38px, #18ffff 0px 15px 12px;
    transform: scale(1.1);
    color: #18ffff;
    text-shadow:5px 5px 5px #18ffff;

    }
`;

// export const ArrowImg = styled.img<AuthSwitchCssProps>`
// 	width: 25px;
// 	height: 25px;
// 	transform: ${({ isRight }) => (isRight ? 'rotate(0)' : 'rotate(180deg)')};
// `;

export const SwitchLabel = styled.p`
	font-size: 22px;
	margin: 0;
`;
