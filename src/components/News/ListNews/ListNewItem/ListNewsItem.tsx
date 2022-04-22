import React from 'react';
import { useNavigate } from 'react-router';
import { DateService } from '../../../../services/Date';
import { StringService } from '../../../../services/String';
import { New, NewName, NewText, NewFooter, NewFooterText } from './Styles';
import { ListNewsItemProps } from './Types';

export const ListNewItem = ({ text, title, date, author, id }: ListNewsItemProps) => {
	const navigator = useNavigate();

	return (
		<>
			<New onClick={() => navigator(id)}>
				<NewName>{StringService.cutText(title)}</NewName>
				<NewText>{StringService.cutText(text, 150)}</NewText>
				<NewFooter>
					<NewFooterText>{`${DateService.getTime(date)} ${DateService.getDate(date)}`}</NewFooterText>
					<NewFooterText>Author: {author}</NewFooterText>
				</NewFooter>
			</New>
		</>
	);
};
