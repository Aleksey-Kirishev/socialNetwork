import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://www.freepngimg.com/thumb/social_media/74114-networking-service-icons-media-blog-computer-mass.png'
                 alt="World"/>

                 <div className={s.loginBlock}>
                     {props.isAuth
                         ? <div> {props.login} - <button onClick={props.logout}>Log Out</button></div>
                         : <NavLink to={'/login'}>Login</NavLink>}
                 </div>
        </header>
    );
}

export default Header;