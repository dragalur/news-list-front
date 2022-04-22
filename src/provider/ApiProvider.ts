import { ApiUrls } from '../configs/Environment';
import { LocalStorageService } from '../services/storage/LocalStorage';
import axios, { AxiosResponse } from 'axios';
import { AuthLoginUserResDto } from './AuthProvider/Auth.dto';

export abstract class APIProvider {
	constructor() {
		this.initializeInterceptor(); //TODO: costil
	}

	protected get = <T>(url: string, headers?: any): Promise<T> => {
		return axios.get(url, { headers: this.createJsonHeaders(headers) }).then(this.processResponse);
	};

	protected post = <T>(url: string, data = {}, headers?: any): Promise<T> => {
		return axios.post<T>(url, data, { headers: this.createJsonHeaders(headers) }).then(this.processResponse);
	};

	protected patch = <T>(url: string, data = {}, headers?: any): Promise<T> => {
		return axios.patch(url, data, { headers: this.createJsonHeaders(headers) }).then(this.processResponse);
	};

	protected delete = (url: string, headers?: any) => {
		return axios.delete(url, { headers: this.createJsonHeaders(headers) }).then(this.processResponse);
	};

	protected getRequestUrl = (path: string) => `${ApiUrls.backendApi}${path}`;

	private processResponse = (response: AxiosResponse) => {
		if (response.status >= 200 && response.status < 400) return this.parseResponse(response);
		return Promise.reject();
	};

	private parseResponse = (response: AxiosResponse) => response.data;

	private createJsonHeaders(header = {}) {
		const headers = { ...header, 'Content-Type': 'application/json', Accept: 'application/json' };
		this.setToken(headers);
		return headers;
	}

	private setToken = (headers: any) => {
		const token = LocalStorageService.get('accessToken');
		if (token) headers['Authorization'] = `Bearer ${token}`;
	};

	private initializeInterceptor = () => axios.interceptors.response.use(response => response, this.refreshTokenIntercept);

	private refreshTokenIntercept = err => {
		if (err.response.status === 401 && err.config) {
			return this.refreshToken()
				.then(token => {
					err.config.headers['Authorization'] = 'Bearer ' + token;
					return axios(err.config);
				})
				.then(this.processResponse);
		}
		return Promise.reject();
	};

	private refreshToken = () => {
		const refreshToken = LocalStorageService.get('refreshToken');
		return this.post<AuthLoginUserResDto>(this.getRequestUrl('account/refreshToken'), { refreshToken }).then(data => {
			LocalStorageService.set('refreshToken', data.refresh_token);
			LocalStorageService.set('accessToken', data.access_token);
			return data.access_token;
		});
	};
}
