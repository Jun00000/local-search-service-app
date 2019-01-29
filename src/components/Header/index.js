import React from 'react';
import './style.less'
import { withRouter } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this._backToRouter.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
    _backToRouter() {
        if (!this.props.backRouter) {
            window.history.back();
        }
        else {
            const router = this.props.backRouter;
            this.props.history.push(router)
        }
    }
}

export default withRouter(Header)