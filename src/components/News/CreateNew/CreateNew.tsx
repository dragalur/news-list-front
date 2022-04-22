import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { User } from '../../../configs/Types';
import { NewsProvider } from '../../../provider/NewsProvider/NewsProvider';
import { LocalStorageService } from '../../../services/storage/LocalStorage';
import { BsInput } from '../../Bootstrap/Input/BsInput';
import { BsTextArea } from '../../Bootstrap/TextArea/BsTextArea';
import { InstructionBlock } from './Instruction/CreateNew';
import { ButtonBlock, CreateNewTitle, CreateNewWrapper } from './Styles';

export const CreateNew = () => {
	const [title, setTitle] = useState<string>('');
	const [text, setText] = useState<string>('');
	const navigate = useNavigate();

	const createNews = () => {
		const user = LocalStorageService.get<User>('user') as User;
		NewsProvider.instance
			.createNews({ title, text, authorName: user.username, authorId: user._id })
			.finally(() => navigate('../'));
	};

	return (
		<>
			<CreateNewWrapper>
				<InstructionBlock />
				<CreateNewTitle>New info</CreateNewTitle>
				<BsInput labelText="Name new" placeholder="Name" onChange={setTitle} />
				<BsTextArea labelText="New body" placeholder="Info about new" onChange={setText} />
				<ButtonBlock>
					<Button onClick={createNews}>Create new</Button>
				</ButtonBlock>
			</CreateNewWrapper>
		</>
	);
};
