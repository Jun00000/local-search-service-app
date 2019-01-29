import React from 'react';
import BuyAndStore from '../../../components/BuyAndStore'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as storeActionsFromOtherFile  from "../../../actions/store";
import { bindActionCreators } from "redux";

class Buy extends React.Component {
    constructor(){
        super();
        this.state = {
            isStored: false
        }
    }
    render() {

        return (
            <div>
                <BuyAndStore id={this.props.id} isStored={this.state.isStored}
                    onBuy={this.handleBuy.bind(this)} onStore={this.handleStore.bind(this)} 
                />
            </div>
        )
    }
    componentDidMount(){
        this._checkStored();
    }
    // 购买事件
    handleBuy() {
        // 判断是否登录
        const loginFlag = this._doCheck();
        if(!loginFlag){
            return false
        }
        // 购买流程
        // ...
        // ...
        // ...
        // 跳转到用户页面
        this.props.history.push("/user");
    }
    // 收藏事件
    handleStore() {
        // 判断是否登录
        const loginFlag = this._doCheck();
        if(!loginFlag){
            return false
        }
        // 在redux更新收藏
        const id = this.props.id;
        // if stored
        if(this.state.isStored){
            this.props.storeActions.rm({id});
            this.setState({
                isStored: false
            })
        }
        // if unstored
        else {
            this.props.storeActions.add({id});
            this.setState({
                isStored: true,
            })
        }
    }
    // 判断是否已收藏
    _checkStored(){
        const id = this.props.id;
        const idList = this.props.store;
        // Array里的some函数
        idList.some((item)=>{
            if(item.id === id){
                this.setState({
                    isStored: true,
                })
            }
            return true
        })
    }
    //验证是否登录
    _doCheck(){
        const id = this.props.id;
        const userInfo = this.props.userInfo;
        if(!userInfo.username){
            // 跳转到登录页
            this.props.history.push("/login/"+encodeURIComponent('/detail/'+id));
            return false;
        }
        return true;
    }
}

/*-----------------react-redux-----------------------*/
function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // 自定义的名字，被传递组件用props调用
        storeActions: bindActionCreators(storeActionsFromOtherFile, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Buy));