import React from 'react';
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props';
import {Button} from "reactstrap";
import {useDispatch} from "react-redux";
import {loginWithFacebook} from "../../store/actions/usersActions";

const FacebookLogin = () => {
    const dispatch = useDispatch();

    const callback = (facebookData) => {
        if (facebookData.id) {
            dispatch(loginWithFacebook(facebookData))
        }
    };

    return (
        <FacebookLoginButton
            appId="289309685388533"
            fields="name,email,picture"
            callback={callback}
            render={renderProps => (
                <Button
                    onClick={renderProps.onClick}
                >
                    Login with Facebook
                </Button>
            )}
        />
    );
};

export default FacebookLogin;