
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getRemember } from "./StorageUtils";

export function LoginRoute({ component: Component, ...rest }) {
    const remember = getRemember();
    return (
        <Route
            {...rest}
            render={props => {
                if (remember === false) {
                    return <Component {...props}/>
                } else {
                    return (<Redirect
                        to={{
                            pathname: "/home",
                            state: {from: props.location}
                        }}
                    />);
                }
            }}/>
    );
}