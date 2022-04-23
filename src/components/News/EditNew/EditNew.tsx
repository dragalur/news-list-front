import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { NewsProvider } from '../../../provider/NewsProvider/NewsProvider';
import { BsInput } from '../../Bootstrap/Input/BsInput';
import { BsTextArea } from '../../Bootstrap/TextArea/BsTextArea';
import { Loader } from '../../Loader/Loader';
import { ReadNewsParams } from '../ReadNew/Types';
import { ButtonBlock, CreateNewTitle, CreateNewWrapper } from './Styles';

export const EditPost = () => {
	const [title, setTitle] = useState<string>('');
	const [text, setText] = useState<string>('');
	const navigate = useNavigate();

	const [loading, setLoading] = useState<boolean>(true);
	const { idNews = '' } = useParams<ReadNewsParams>();

	useEffect(() => {
		NewsProvider.instance
			.getNewsById(idNews)
			.then(data => {
				setTitle(data.title);
				setText(data.text);
			})
			.finally(() => setLoading(false));
	}, []);

	const redirectToPost = () => navigate(`../../news/${idNews}`);

	const saveChanges = () => NewsProvider.instance.updatePost(idNews, { title, text }).then(redirectToPost);

	return (
		<CreateNewWrapper>
			{loading ? (
				<Loader />
			) : (
				<>
					<CreateNewTitle>Edit post</CreateNewTitle>
					<BsInput labelText="Name " placeholder="Name" value={title} onChange={setTitle} />
					<BsTextArea labelText="Text body" placeholder="Info about new" value={text} onChange={setText} />
					<ButtonBlock>
						<Button onClick={saveChanges}>Save changes</Button>
					</ButtonBlock>
				</>
			)}
		</CreateNewWrapper>
	);
};
