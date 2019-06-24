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
    const numOwner2 = Number(owner);
    const numPrice2 = Number(price);
    const numRenter2 = Number(renter)

    const updateItem = {
      owner: numOwner2,
      title: title,
      description: description,
      type: type,
      price: numPrice2,
      availability: availability,
      brand: brand,
      model: model,
      // imageURL: imageURL,
      renter: numRenter2,
    };
debugger
    axiosWithAuth().put(`https://usemytechstuffapp.herokuapp.com/api/items/${id}`, updateItem)
      .then(res => {
        debugger

        return axiosWithAuth().get('https://usemytechstuffapp.herokuapp.com/api/items').then(res => {
        debugger 
        dispatch({ type: UPDATE, payload: res.data })
        })
      }).catch(err => {
debugger
      });
  };


export const add = (owner, title, type, description,
  price, availability, brand, model, imageURL,
  renter) => (dispatch) => {

    const numOwner = Number(owner);
    const numPrice = Number(price);
    const numRenter = Number(renter)
    const newItem = {
      owner: numOwner,
      title: title,
      type: type,
      description: description,
      price: numPrice,
      availability: availability,
      brand: brand,
      model: model,
      // imageURL: imageURL,
      renter: numRenter,
      // messages: [{
      //   message: '',
      //   img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
      // },]
      // dont work because server don't accept messages
    };
    debugger
   

    axiosWithAuth().post('https://usemytechstuffapp.herokuapp.com/api/items', newItem)
      .then(res => {
       
debugger
        return axiosWithAuth().get('https://usemytechstuffapp.herokuapp.com/api/items')
          .then(res => {
          
            dispatch({ type: ADD, payload: res.data })
          })
      }).catch(err => {
    debugger
      });
  };

export const addRating = (id, message) => (dispatch) => {
  const newMessage = {
    message: message,
    img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
  };

  dispatch({ type: UPDATE_MESSAGES, message: newMessage, id: id })

  // axiosWithAuth().get(`https://usemytechstuffapp.herokuapp.com/api/items`)
  //   .then(res => {
  //     const theFriend = res.data[id];

  //     const updateFriend = theFriend.messages.push(newMessage);

  //     return axiosWithAuth().put(`https://usemytechstuffapp.herokuapp.com/api/items/${id}`, theFriend).then(res => {

  //       return axiosWithAuth().get('https://usemytechstuffapp.herokuapp.com/api/items').then(res => {
  //         dispatch({ type: UPDATE_MESSAGES, payload: res.data })
  //       })
  //     });
  //   });
};

export const search = (brand) => dispatch => {
  dispatch({ type: SEARCH, payload: brand })
};

export const back = () => dispatch => {
  dispatch({ type: BACK })
};