import React from "react";
import style from "./Users.module.css"
import userPhoto from "../../../assets/images/user.jpg"
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {
    return <div>
                <span>
                    <div>
                        {<NavLink to={'/profile/' + user.id}><img src={user.photos.small != null ? user.photos.small : userPhoto}
                                                               className={style.profilePhotoes}/>
                        </NavLink>}
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>UnFollow</button>
                            : <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    </div>
                    <div> {"u.location.country"} </div>
                    <div> {"u.location.city"} </div>
                    <div>{user.status}</div>
                    <div>{user.name}</div>
                    <span>
               </span>
               </span>
            </div>
}


export default User;