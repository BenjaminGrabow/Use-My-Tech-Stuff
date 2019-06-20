import * as types from '../store/actions';

const initialState = {
        friends: [],
        loading: false,
        error: null,
        loggingIn: false,
};

const reducer = (state = initialState, action) => {
        switch (action.type) {
                case types.LOGIN_START:
                        return { ...state, loggingIn: true };
                case types.LOGIN_SUCCESS:
                        return { ...state, logginIn: false };
                case types.LOGIN_FAIL:
                        return {}
                default: return state;
        }
};

export default reducer;
