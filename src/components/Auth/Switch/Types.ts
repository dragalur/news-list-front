import { SingProps } from '../Types';

export type AuthSwitchCssProps = {
	isRight: boolean;
};

export type AuthSwitchProps = AuthSwitchCssProps & {
	switchText: string;
};
// & Omit<SingProps, 'showSingUp' | 'redirect'>;
