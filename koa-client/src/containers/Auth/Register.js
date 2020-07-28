import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'components/Auth';
import { connect } from 'react-redux';
import {CHANGE_INPUT, INITIALIZE_FORM, fetchCheck} from 'redux/modules/auth';

class Register extends Component {
    
    

    handleChange= (e) => {
        const {CHANGE_INPUT} = this.props;
        const {name, value} = e.target;
        // useDispatch 의 오류  해결해야한다
        // const dispatch = useDispatch()
        // name === "email" ? dispatch(fetchCheck("email")) : dispatch(fetchCheck("username"))
        CHANGE_INPUT({
            name,
            value,
            form: 'register'
        })
        
    }

    componentWillUnmount() {
        const { INITIALIZE_FORM } = this.props;
        INITIALIZE_FORM('register')
    }

    render() {
        
        const { email, username, password, passwordConfirm } = this.props.form;

        return (
            <AuthContent title="회원가입">
                <InputWithLabel label="이메일" name="email" placeholder="이메일" value={email} onChange={this.handleChange} />
                <InputWithLabel label="아이디" name="username" placeholder="아이디" value={username} onChange={this.handleChange}/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" value={password} onChange={this.handleChange}/>
                <InputWithLabel label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password" value={passwordConfirm} onChange={this.handleChange} />
                <AuthButton>회원가입</AuthButton>
                <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.register.form
    }),
    (dispatch) => ({
        CHANGE_INPUT: (props) => dispatch(CHANGE_INPUT(props)),
        INITIALIZE_FORM: (props) => dispatch(INITIALIZE_FORM(props)) 
    })


) (Register);