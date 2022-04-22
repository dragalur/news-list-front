import { SingInForm } from './Form/SingInForm';
import { AuthSwitch } from '../Switch/AuthSwitch';
import { SingInContainer } from './Styles';
import { AuthLabel, SingWrapperBlock } from '../Styles';

export const SingIn = () => {
	return (
		<SingInContainer showSingUp={true}>
			<AuthSwitch isRight={false} switchText={'Switch to Register'} />
			<SingWrapperBlock>
				<AuthLabel>Sing In</AuthLabel>
				<SingInForm />
			</SingWrapperBlock>
		</SingInContainer>
	);
};
