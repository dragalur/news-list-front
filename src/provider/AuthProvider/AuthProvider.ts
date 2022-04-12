import { APIProvider } from '../ApiProvider';
import { AuthRegisterUserDto } from './Auth.dto';

export class AuthProvider extends APIProvider {
    static instance = new AuthProvider();

    createUser = (userData: AuthRegisterUserDto) => {
        this.post(this.getRequestUrl('/auth/register'), userData);
    };
}
