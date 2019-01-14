import React from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../components/HomeHeader";
import Category from "../../components/Category";

class Home extends React.Component {
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category />
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
