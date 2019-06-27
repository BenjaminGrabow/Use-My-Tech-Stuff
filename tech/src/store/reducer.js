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
                                        } return newItem
                                }));

                        return { ...state, techItems: addTheMessages };

                case types.ADD:

                        const copyArray = state.techItems;

                        action.payload.messages = messages;

                        copyArray.unshift(action.payload);

                        const addMessagesToNewPost = copyArray.map(el => {
                                const copyOfData = Object.assign({}, el);

                                return copyOfData;
                        });

                        return { ...state, techItems: addMessagesToNewPost };

                case types.UPDATE_MESSAGES:
                        const addMessage = state.techItems.map(item => {
                                if (item.id === action.id) {
                                        item.messages.push(action.message)
                                } return item
                        });

                        return { ...state, techItems: addMessage };

                case types.SEARCH:
                        const search = state.techItems.filter(item => item.brand === action.payload);

                        const copyOftechItems = state.techItems;

                        return {
                                ...state, techItems: search,
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