/**
 * A User model interfaces and types.
 */
interface Subscription {
    isSubscribed: boolean;
    date: number;
};
export interface UserProps {
    id: string;
    name: string;
    email: string;
    updatedAt: number;
    subscription?: Subscription;
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

    constructor(obj: UserProps) {
        for (let key in obj) {
            this[key] = obj[key];
        }
    };
    
};

/**
 * export as default.
 */
export default User;