import * as types from './actions';

const initialState = {
        techItems: [],
        loading: false,
        error: null,
        loggingIn: false,
        copyOfList: [],
};

const reducer = (state = initialState, action) => {
        switch (action.type) {
                case types.LOGIN_START:
                        return { ...state, loggingIn: true };
                case types.LOGIN_SUCCESS:
                        return { ...state, logginIn: false };
                case types.LOGIN_FAIL:
                        return {}
                case types.LOADING:
                        return { techItems: [], loading: true, error: null };

                case types.SUCCESS:
                        const result = action.payload.map(el => {
                                const copyOfData = Object.assign({}, el);
                                copyOfData.messages = [
                                        {
                                                message: 'Very good work, next time again !',
                                                img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
                                        },
                                        {
                                                message: 'Very good work, next time again !',
                                                img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
                                        },
                                        {
                                                message: 'Very good work, next time again !',
                                                img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
                                        },
                                ];
                                return copyOfData;
                        });
                        return { ...state, techItems: result, loading: false, error: null };

                case types.ERROR:
                        return { techItems: [], loading: false, error: 'ERROR NETWORK' };

                case types.DELETE:
                        return { ...state, techItems: action.payload };

                case types.UPDATE:
                        return { ...state, techItems: action.payload };

                case types.ADD:
                                const addMessages = action.payload.map(el => {
                                        const copyOfData = Object.assign({}, el);
                                        copyOfData.messages = [
                                                {
                                                        message: 'Very good work, next time again !',
                                                        img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
                                                },
                                                {
                                                        message: 'Very good work, next time again !',
                                                        img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
                                                },
                                                {
                                                        message: 'Very good work, next time again !',
                                                        img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
                                                },
                                        ];
                                        return copyOfData;
                                });
                        return { ...state, techItems: addMessages }

                case types.UPDATE_MESSAGES:
                        return { ...state, techItems: action.payload }

                case types.SEARCH:
                        const search = state.techItems.filter(item => item.brand === action.payload);

                        const copyOftechItems = state.techItems;

                        return { ...state, techItems: search, copyOfList: copyOftechItems }

                case types.BACK: 
                return { ...state, techItems: state.copyOfList }
                default: return state;
        };
};

export default reducer;