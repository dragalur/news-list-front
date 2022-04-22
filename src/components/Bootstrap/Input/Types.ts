export type BsInputProps = {
	labelText: string;
	placeholder?: string;
	type?: 'email' | 'text' | 'password';
	validateText?: string;
	validate?: (value) => boolean;
	onChange?: (value) => void;
	value?: string;
};
