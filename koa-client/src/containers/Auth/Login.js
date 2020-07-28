import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'components/Auth';
import { connect } from 'react-redux';
import {CHANGE_INPUT, INITIALIZE_FORM} from 'redux/modules/auth';

class Login extends Component {

    handleChange= (e) => {
        const {CHANGE_INPUT} = this.props;
        const {name, value} = e.target;

        CHANGE_INPUT({
            name,
            value,
            form: 'login'
        })
        
    }
    componentWillUnmount() {
        const { INITIALIZE_FORM } = this.props;
        INITIALIZE_FORM('login')
    }

    render() {
        const {email, password} = this.props.form;
        // const { handleChange } = this;

        return (
            <AuthContent title="로그인">
                <InputWithLabel label="이메일" name="email" placeholder="이메일" value={email} onChange={this.handleChange} />
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" value={password} onChange={this.handleChange} />
                <AuthButton>로그인</AuthButton>
                <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.login.form
    }),
    (dispatch) => ({
        CHANGE_INPUT: (props) => dispatch(CHANGE_INPUT(props)),
        INITIALIZE_FORM: (props) => dispatch(INITIALIZE_FORM(props)) 
    })


) (Login);