export class StringService {
	public static cutText = (text: string, countOfCharacters = 20) => {
		return text.length >= countOfCharacters ? `${text.slice(0, countOfCharacters)}...` : text;
	};
}
