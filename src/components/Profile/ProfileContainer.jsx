import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUsersProfile, updateUsersStatus} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom"
import {compose} from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push("/login")
            }
        }
         this.props.getProfile(userId);
         this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUsersStatus={this.props.updateUsersStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose (
    connect(mapStateToProps, {setUsersProfile, getProfile, getStatus,updateUsersStatus}),
    withRouter
)(ProfileContainer);