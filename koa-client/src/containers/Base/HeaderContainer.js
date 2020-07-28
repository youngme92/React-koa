import React, { useEffect } from 'react';
import Header, { LoginButton } from 'components/Base/Header';
import { connect } from 'react-redux';

const HeaderContainer= ({visibleChk})=> {

    useEffect(()=> {
    },[])

    if(!visibleChk){
        return null;}
    return (
        <Header>
            <LoginButton/>
        </Header>
        )
    }



export default connect(
    (state) => ({visibleChk: state.base.header.visible}),
    (dispatch)=> ({})
)(HeaderContainer);