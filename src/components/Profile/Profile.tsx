import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { User } from '../../configs/Types';
import { UserNewsDTO } from '../../provider/NewsProvider/News.dto';
import { NewsProvider } from '../../provider/NewsProvider/NewsProvider';
import { LocalStorageService } from '../../services/storage/LocalStorage';
import { Loader } from '../Loader/Loader';
import { AccountInfo } from './AccountInfo/AccountInfo';
import { AccountInfoTitle } from './AccountInfo/Styles';
import { ProfilePostItem } from './ProfilePostItem/ProfilePostItem';
import { ProfilePostBlock, ProfileWrapper } from './Styles';

export const Profile = () => {
	const [userPosts, setUserPosts] = useState<UserNewsDTO[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		NewsProvider.instance
			.getUserPosts((LocalStorageService.get('user') as User)._id)
			.then(data => {
				setUserPosts(data);
			})
			.finally(() => setLoading(false));
	});

	return (
		<ProfileWrapper>
			<AccountInfo />
			<AccountInfoTitle>Your posts</AccountInfoTitle>
			{loading ? (
				<Loader />
			) : (
				<ProfilePostBlock>
					{userPosts.map(({ title, _id }) => (
						<ProfilePostItem title={title} newsId={_id} />
					))}
				</ProfilePostBlock>
			)}
		</ProfileWrapper>
	);
};
