export interface AuthRegisterUserReqDto {
    email: string;
    password: string;
    username: string;
}

export interface AuthLoginUserResDto {
    user: Omit<AuthRegisterUserReqDto, 'password'> & { _id: any };
    access_token: string;
    refresh_token: string;
    error?: string;
}

export type AuthLoginUserDto = Omit<AuthRegisterUserReqDto, 'username'>;
