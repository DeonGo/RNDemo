import * as userStatus from '../constants/UserStatus'

const initialState = {
    status: 'tap to login',
    isSuccess: false,
    user: null,
}


export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case userStatus.LOGIN_LOADING:
            return {
                ...state,
                status: 'loading',
                isSuccess: false,
                user: null,
            }
            break;
        case userStatus.LOGIN_ERROR:
            return {
                ...state,
                status: 'error...',
                isSuccess: true,
                user: null,
            }
            break;
        case userStatus.LOGIN_SUCCESS:
            return {
                ...state,
                status: 'success...',
                isSuccess: true,
                user: action.user,
            }
            break;
      case userStatus.CLEAR_LOGIN_STATUS:
            return initialState

        default:
            console.log(state);
            return state;
    }
}
