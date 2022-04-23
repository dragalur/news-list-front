import React from 'react';
import { useNavigate } from 'react-router';
import { StringService } from '../../../services/String';
import { ProfilePostItemBlock, ProfilePostItemName } from './Styles';
import { ProfilePostItemProps } from './Types';

export const ProfilePostItem = ({ title, newsId }: ProfilePostItemProps) => {
	const navigate = useNavigate();

	return (
		<ProfilePostItemBlock onClick={() => navigate(`../../news/${newsId}`)}>
			<ProfilePostItemName>{StringService.cutText(title)}</ProfilePostItemName>
		</ProfilePostItemBlock>
	);
};
