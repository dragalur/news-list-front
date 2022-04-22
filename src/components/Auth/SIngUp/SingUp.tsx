import { SIngUpForm } from './Form/SIngUpForm';
import { AuthSwitch } from '../Switch/AuthSwitch';
import { SingUpContainer } from './Styles';
import { AuthLabel, SingWrapperBlock } from '../Styles';

export const SingUp = () => {
	return (
		<SingUpContainer showSingUp={false}>
			<AuthSwitch isRight switchText={'Switch to Login'} />
			<SingWrapperBlock>
				<AuthLabel>Sing up</AuthLabel>
				<SIngUpForm />
			</SingWrapperBlock>
		</SingUpContainer>
	);
};
