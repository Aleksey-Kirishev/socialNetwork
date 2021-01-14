import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, comment: 'Hi, I am here, and you?', likesCount: 85, commentsCount: 2},
        {id: 2, comment: 'Hi, me too:)', likesCount: 78, commentsCount: 6},
        {id: 3, comment: 'How did you find the site?', likesCount: 99, commentsCount: 7},
        {id: 4, comment: 'I was using Google Chrome', likesCount: 121, commentsCount: 16},
        {id: 5, comment: 'I was using Yandex', likesCount: 77, commentsCount: 14},
    ],
    profile:null,
    status: "Road To React Creator Junior"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:{
            let newPost = {
                id: 5,
                comment: action.newPostText,
                likesCount: 0,
                commentsCount: 0
            };
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText: ''
            };
        }

        case SET_USERS_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            return {...state, status: action.status}

        case DELETE_POST:
            return {...state, posts: state.posts.filter( p => p.id !== action.postId)}

        default :
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})

export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status })
export const deletePost = (postId) => ({type: DELETE_POST, postId })

//ThunkC
export const getProfile = (userId) => async (dispatch) => {
        let response = await profileAPI.getUsersProfilePage(userId);
                dispatch(setUsersProfile(response.data));
}

export const getStatus = (status) =>  async (dispatch) => {
        let response = await profileAPI.getStatus(status);
                dispatch(setStatus(response.data));
    }


export const updateUsersStatus = (status) => async (dispatch) => {
        let response = await profileAPI.updateUsersStatus(status);
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
    }




export default profileReducer;