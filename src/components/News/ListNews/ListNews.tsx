import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NewsDTO } from '../../../provider/NewsProvider/News.dto';
import { NewsProvider } from '../../../provider/NewsProvider/NewsProvider';
import { NewsListWrapper } from '../Styles';
import { ListNewItem } from './ListNewItem/ListNewsItem';
import { SpinerClass } from './Styles';

export const ListNews = () => {
	const [news, setNews] = useState<NewsDTO[]>();
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		NewsProvider.instance
			.getNewsAll()
			.then(setNews)
			.finally(() => setLoading(false));
	}, []);

	return (
		<>
			<NewsListWrapper>
				{loading ? (
					<Spinner animation="border" style={SpinerClass} />
				) : (
					news?.map(({ authorName, text, title, createdAt, _id }) => (
						<ListNewItem key={_id} text={text} title={title} author={authorName} date={createdAt} id={_id} />
					))
				)}
			</NewsListWrapper>
		</>
	);
};
