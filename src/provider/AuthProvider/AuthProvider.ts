import { User } from '../../configs/Types';
import { LocalStorageService } from '../../services/storage/LocalStorage';
import { APIProvider } from '../ApiProvider';
import { AuthLoginUserDto, AuthLoginUserResDto, AuthRegisterUserReqDto } from './Auth.dto';

export class AuthProvider extends APIProvider {
	static instance = new AuthProvider();

	public createUser = (userData: AuthRegisterUserReqDto) => {
		return this.post<AuthLoginUserResDto>(this.getRequestUrl('account/create'), userData).then(this.setLocalData);
	};

	public login = (userData: AuthLoginUserDto) => {
		return this.post<AuthLoginUserResDto>(this.getRequestUrl('account/login'), userData).then(this.setLocalData);
	};

	public logout = () => {
		const _id = (LocalStorageService.get('user') as User)._id;
		return this.post(this.getRequestUrl('account/logout'), { _id }).then(this.removeLocalData);
	};

	private setLocalData = (data: AuthLoginUserResDto) => {
		if (!data.error) {
			LocalStorageService.set('accessToken', data.access_token);
			LocalStorageService.set('refreshToken', data.refresh_token);
			LocalStorageService.set('user', data.user);
		}
		return data;
	};

	private removeLocalData = () => {
		LocalStorageService.remove('accessToken');
		LocalStorageService.remove('refreshToken');
		LocalStorageService.remove('user');
	};
}
