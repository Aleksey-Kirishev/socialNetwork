import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object_helper";

const FOLLOW = 'my_appnpx/users_reducer/FOLLOW';
const UNFOLLOW = 'my_appnpx/users_reducer/UNFOLLOW';
const SET_USERS = 'my_appnpx/users_reducer/SET_USERS';
const SET_CURRENT_PAGE = 'my_appnpx/users_reducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'my_appnpx/users_reducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_PRELOADER = 'my_appnpx/users_reducer/TOGGLE_PRELOADER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'my_appnpx/users_reducer/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId,"id", {followed:true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId,"id", {followed:false})
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case TOGGLE_PRELOADER:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
//AC
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
//ThunkC
export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(togglePreloader(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.requestUsers(page, pageSize);
        dispatch(togglePreloader(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;