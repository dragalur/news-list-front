import React, { useEffect, useState } from 'react';
import { NewsDTO } from '../../../provider/NewsProvider/News.dto';
import { NewsProvider } from '../../../provider/NewsProvider/NewsProvider';
import { Loader } from '../../Loader/Loader';
import { NewsListWrapper } from '../Styles';
import { ListNewItem } from './ListNewItem/ListNewsItem';

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
					<Loader />
				) : (
					news?.map(({ authorName, text, title, createdAt, _id }) => (
						<ListNewItem key={_id} text={text} title={title} author={authorName} date={createdAt} id={_id} />
					))
				)}
			</NewsListWrapper>
		</>
	);
};
