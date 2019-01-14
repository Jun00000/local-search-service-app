import React from 'react';
// import PureRenderMixin from 'react-addons-pure-'
import './style.less'

class HomeHeader extends React.Component {
    render(){
        return(
            
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    深圳
                </div>
                <div className="home-header-right float-right">
                    用户中心
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;