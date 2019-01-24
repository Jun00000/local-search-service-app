import React from 'react';
import './style.less';

class LoginComp extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }
    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.value}
                        placeholder="请输入手机号" />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="请输入验证码" />
                </div>
                <button className="btn-login" onClick={this.handleClick.bind(this)}>登录</button>
            </div>
        )
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
    }
    handleClick() {
        if (!this.state.value) {
            return
        }
        this.props.onClick(this.state.value);
    }

}
export default LoginComp;
