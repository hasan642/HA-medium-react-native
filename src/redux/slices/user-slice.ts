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
        reset: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
        cacheUser: (state, { payload: user }: PayloadAction<UserApiModel>) => {
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
    setUser,
    reset
} = userSlice.actions;
export const {
    cacheUser
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
             * save user to redux.
             */
            dispatch(setUser(createdUserResponse.user));

            /**
             * reset user state.
             */
            dispatch(reset());

        } catch (e) {
            dispatch(setError(e));
        };
    };
};

/**
 * Update the user by id.
 */
export const updateUser = (user: Partial<UserApiModel>) => {
    return async (dispatch: Dispatch<any>) => {
        try {

            /**
             * enable loader.
             */
            dispatch(loadUser());

            /**
             * update user api.
             */
            const updatedUserResponse = await UserApi.updateUser(user);

            /**
             * hanlde if is not OK.
             */
            if (updatedUserResponse.kind !== 'OK') {
                dispatch(setError(updatedUserResponse.error));
                return;
            };

            /**
             * save user data to storage.
             */
            await storage.save(
                '@User',
                updatedUserResponse.user
            );

            /**
             * update user in redux.
             */
            dispatch(setUser(updatedUserResponse.user));

            /**
             * reset user state.
             */
            dispatch(reset());

        } catch (e) {
            dispatch(setError(e));
        };
    };
};