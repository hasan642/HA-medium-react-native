import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice";

/**
 * create a store.
 */
const store = configureStore({
    reducer: {

        /**
         * all resucers should be called here.
         */
        userStore: userReducer,

    },
    middleware: (defaultMiddleware) => defaultMiddleware({
        serializableCheck: false
    }),
});

/**
 * export store as default.
 */
export default store;