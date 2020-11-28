import { DEFAULT_HEADERS } from "./default";

/**
 * types.
 */
type ObjectType = { [key: string]: any };

/**
 * A base class of api with (fetch js),
 * "get,post,put, and delete" methods have been handled.
 */
class Api {

    /**
     * implement the "GET" method.
     */
    get = async (
        url: string,
        headers?: ObjectType,
        params?: ObjectType
    ) => {

        /**
         * add params to url if there are.
         */
        if (params) {
            const query = [];
            for (const property in params) {
                const val = params[property];
                query.push(`${property}=${val}`);
            };

            /**
             * add params to url.
             */
            url += `?${query.join('&')}`;

        };

        /**
         * returns a get api call.
         */
        return fetch(
            url,
            {
                headers: {
                    ...DEFAULT_HEADERS,
                    ...headers
                },
            }
        );
    };

    /**
     * implement the "POST" method.
     */
    post = (
        url: string,
        body: ObjectType,
        headers?: ObjectType
    ) => {

        /**
         * returns a post api call.
         */
        return fetch(url, {
            method: 'POST',
            headers: {
                ...DEFAULT_HEADERS,
                ...headers
            },
            body: JSON.stringify(body),
        });
        
    };

    /**
     * implement the "PUT" method.
     */
    put = (
        url: string,
        body: ObjectType,
        headers?: ObjectType
    ) => {

        /**
         * returns a put api call.
         */
        return fetch(url, {
            method: 'PUT',
            headers: {
                ...DEFAULT_HEADERS,
                ...headers
            },
            body: JSON.stringify(body),
        });

    };

    /**
     * implement the "DELETE" method.
     */
    delete = () => {

    };

};

/**
 * export an Api class without create instance.
 */
export default Api;