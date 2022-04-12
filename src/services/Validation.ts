import { emailRegex } from '../configs/regex';

export class ValidationService {
    static emailValidation = email => emailRegex.test(email);

    static passwordValidation = (password: string, min = 6, max = 20) =>
        password.length >= min && password.length <= max;

    static nameValidation = (name: string) => this.passwordValidation(name, 4) && !name.includes(' ');
}
