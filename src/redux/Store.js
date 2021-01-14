import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
    _callSubscriber() {
        console.log('State changed');
    },

    _state: {

        profilePage: {
            posts: [
                {id: 1, comment: 'Hi, I am here, and you?', likesCount: 85, commentsCount: 2},
                {id: 2, comment: 'Hi, me too:)', likesCount: 78, commentsCount: 6},
                {id: 3, comment: 'How did you find the site?', likesCount: 99, commentsCount: 7},
                {id: 4, comment: 'I was using Google Chrome', likesCount: 121, commentsCount: 16},
                {id: 5, comment: 'I was using Yandex', likesCount: 77, commentsCount: 14},
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alexey'},
                {id: 2, name: 'Valeriya'},
                {id: 3, name: 'Denis'},
                {id: 4, name: 'Oleg'},
                {id: 5, name: 'Artem'},

            ],
            messages: [
                {id: 1, sms: 'hi'},
                {id: 2, sms: 'how r u?'},
                {id: 3, sms: 'I am good, ty'},
                {id: 4, sms: 'Yo'},
                {id: 5, sms: 'Love u'},
            ],
            newMessageBody: ''
        },
        sidebar:{}
    },


    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action)  {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

}

window.store = store;

export default store;