import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
const ProfileInfo = ({profile, status, updateUsersStatus}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <div>
                    <img className={s.picture} src={profile.photos.large}/>
                </div>
                <div className={s.nickname}>
                    <ProfileStatus status={status} updateUsersStatus={updateUsersStatus}/>
                </div>
            </div>
            <div>
                <h3 className={s.Myposts}>My posts :</h3>
            </div>
        </div>
    );
}

    export default ProfileInfo;