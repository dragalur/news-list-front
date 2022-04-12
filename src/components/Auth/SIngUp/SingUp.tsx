import { SIngUpForm } from './Form/SIngUpForm';
import { AuthSwitch } from '../Switch/AuthSwitch';
import { SingUpContainer } from './Styles';
import { AuthLabel, SingWrapperBlock } from '../Styles';
import { SingProps } from '../Types';

export const SingUp = ({ changeSingUpOnSingIn, showSingUp }: SingProps) => {
    return (
        <SingUpContainer showSingUp={showSingUp}>
            <AuthSwitch isRight changeSingUpOnSingIn={changeSingUpOnSingIn} switchText={'Switch to Login'} />
            <SingWrapperBlock>
                <AuthLabel>Sing up</AuthLabel>
                <SIngUpForm />
            </SingWrapperBlock>
        </SingUpContainer>
    );
};
