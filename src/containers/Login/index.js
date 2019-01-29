import React from 'react';
import Header from '../../components/Header';
import LoginComp from '../../components/LoginComp';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            checking: true,
        }
    }
    render() {
        return (
            <div>
                <Header title="登录" />
                {
                    this.state.checking
                        ? <div>已登录</div>
                        : <LoginComp onClick={this.handleClick.bind(this)} />
                }
            </div>
        )
    }
    componentDidMount() {
        this._doCheckStatus()

    }

    _doCheckStatus() {
        if (this.props.userInfo.username == null) {
            this.setState({
                checking: false
            })
        } else {
            // 已登录，去用户主页
            this.props.history.push('/user');
        }
       

    }
    // 存储用户名、处理登录之后的跳转
    handleClick(name) {
        this.props.userInfoActions.update({
            username: name,
        })
        const router = this.props.match.params.router;
        if (router == null) {
            // 去用户主页
            this.props.history.push('/user');
        } else {
            // 传过来的router被encode，这里应该decode
            this.props.history.push(decodeURIComponent(router))
        }
    }
}

/*-----------------react-redux-----------------------*/
function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // 自定义的名字，被传递组件用props调用
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);