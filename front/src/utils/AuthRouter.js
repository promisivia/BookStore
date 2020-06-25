import React from "react";
import { message } from "antd";
import { Redirect, Route } from "react-router-dom";
import { getUser } from "./StorageUtils";

export function AuthRoute({ component: Component, ...rest }) {
    const user = getUser();
    return (
        <Route
            {...rest}
            render={props => {
                if (user) {
                    return <Component {...props}/>
                } else {
                    message.warning("需要先登陆");
                    return (<Redirect
                        to={{
                            pathname: "/login",
                            state: {from: props.location}
                        }}
                    />);
                }
            }}/>
    );
}