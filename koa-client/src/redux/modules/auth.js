import {createSlice} from "@reduxjs/toolkit";
import * as AuthApi from 'lib/api/auth';

const checkEmailorUsername = createSlice({
    name: "auth",
    initialState: {
        register: {
            form: {
                email: "",
                username: "",
                password: "",
                passwordConfirm: ""
            },
            exists: {
                email: "",
                password: ""
            }
        },
        login: {
            form: {
                email: "",
                password: ""
            }
        }
    },
    reducers: {
        CHECK_EMAIL_EXISTS: (state, action) => {
            state.register.exists.email = action.payload.exists;
        },
        CHECK_USERNAME_EXISTS: (state, action) => {
            state.register.exists.username = action.payload.exists;
        }
    }
})

const initializeState = {
    register: {
        form: {
            email: "",
            username: "",
            password: "",
            passwordConfirm: ""
        }
    },
    login: {
        form: {
            email: "",
            password: ""
        }
    }
}

const inputState = createSlice({
    name: "inputStateManager",
    initialState: {
        register: {
            form: {
                email: "",
                username: "",
                password: "",
                passwordConfirm: ""
            }
        },
        login: {
            form: {
                email: "",
                password: ""
            }
        }
    },
    reducers: {
        CHANGE_INPUT: (state, action) => {
            const {form, name, value} = action.payload;
            // form 이 register 일때
            if(form === 'register'){
                if(name === 'email'){
                    state.register.form.email = value;
                }else if(name === 'username'){
                    state.register.form.username = value;
                }else if(name === 'password'){
                    state.register.form.password = value;
                }else if(name === 'passwordConfirm'){
                    state.register.form.passwordConfirm = value;
                }
            // from 이 login 일때
            } else {
                name === 'email' ? state.login.form.email = value : state.login.form.password = value;
            }
        },
        INITIALIZE_FORM: (state, action) => {
            const loginOrregister = action.payload
            // if(loginOrregister === 'login'){
            //     state.login.form.email= "";
            //     state.login.form.password= "";
            // }else {
            //     state.register.form.email = "";
            //     state.register.form.username = "";
            //     state.register.form.password = "";
            //     state.register.form.passwordConfirm = "";
            // }
            // form을 받아올때 디렉토리 이름이 정해지는 로직을 짜야한다.
            loginOrregister === 'login' ? Object.assign(state.login, initializeState.login) : Object.assign(state.register, initializeState.register)
        }
    }
})

// dispath하기 위해 필효한 action 
export const { CHANGE_INPUT, INITIALIZE_FORM } = inputState.actions;
export const { CHECK_EMAIL_EXISTS, CHECK_USERNAME_EXISTS } = checkEmailorUsername.actions;

export const fetchCheck = (emailOrUsername) => async dispatch => {
    // 만일 email이 중복된다면 
    if(emailOrUsername === "email"){
    try {
        await AuthApi.checkEmailExists.then((response)=> dispatch(CHECK_EMAIL_EXISTS(response.data)))
    }
    catch (e){
        return console.log.error(e.message);
    }
    } else {
        try {
            await AuthApi.checkUsernameExists.then((response)=> dispatch(CHECK_USERNAME_EXISTS(response.data)))
        }
        catch (e){
            return console.log.error(e.message);
        }
    }
    // 만일 username 이 중복된다면
}
// store.js 에서 사용하기 위한 export
// export const { CHECK_EMAIL_EXISTS, CHECK_USERNAME_EXISTS } = checkEmailorUsername.actions;

export default (inputState.reducer, checkEmailorUsername.reducer);

