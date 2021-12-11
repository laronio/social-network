import {usersAPI} from "../api/api";
import {profileAPI} from "../api/api";
let ADD_NEW_POST = "ADD_NEW_POST";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_USER_STATUS = "SET_USER_STATUS";
let DELETE_USER = "DELETE_USER";

let initialState = {
    postItem: [
        {id: 1, message: "It's my first post", likes: 20},
        {id: 2, message: "Where are you from?", likes: 14},
        {id: 3, message: "It's my first post", likes: 10},
        {id: 4, message: "Where are you from?", likes: 16},
    ],
    selectedUserProfile: null,
    status: ""
}; 

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_POST: 
            let post = {id: 5, message: action.newPostText, likes: 24};
            return {
                ...state,
                postItem: [...state.postItem, post],
                newPostText: ""
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                selectedUserProfile: action.userProfile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_USER:
            return {
                ...state,
                postItem: state.postItem.filter(p => p.id !== action.currentId)   

            }
        default:
            return state;
    }
}

export default profileReducer;

const addNewPostCreator = (newPostText) => ({type: ADD_NEW_POST, newPostText});

const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

const setStatus = (status) => ({type: SET_USER_STATUS, status});

const deletePost = (currentId) => ({type: DELETE_USER, currentId});


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
       
    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if(response.data.resultCode === 0) {
    dispatch(setStatus(status));
    }
}


export {addNewPostCreator, setUserProfile, deletePost};