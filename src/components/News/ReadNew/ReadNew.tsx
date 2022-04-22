import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { User } from '../../../configs/Types';
import { NewsDTO } from '../../../provider/NewsProvider/News.dto';
import { NewsProvider } from '../../../provider/NewsProvider/NewsProvider';
import { DateService } from '../../../services/Date';
import { LocalStorageService } from '../../../services/storage/LocalStorage';
import { CreateNewText } from '../CreateNew/Instruction/Styles';
import { ButtonBlock, CreateNewTitle } from '../CreateNew/Styles';
import { SpinerClass } from '../ListNews/Styles';
import { ReadHeaderText, ReadNewHeader, ReadNewWrapper } from './Styles';
import { ReadNewsParams } from './Types';

export const ReadNew = () => {
	const [{ title, text, authorName, updatedAt, authorId }, setNews] = useState<NewsDTO>({} as NewsDTO);
	const [loading, setLoading] = useState<boolean>(true);
	const { idNews = '' } = useParams<ReadNewsParams>();
	const navigate = useNavigate();

	useEffect(() => {
		NewsProvider.instance
			.getNewsById(idNews)
			.then(setNews)
			.finally(() => setLoading(false));
	}, []);

	const redirectToEditPage = () => navigate('edit');

	const isUserOwner = () => (LocalStorageService.get('user') as User)._id === authorId;

	const deletePost = () => NewsProvider.instance.deletePost(idNews).then(() => navigate('../'));

	return (
		<ReadNewWrapper>
			{loading ? (
				<ButtonBlock>
					<Spinner animation="border" style={SpinerClass} />
				</ButtonBlock>
			) : (
				<>
					<ReadNewHeader>
						<ReadHeaderText>{`Last update: ${DateService.getTime(updatedAt)} ${DateService.getDate(
							updatedAt
						)}`}</ReadHeaderText>
						<ReadHeaderText>Created by: {authorName}</ReadHeaderText>
					</ReadNewHeader>
					<CreateNewTitle>{title}</CreateNewTitle>
					<CreateNewText>{text}</CreateNewText>
					{isUserOwner() && (
						<ButtonBlock>
							<Button onClick={redirectToEditPage}>Edit post</Button>
							<Button variant="danger" onClick={deletePost}>
								Delete post
							</Button>
						</ButtonBlock>
					)}
				</>
			)}
		</ReadNewWrapper>
	);
};
