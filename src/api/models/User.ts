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
    subscription: UserSubscription;
    bio: string;
    coverPhoto: string;
    profilePicture: string;
};

/**
 * A User model.
 */
class User {

    /**
     * local variables.
     */
    id: '';
    name: '';
    email: '';
    updatedAt: 0;
    subscription: null;
    bio: string = null;
    coverPhoto: string = null;
    profilePicture: string = null;

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