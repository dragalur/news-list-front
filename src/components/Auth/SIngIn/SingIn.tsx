import { SingInForm } from './Form/SingInForm';
import { AuthSwitch } from '../Switch/AuthSwitch';
import { SingInContainer } from './Styles';
import { AuthLabel, SingWrapperBlock } from '../Styles';
import { SingProps } from '../Types';

export const SingIn = ({ changeSingUpOnSingIn, showSingUp }: SingProps) => {
    return (
        <SingInContainer showSingUp={showSingUp}>
            <AuthSwitch
                isRight={false}
                changeSingUpOnSingIn={changeSingUpOnSingIn}
                switchText={'Switch to Register'}
            />
            <SingWrapperBlock>
                <AuthLabel>Sing In</AuthLabel>
                <SingInForm />
            </SingWrapperBlock>
        </SingInContainer>
    );
};
