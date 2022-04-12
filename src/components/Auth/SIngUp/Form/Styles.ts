import styled from 'styled-components';
import { Flex } from '../../../../layout/Flex';

export const SingUpFrom = styled(Flex)`
    width: 90%;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    padding: 10px 5px;
    background: rgb(255, 255, 255, 0.5);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 20px;
`;

export const ErrorLabel = styled.p`
    font-size: 16px;
    color: red;
    margin: 0;
`;
