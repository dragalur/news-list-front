import { ApiUrls } from '../configs/Environment';

export abstract class APIProvider {
    get = (path: string) => {
        return fetch(path, { ...this.getDefaultOptions('GET') }).then(this.processResponse);
    };

    protected post = (path: string, body = {}) => {
        fetch(path, { ...this.getDefaultOptions('GET'), body: this.getRequestBody(body) }).then(
            this.processResponse
        );
    };

    protected getRequestUrl = (path: string) => `${ApiUrls.backendApi}${path}`;

    private getRequestBody = body => JSON.stringify(body);

    private processResponse = (response: Response) => {
        if (response.status === 200) return response.json();
        return Promise.reject();
    };

    private getDefaultOptions = (method: string): RequestInit => ({
        headers: this.createJsonHeaders(),
        method,
    });

    private createJsonHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        return headers;
    }
}
