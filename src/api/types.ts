/**
 * A types of apis will be here.
 */

/**
 * types.
 */
type Kind = 'OK' | 'REJECTED';
type Common = {
    kind: Kind
};

/**
 * Api types.
 */
export type GetFBUserData = {
    kind: Kind;
    user?: {
        name: string;
        email: string;
        profilePicture: string;
    };
    error?: string;
};

/**
 * A function that gets error based on status.
 */
export function getError(status: number): string {
    let error: string = 'unknown error';

    switch (status) {
        case 400:
            error = 'bad request';
            break;

        case 404:
            error = 'not found';
            break;
    };

    return error;
};