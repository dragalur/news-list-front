import { Form } from 'react-bootstrap';
import { BsInputProps } from '../Input/Types';

export const BsTextArea = ({ labelText, placeholder, type = 'text', validateText, onChange, value }: BsInputProps) => {
	const changeHandler = target => {
		const value = target.currentTarget.value;
		onChange && onChange(value);
	};

	return (
		<Form.Group controlId="exampleForm.ControlTextarea1" style={{ width: '100%' }}>
			<Form.Label>{labelText}</Form.Label>
			<Form.Control
				as={'textarea'}
				type={type}
				placeholder={placeholder}
				onChange={changeHandler}
				style={{ minHeight: '150px' }}
				value={value}
			/>
			<Form.Control.Feedback type="invalid">{validateText}</Form.Control.Feedback>
		</Form.Group>
	);
};
