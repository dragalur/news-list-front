import { APIProvider } from '../ApiProvider';
import { NewsCreateDTO, NewsDTO } from './News.dto';

export class NewsProvider extends APIProvider {
	static instance = new NewsProvider();

	public createNews = (newsData: NewsCreateDTO) => {
		return this.post(this.getRequestUrl('news/create'), newsData);
	};

	public getNewsAll = () => {
		return this.get<NewsDTO[]>(this.getRequestUrl('news'));
	};

	public getNewsById = (_id: string) => {
		return this.get<NewsDTO>(this.getRequestUrl(`news/${_id}`));
	};

	public updatePost = (_id: string, updateData) => {
		return this.patch(this.getRequestUrl(`news/${_id}`), updateData);
	};

	public deletePost = (_id: string) => {
		return this.delete(this.getRequestUrl(`news/${_id}`));
	};
}
