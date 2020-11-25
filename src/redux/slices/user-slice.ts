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
import { goToApp } from "navigation";

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
 * Craete new user.
 */
export const createUser = (
    name: string,
    email: string,
    profilePhoto: string
) => {
    return async (dispatch: Dispatch<any>) => {
        try {

            /**
             * enable loader.
             */
            dispatch(loadUser());

            /**
             * create user api.
             */
            const createdUserResponse = await UserApi.createNewUser(name, email, profilePhoto);

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

            /**
             * save user to redux
             */
            dispatch(setUser(createdUserResponse.user));

            /**
             * set root again.
             */
            goToApp();

        } catch (e) {
            dispatch(setError(e));
        };
    };
};

/**
 * Update an user by id.
 */
export const updateUser = () => {
    return async (dispatch: Dispatch<any>) => {
        try {

        } catch (e) {
            dispatch(setError(e));
        };
    };
};