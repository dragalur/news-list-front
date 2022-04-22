export type SingProps = {
	changeSingUpOnSingIn: () => void;
	showSingUp: boolean;
	redirect: () => void;
};

export type AuthProps = {
	redirectToStartPage: () => void;
	changeSingUpOnSingIn: () => void;
};
