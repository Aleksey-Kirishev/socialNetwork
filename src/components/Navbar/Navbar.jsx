import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <img src='https://www.freeiconspng.com/uploads/customers-icon-3.png'/>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <img src='http://www.clipartbest.com/cliparts/yTo/6yz/yTo6yzn4c.png'/>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <img
                    src='https://yt3.ggpht.com/a/AATXAJx5amDq3xleLn-gf7Kr02azA8uFO3_JVvO7dF3hRw=s900-c-k-c0xffffffff-no-rj-mo'/>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <img src='https://c7.uihere.com/files/690/149/228/computer-icons-music-sound-download-k-song.jpg'/>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <img src='https://yt3.ggpht.com/a/AATXAJxGnIbNlJ6xJYhph2C5InKXrRmvC5U77zk4zg=s900-c-k-c0xffffffff-no-rj-mo'/>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <img src='https://cdn1.iconfinder.com/data/icons/ui-5/502/gear-512.png'/>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
          </nav>
    );
}

export default Navbar;