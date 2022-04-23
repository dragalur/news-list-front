export interface NewsCreateDTO {
	title: string;
	text: string;
	authorName: string;
	authorId: string;
}

export type NewsDTO = NewsCreateDTO & {
	createdAt: Date;
	_id: string;
	updatedAt: Date;
};

export interface UserNewsDTO {
	_id: string;
	title: string;
}
