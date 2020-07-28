import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setvisible } from 'redux/modules/base';
import { AuthWrapper } from 'components/Auth';
import { Route } from 'react-router-dom';
import { Login, Register } from 'containers/Auth';



class Auth extends Component {
    
    componentWillMount(){
        this.props.setvisible(false);
    }
    render() {
        
        return (
        <>
         <AuthWrapper>
                <Route path="/auth/login" component={Login}/>
                <Route path="/auth/register" component={Register}/>
         </AuthWrapper>
         </>
    )
    }
}

const mapStateToProps = state => {
    return {
        visibleChk: state.base.header.visible
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setvisible: (visible) => dispatch(setvisible(visible))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);