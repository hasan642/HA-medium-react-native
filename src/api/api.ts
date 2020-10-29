import { DEFAULT_HEADERS } from "./default";

/**
 * types.
 */
type ObjectType = { [key: string]: any };

/**
 * A base class of api (fetch).
 */
class Api {

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
         * api call.
         */
        const apiCall = fetch(
            url,
            {
                headers: {
                    ...DEFAULT_HEADERS,
                    ...headers
                },
            }
        );

        /**
         * return api call.
         */
        return apiCall;
    };

    post = () => {

    };

    put = () => {

    };

    delete = () => {

    };

};

/**
 * export an Api class without create instance.
 */
export default Api;