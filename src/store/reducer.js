import * as types from './actions';

const initialState = {
  techItems: [],
  loading: false,
  error: null,
  loggingIn: false,
  copyOfList: [],
  userData: null,
};

const messages = [
  {
    message: 'great job, next time again !',
    img: 'https://images.pexels.com/photos/2504837/pexels-photo-2504837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    star1: 'fa fa-star checked',
    star2: 'fa fa-star checked',
    star3: 'fa fa-star checked',
    star4: 'fa fa-star checked',
    star5: 'fa fa-star checked'
  },
  {
    message: 'Very good work, everytime again !',
    img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
    star1: 'fa fa-star checked',
    star2: 'fa fa-star checked',
    star3: 'fa fa-star checked',
    star4: 'fa fa-star checked',
    star5: 'fa fa-star'
  },
];

const ratingForUserConst = [{
  star1: 'fa fa-star checked',
    star2: 'fa fa-star checked',
    star3: 'fa fa-star checked',
    star4: 'fa fa-star checked',
    star5: 'fa fa-star'
}];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER:
      return { ...state };

    case types.LOGIN_START:
      return { ...state, loggingIn: true };

    case types.LOGIN_SUCCESS:
      return { ...state, loggingIn: false };

    case types.LOGIN_FAIL:
      return { ...state, loggingIn: false, error: action.payload }


    case types.LOADING:
      return { techItems: [], loading: true, error: null };

    case types.SUCCESS:

      const result = action.payload.map(el => {
        const copyOfData = Object.assign({}, el);
        copyOfData.messages = messages;

        copyOfData.ratingForUser = ratingForUserConst;

        return copyOfData;
      });

      return { ...state, techItems: result, loading: false, error: null, copyOfList: result };

    case types.ERROR:
      return { techItems: [], loading: false, error: 'ERROR NETWORK' };

    case types.DELETE:
      const addMessageSection = action.payload.map(el => {
        const copyOfData = Object.assign({}, el);

        copyOfData.messages = messages;

        return copyOfData
      });

      addMessageSection.map(newItem =>
        state.techItems.map(oldItem => {
          if (newItem.id === oldItem.id) {
            newItem.messages = oldItem.messages
            newItem.ratingForUser = oldItem.ratingForUser;
          } return newItem
        }));

      return { ...state, techItems: addMessageSection };

    case types.UPDATE:
      const changeItem = state.techItems.map(item => {
        if (item.id === action.payload.id) {
          item = action.payload;
        } return item
      });

      const addTheMessages = changeItem.map(el => {
        const copyOfData = Object.assign({}, el);

        copyOfData.messages = messages;

        return copyOfData;
      });

      addTheMessages.map(newItem =>
        state.techItems.map(oldItem => {
          if (newItem.id === oldItem.id) {
            newItem.messages = oldItem.messages
            newItem.ratingForUser = oldItem.ratingForUser;
          } return newItem
        }));

      return { ...state, techItems: addTheMessages };

    case types.ADD:

      const copyArray = state.techItems;

      action.payload.messages = messages;
      action.payload.ratingForUser = ratingForUserConst;

      copyArray.unshift(action.payload);

      const addMessagesToNewPost = copyArray.map(el => {
        const copyOfData = Object.assign({}, el);

        return copyOfData;
      });

      return { ...state, techItems: addMessagesToNewPost };

    case types.UPDATE_MESSAGES:
      const addMessage = state.techItems.map(item => {
        if (item.id === action.id) {
          item.messages.push(action.message);

          const goodRating = 'fa fa-star checked';

          const resultCounter = [];
  
          let numTotal = '';
  
          for (let i = 0; i < item.messages.length; i++) {
            resultCounter.push(item.messages[i].star1 === goodRating);
  
            resultCounter.push(item.messages[i].star2 === goodRating);
  
            resultCounter.push(item.messages[i].star3 === goodRating);
  
            resultCounter.push(item.messages[i].star4 === goodRating);
  
            resultCounter.push(item.messages[i].star5 === goodRating);
          }
  
          numTotal = resultCounter.length;
  
          const howManyGood = resultCounter.filter(good => good === true).length;
  
          const ruleOfProportion = howManyGood * 100 / numTotal;
  
          const ratingForStars = ruleOfProportion / 2;
  
          const numOfOrangeStars = parseInt(ratingForStars / 10);
  
  
          const orangeStars = 'fa fa-star checked'.repeat(numOfOrangeStars);
  
          const blackStars = 'fa fa-star'.repeat(5 - numOfOrangeStars);
  
          const arrayOrange = orangeStars.match(/.{1,18}/g);
          const arrayBlack = blackStars.match(/.{1,10}/g);
  
          const mergeArrays = arrayOrange.concat(arrayBlack);
  
          const ratingForUser = [{
            star1: mergeArrays[0],
            star2: mergeArrays[1],
            star3: mergeArrays[2],
            star4: mergeArrays[3],
            star5: mergeArrays[4]
          }];
  
          item.ratingForUser = ratingForUser;

        } return item
      });

      return { ...state, techItems: addMessage };

    case types.SEARCH:
      const copyOftechItems = state.techItems;

      return {
        ...state, techItems: action.payload,
        copyOfList: copyOftechItems
      }

    case types.BACK:
      return { ...state, techItems: state.copyOfList };

    case types.BUY:
      const bought = state.techItems.map(item => {
        if (item.id === action.payload.id) {
          item.availability = false;
        } return item;
      });

      return { ...state, techItems: bought };

    case types.SAFE_USER:
      return { ...state, userData: action.payload };

    case types.DELETE_USER:
      return { ...state, userData: null };
    default: return state;
  };
};

export default reducer;