/**
 * A User model interfaces and types.
 */
interface UserSubscription {
    isSubscribed: boolean;
    date: number;
};
export interface UserProps {
    id: string;
    name: string;
    email: string;
    updatedAt: number;
    bio: string;
    coverPhoto: string;
    profilePicture: string;
    subscription: UserSubscription;
};

/**
 * A User model.
 */
class User {

    /**
     * local variables.
     */
    id: string = null;
    name: string = null;
    email: string = null;
    updatedAt: 0;
    bio: string = null;
    coverPhoto: string = null;
    profilePicture: string = null;
    subscription: null;

    constructor(obj: UserProps) {
        for (let key in obj) {
            this[key] = obj[key];
        };
    };

};

/**
 * export as default.
 */
export default User;