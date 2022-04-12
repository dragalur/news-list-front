import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthProvider } from '../../../../provider/AuthProvider/AuthProvider';
import { ValidationService } from '../../../../services/Validation';
import { BsInput } from '../../../Bootstrap/Input/BsInput';
import { ErrorLabel, SingUpFrom } from './Styles';

export const SIngUpForm = () => {
    const [isLoading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        setLoading(true);
        AuthProvider.instance.createUser({ email, login: name, password });
    };

    const isPasswordsSame = (repeatPass: string) => password === repeatPass;

    const wrongValidation = () =>
        ValidationService.emailValidation(email) &&
        ValidationService.nameValidation(name) &&
        ValidationService.passwordValidation(password) &&
        isPasswordsSame(repeatPassword);

    return (
        <SingUpFrom>
            <BsInput
                labelText={'Email'}
                placeholder={'name@example.com'}
                type={'email'}
                onChange={setEmail}
                validate={ValidationService.emailValidation}
                validateText={'Email is not valid'}
            />
            <BsInput
                labelText={'Name'}
                placeholder={'Your login'}
                type={'text'}
                validate={ValidationService.nameValidation}
                onChange={setName}
                validateText={'Name must be between 4 and 20 symbols'}
            />
            <BsInput
                labelText={'Password'}
                placeholder={'Password'}
                type={'password'}
                onChange={setPassword}
                validate={ValidationService.passwordValidation}
                validateText={'Password must be between 6 and 20 symbols'}
            />
            <BsInput
                labelText={'Repeat password'}
                placeholder={'Repeat password'}
                type={'password'}
                onChange={setRepeatPassword}
                validate={isPasswordsSame}
                validateText={'Password are not same'}
            />
            <Button disabled={!wrongValidation()} onClick={handleClick} variant='info'>
                {isLoading ? 'Loading…' : 'Sing Up '}
            </Button>
            <ErrorLabel>{error}</ErrorLabel>
        </SingUpFrom>
    );
};
