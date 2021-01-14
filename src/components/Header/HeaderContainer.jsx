import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auth, logout, setAuthUsersData} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.auth(this.props.id, this.props.email, this.props.login);
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUsersData, auth, logout})(HeaderContainer);