import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ValidationService } from '../../../../services/Validation';
import { BsInput } from '../../../Bootstrap/Input/BsInput';
import { ErrorLabel } from '../../SIngUp/Form/Styles';
import { SingUpFrom } from './Styles';
import { AuthProvider } from '../../../../provider/AuthProvider/AuthProvider';
import { useOutletContext } from 'react-router-dom';
import { AuthProps } from '../../Types';

export const SingInForm = () => {
	const [isLoading, setLoading] = useState(false);
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const { redirectToStartPage } = useOutletContext<AuthProps>();

	const handleClick = () => {
		setLoading(true);
		AuthProvider.instance
			.login({ email, password })
			.then(data => (data.error ? setError(data.error) : redirectToStartPage()))
			.finally(() => setLoading(false));
	};

	const wrongValidation = () => ValidationService.emailValidation(email) && !!password.length;

	return (
		<SingUpFrom>
			<BsInput
				labelText={'Email'}
				placeholder={'name@example.com'}
				type={'email'}
				onChange={setEmail}
				validate={ValidationService.emailValidation}
			/>
			<BsInput
				labelText={'Password'}
				placeholder={'Password'}
				type={'password'}
				onChange={setPassword}
				validate={value => !!value.length}
			/>
			<Button disabled={!wrongValidation()} onClick={handleClick} variant="info">
				{isLoading ? 'Loading…' : 'Login'}
			</Button>
			<ErrorLabel>{error}</ErrorLabel>
		</SingUpFrom>
	);
};
