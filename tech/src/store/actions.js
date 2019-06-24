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
export const SEARCH = 'SEARCH';
export const BACK = 'BACK';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post('https://usemytechstuffapp.herokuapp.com/api/login', creds)
    .then(res => {

      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err));
};

export const fetch = () => dispatch => {
  dispatch({ type: LOADING })

  axiosWithAuth().get('https://usemytechstuffapp.herokuapp.com/api/items').then(res => {
    dispatch({ type: SUCCESS, payload: res.data })
  }).catch(err => {
    dispatch({ type: ERROR })
  });
};

export const deleter = (id) => dispatch => {

  axiosWithAuth().delete(`https://usemytechstuffapp.herokuapp.com/api/items/${id}`)
    .then(res => {

      return axiosWithAuth().get("https://usemytechstuffapp.herokuapp.com/api/items").then(res => {

        dispatch({ type: DELETE, payload: res.data })
      });
    });
};

export const update = (id, owner, title, description, type,
  price, availability, brand, model, imageURL,
  renter) => dispatch => {
    const updateFriend = {
      owner: owner,
      title: title,
      description: description,
      type: type,
      price: price,
      availability: availability,
      brand: brand,
      model: model,
      imageURL: imageURL,
      renter: renter,
      messages: [{
        message: '',
        img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
      },]
    };

    axiosWithAuth().put(`https://usemytechstuffapp.herokuapp.com/api/items/${id}`, updateFriend)
      .then(res => {
        return axiosWithAuth().get(`https://usemytechstuffapp.herokuapp.com/api/items`).then(res => {
          dispatch({ type: UPDATE, payload: res.data })

        })
      }).catch(err => {

      });
  };

// owner < --Required(Foreign Key)(References user id)
// title < --Required(string)
// description < --Required(string)
// type < --Required(string)
// description < --Required(string)
// price < --Required(integer)
// availibility < --Required(boolean)
// brand(string)
// model(string)
// imgURL(string)
// renter(integer)(Foreign Key)(References user id)

export const add = (owner, title, type, description,
  price, availability, brand, model, imageURL,
  renter) => (dispatch) => {
    const newItem = {
      owner: owner,
      title: title,
      type: type,
      description: description,
      price: price,
      availability: availability,
      // brand: brand,
      // model: model,
      // imageURL: imageURL,
      // renter: renter,
      // messages: [{
      //   message: '',
      //   img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
      // },]
    };
   

    axiosWithAuth().post('https://usemytechstuffapp.herokuapp.com/api/items', newItem)
      .then(res => {

        return axiosWithAuth().get('https://usemytechstuffapp.herokuapp.com/api/items')
          .then(res => {
           
            dispatch({ type: ADD, payload: res.data })
          })
      }).catch(err => {
       
      });
  };

export const addRating = (id, message) => (dispatch) => {
  const newMessage = {
    message: message,
    img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
  };

  axiosWithAuth().get(`https://usemytechstuffapp.herokuapp.com/api/items`)
    .then(res => {
      const theFriend = res.data[id];

      const updateFriend = theFriend.messages.push(newMessage);

      return axiosWithAuth().put(`https://usemytechstuffapp.herokuapp.com/api/items/${id}`, theFriend).then(res => {

        return axiosWithAuth().get('https://usemytechstuffapp.herokuapp.com/api/items').then(res => {
          dispatch({ type: UPDATE_MESSAGES, payload: res.data })

        })
      });
    });
};

export const search = (brand) => dispatch => {
  dispatch({ type: SEARCH, payload: brand })
};

export const back = () => dispatch => {
  dispatch({ type: BACK })
};