import { ArrowImg, SingUpSwitchBlock, SwitchLabel } from './Styles';
import arrowIng from '../../../images/arrow.svg';
import { AuthSwitchProps } from './Types';

export const AuthSwitch = ({ isRight, changeSingUpOnSingIn, switchText }: AuthSwitchProps) => {
    return (
        <SingUpSwitchBlock isRight={isRight} onClick={changeSingUpOnSingIn}>
            <SwitchLabel>{switchText}</SwitchLabel>
            <ArrowImg isRight={isRight} src={arrowIng} />
        </SingUpSwitchBlock>
    );
};
