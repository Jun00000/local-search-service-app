import React from 'react';
// import PureRenderMixin from 'react-addons-pure-'
import './style.less'

class HomeHeader extends React.Component {
    render(){
        return(
            <div className="clear-fix">
                <div className="float-left">深圳</div>
                <div className="float-right">用户中心</div>
                <div><input type="text"/></div>
            </div>
        )
    }
}

export default HomeHeader;