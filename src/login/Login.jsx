import React from "react";
import styles from "./../components/common/FormControls/FormControls.module.css"
import {reduxForm} from "redux-form";
import {requireField} from "../utils/validators/Validators";
import {createField, Input} from "../components/common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../redux/auth_reducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField(Input,[requireField],"Email","email")}
            {createField(Input,[requireField],"Password","password", {type: "password"})}
            {createField(Input,[],null,"rememberMe", {type: "checkbox"},"remember Me")}
            <div>
                <button>Login</button>
            </div>
            {error &&
            <span className={styles.forSummaryError}>
                        {error}
                    </span>
            }
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)


const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h3>Login</h3>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (Login);