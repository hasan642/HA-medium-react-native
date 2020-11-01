/**
 * A .ts file that contains a functions to provide things
 * * to registered screens.
 */

import React from 'react';
import { Provider } from "react-redux"
import { reduxStore } from "redux";

/**
 * add redux to screen.
 */
function withRedux(Component: any) {
    return (props: any) => (
        <Provider store={reduxStore}>
            <Component
                {...props}
            />
        </Provider>
    );
};

/**
 * export all providers.
 */
export {
    withRedux
};