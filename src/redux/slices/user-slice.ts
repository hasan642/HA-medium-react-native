/**
 * A user-slice file.
 */

import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { UserState } from "../types";
import {
    UserApi,
    UserApiModel
} from "api";
import { Dispatch } from "react";
import storage from "utils/storage/storage";

/**
 * The initial state.
 */
const initialState: UserState = {
    loading: false,
    error: null,
    success: false,
    user: null,
};

/**
 * create a user slice.
 */
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        setError: (state, { payload: error }: PayloadAction<string>) => {
            state.loading = false;
            state.error = error;
            state.success = false;
        },
        setUser: (state, { payload: user }: PayloadAction<UserApiModel>) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.user = user;
        },
    },
});

/**
 * grap the actions.
 */
const {
    loadUser,
    setError,
    setUser
} = userSlice.actions;

/**
 * export all needed from userSlice.
 * 
 * 'selector' allows us to select a specific bit from store state,
 * * in this case we get a user state from store.
 */
export const userSelector = (state: { userStore: UserState }) => state.userStore;
export default userSlice.reducer;

/**
 * user actions.
 */
export const createUser = (
    name: string,
    email: string,
    profilePhoto: string
) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            console.log('start');

            /**
             * enable loader.
             */
            dispatch(loadUser());
            console.log('22222');
            /**
             * create user api.
             */
            const createdUserResponse = await UserApi.createNewUser(name, email, profilePhoto);
            console.log('createdUserResponse', createdUserResponse)
            /**
             * hanlde if not OK.
             */
            if (createdUserResponse.kind !== 'OK') {
                dispatch(setError(createdUserResponse.error));
                return;
            };

            /**
             * save user data to storage.
             */
            await storage.save(
                '@User',
                createdUserResponse.user
            );

            dispatch(setUser(createdUserResponse.user));

        } catch (e) {
            dispatch(setError(e));
        };
    };
};