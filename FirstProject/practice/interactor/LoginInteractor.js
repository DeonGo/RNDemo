import * as userStatus from '../constants/UserStatus'

// let user = {
//     name: 'pp',
//     age: 100,
// }

export function login(username, password) {
    return dispatch => {
        dispatch(isLoading());
        let result = fetch('http://www.qq.com')
            .then((res) => {
                let user = {
                    name: username,
                    age: 100
                }
                dispatch(loginSuccess(true, user))
            }).catch((e) => {
                dispatch(loginError(false))
            })

    }
}

function isLoading() {
    return { type: userStatus.LOGIN_LOADING }
}

function loginSuccess(isSuccess, user) {
    return {
        type: userStatus.LOGIN_SUCCESS,
        user: user,
    }
}

function loginError(isSuccess) {
    return {
        type: userStatus.LOGIN_ERROR,
    }
}

