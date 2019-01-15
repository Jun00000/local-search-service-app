import React from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../components/HomeHeader";
import Category from "../../components/Category";
import Ad from "./subpage/Ad";

class Home extends React.Component {
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category />
                {/* 加一个修改用的空行 */}
                <div style={{height:'15px'}}></div>
                <Ad />
            </div>
        )
    }
}

//---------------------react redux 绑定 --------------------
function mapStateToProps(state) {
    return {
        userInfo:state.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
