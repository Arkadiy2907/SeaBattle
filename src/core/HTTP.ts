type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

type TOptions = {
  headers?: Record<string, string>;
  method?: Methods;
  data?: any;
  contentType?: string;
};

export class Client {
    protected url: string;

    constructor(path: string) {
        this.url = `https://ya-praktikum.tech/api/v2${path}`;
    }

    get = (path = '/', data?: unknown, headers?: Record<string, string>) => this.request(this.url + path, { data, headers, method: 'GET' });

    post = (path: string, data?: unknown, headers?: Record<string, string>) => this.request(this.url + path, { method: 'POST', data, headers });

    put = (path: string, data: unknown, headers?: Record<string, string>, contentType?: string) => this.request(this.url + path, {
        method: 'PUT', data, headers, contentType,
    });

    delete = (path: string, data?: unknown, headers?: Record<string, string>) => this.request(this.url + path, { method: 'DELETE', data, headers });

    request = (url: string, options: TOptions = { method: 'GET' }) => {
        const { method, data = {}, headers = {} } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method || '', url);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status >= 200 && xhr.status <= 299) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.onabort = () => reject({ reason: 'abort' });
            xhr.onerror = () => reject({ reason: 'network error' });
            xhr.ontimeout = () => reject({ reason: 'timeout' });

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            Object.entries(headers).forEach((entry) => xhr.setRequestHeader(entry[0], entry[1]));
            xhr.setRequestHeader('Accept', 'application/json');

            if (method === 'GET' || !data) {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send();
            } else if (data instanceof FormData) {
                xhr.send(data);
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
