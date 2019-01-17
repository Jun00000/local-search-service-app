import React from 'react';
import './style.less'

class Header extends React.Component {
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={() => { window.history.back() }}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Header