import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ValidationService } from '../../../../services/Validation';
import { BsInput } from '../../../Bootstrap/Input/BsInput';
import { ErrorLabel } from '../../SIngUp/Form/Styles';
import { SingUpFrom } from './Styles';

export const SingInForm = () => {
    const [isLoading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('sfsdf');

    const handleClick = () => setLoading(true);

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
            <Button disabled={!wrongValidation()} onClick={handleClick} variant='info'>
                {isLoading ? 'Loading…' : 'Login'}
            </Button>
            <ErrorLabel>{error}</ErrorLabel>
        </SingUpFrom>
    );
};
