type Url = {
    url: string;
};

interface Options {
    method: string;
    data?: Record<string, any>;
    headers?: Record<string, any>;
    timeout?: number;
}

const enum Methods {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE",
}

const queryStringify = (data: Record<string, any>): string => {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }
    return Object.keys(data)
        .reduce((acc, cur) => `${acc}${cur}=${data[cur]}&`, '?')
        .slice(0, -1);
}

class HTTPTransport {

    get = (url: Url, options: Options) => {
        const { data } = options;
        if (data)`${url}${queryStringify(data)}`;

        return this.request(
            url,
            { ...options, method: Methods.GET },
            options.timeout
        );
    };

    put = (url: Url, options: Options) => {
        return this.request(
            url,
            { ...options, method: Methods.PUT },
            options.timeout
        );
    };

    post = (url: Url, options: Options) => {
        return this.request(
            url,
            { ...options, method: Methods.POST },
            options.timeout
        );
    };

    delete = (url: Url, options: Options) => {
        return this.request(
            url,
            { ...options, method: Methods.DELETE },
            options.timeout
        );
    };

    request = (
        url: Url,
        options: Options = { method: Methods.GET },
        timeout = 5000
    ) => {
        const { method, data, headers } = options;
        if (typeof url !== 'string') return;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            for (const headerName in headers) {
                xhr.setRequestHeader(headerName, headers[headerName]);
            }

            xhr.onload = function () {
                resolve(xhr);
            };
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = function () {
                reject();
            };

            if (method === Methods.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}

export default HTTPTransport;