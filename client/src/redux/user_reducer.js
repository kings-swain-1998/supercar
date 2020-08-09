import * as Types from './constant';
var initialState = {
    isLogin: false,
    user: {
        firstName: "",
        lastName: "",
        avatar: ""
    }
}


const userLogin = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN_SUCCES:
            const user = action.user;
            return {
                ...state,
                user: {
                    firstName: user.firstname,
                    lastName: user.lastname,
                    avatar: user.avatar
                }
            }
        case Types.LOGOUT_SUCCES:

            return {
                ...state,
                user: {
                    firstName: undefined,
                    lastName: undefined,
                    avatar: undefined
                }
            }
        case Types.OPEN_FORM_LOGIN:
            return {
                ...state,
                isLogin: action.openForm
            }
        case Types.HIDE_FORM_LOGIN:
            return {
                ...state,
                isLogin: action.openForm
            }
        default:
            return state;
    }
}

export default userLogin;