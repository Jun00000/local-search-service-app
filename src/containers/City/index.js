import React from 'react';
import { connect } from "react-redux";
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'
import { bindActionCreators } from 'redux';
import Head from "../../components/Header";
import CurrentCity from "../../components/CurrentCity";
import CityList from "../../components/CityList";
import { CITYNAME } from '../../config/localStoreKey'
import { withRouter } from "react-router-dom";

class City extends React.Component {
    
    handleChange(newCity) {
        if(newCity==null){
            return
        }
        // 1. 修改redux
        this.props.userInfoActions.update({
            cityName: newCity
        })
        // 2. 修改localStorage
        localStorage.setItem(CITYNAME,newCity);
        // 3. 跳转到首页
        this.props.history.push('/');
        
    }
    render(){
        return(
            <div>
                <Head title='选择城市' />
                <CurrentCity cityName={this.props.userInfo.cityName} />
                <CityList changeFn={this.handleChange.bind(this)} />
            </div>
        )
    }
}

// -----------add redux-------------------
function mapStateToProps(state){
    return {
        userInfo: state.userInfo,
    }
}  
function mapDispatchToProps(dispatch){
    return {
        // 自定义的名字，被传递组件用props调用
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
// 这里withRouter是为了用history.push
// 其实因为最外层组件包过withRouter，这里不用也有效果
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(City));