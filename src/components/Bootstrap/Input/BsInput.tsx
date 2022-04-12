import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BsInputProps } from './Types';

export const BsInput = ({ labelText, placeholder, type, validate, validateText, onChange }: BsInputProps) => {
    const [valid, setValid] = useState(true);

    const changeHandler = target => {
        const value = target.currentTarget.value;
        onChange && onChange(value);
        validate && setValid(validate(value));
    };

    return (
        <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Label>{labelText}</Form.Label>
            <Form.Control
                isValid={valid}
                isInvalid={!valid}
                htmlSize={100}
                type={type}
                placeholder={placeholder}
                onChange={changeHandler}
            />
            <Form.Control.Feedback type='invalid'>{validateText}</Form.Control.Feedback>
        </Form.Group>
    );
};
