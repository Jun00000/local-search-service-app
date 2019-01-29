import React from 'react';
// import PureRenderMixin from 'react-addons-pure-'
import './style.less'
import SearchInput from '../SearchInput'
import { Link, withRouter } from "react-router-dom";
//这个HomeHeader因为为了第三方组件，其实已经不算是一个dumb组件了
//因些其实把dumb组件放在这里，而把包装后的smart组件放到containers里
//针对这个场景，应该是在containers/Home/subPage下加个HomeHeader组件

class HomeHeader extends React.Component {
    componentDidMount() {

    }
    handleEnter(value) {
        this.props.history.push('/search/all/' + encodeURIComponent(value))
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        {/* <input type="text" placeholder="请输入关键字" 
                            onChange={this.handleChange.bind(this)} value={this.state.kwd}
                            onKeyUp={this.handleKeyUp.bind(this)}/> */}
                        <SearchInput value="" handleEnter={this.handleEnter.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HomeHeader);