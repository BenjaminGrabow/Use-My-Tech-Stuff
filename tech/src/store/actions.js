import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';
export const ADD = 'ADD';
export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';

export const login = creds => dispatch => {
        dispatch({ type: LOGIN_START });
        return axios.post('http://localhost:5000/api/login', creds)
                .then(res => {
                        localStorage.setItem('token', res.data.payload);
                        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
                })
                .catch(err => console.log(err));
};

export const fetch = () => dispatch => {
        dispatch({ type: LOADING })
        axiosWithAuth()
                .get('http://localhost:5000/api/friends').then(res => {
                        dispatch({ type: SUCCESS, payload: res.data })
                }).catch(err => {
                        dispatch({ type: ERROR })
                });
};

export const deleter = (id) => dispatch => {
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
                .then(res => {
                        dispatch({ type: DELETE, payload: res.data })
                });
};

export const update = (id, name, age, email) => dispatch => {
        const updateFriend = {
                name: name,
                age: age,
                email: email
        };

        axiosWithAuth().put(`http://localhost:5000/api/friends/${id}`, updateFriend)
                .then(res => {
                        dispatch({ type: UPDATE, payload: res.data })

                });
};

export const add = (name, age, email) => (dispatch) => {
        const newFriend = {
                name: name,
                age: age,
                email: email
        };

        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
                .then(res => {
                        dispatch({ type: ADD, payload: res.data })
                });
};

export const addRating = (id, message) => (dispatch) => {
        const newMessage = {
                message: message
        };

        axiosWithAuth().get(`http://localhost:5000/api/friends/${id}`)
                .then(res => {
                        const theFriend = res.data;

                        const updateFriend = theFriend.messages.push(newMessage);

                        return axiosWithAuth().put(`http://localhost:5000/api/friends/${id}`, theFriend).then(res => {
                                dispatch({ type: UPDATE_MESSAGES, payload: res.data })
                        });
                });
};