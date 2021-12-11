import React from "react";
import { Field, reduxForm } from 'redux-form';
import { required } from "../../utills/validators/validators";
import { Input } from "../../utills/formsControls/formsControls";
import {connect} from "react-redux";
import { login } from "../../Redux/authHeader";
import { Redirect } from "react-router";
import classes from "../../utills/formsControls/FormControls.module.css";
import { createField } from "../../utills/formsControls/formsControls";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} >
            {createField("email", "email", Input, [required])}
            {createField("password", "password", Input, [required], {type: "password"})}
            {createField(null, "remember me", Input, [], {type: "checkbox"}, "remember me")}
            {error && <div className={classes.commonLoginError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
  })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authHeader.isAuth
})


export default connect(mapStateToProps, {login})(Login);