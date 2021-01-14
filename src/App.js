import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {withRouter, BrowserRouter, Route} from "react-router-dom";
import Music from './components/Navbar/Music/Music.jsx';
import News from './components/Navbar/News/News.jsx';
import Settings from './components/Navbar/Settings/Settings.jsx';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux_store";
import {withSuspense} from "./hoc/withSuspense";

//React.lazy подгружает компоненты когда мы их используем!!!
const DialogsContainer = React.lazy(() => import("./components/Navbar/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Navbar/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp(this.props.id, this.props.email, this.props.login);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;

