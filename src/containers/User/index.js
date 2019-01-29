import React from 'react';
import Header from '../../components/Header'
import { connect } from "react-redux";
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
    render(){
        return(
            <div>
                <Header title="用户主页" backRouter="/"/>
                <UserInfo username={this.props.userInfo.username} city={this.props.userInfo.cityName}/>
                <OrderList username={this.props.userInfo.username}/>
            </div>
        )
    }
    componentDidMount(){
        // check if the user is logged in
        if(!this.props.userInfo.username){
            this.props.history.push('/Login')
        }
    }
}

function mapStateToProps(state){
    return {
        userInfo: state.userInfo,
    }
}
function mapDispatchToProps(dispatch){
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(User);