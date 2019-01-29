import React from 'react'
import { getOrderListData } from '../../../fetch/user/orderlist'

import OrderListComponent from '../../../components/OrderList'

import './style.less'

class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                        ? <OrderListComponent data={this.state.data} />
                        : <div>{/* loading */}</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取订单数据
        const username = this.props.username
        if (username) {
            this.loadOrderList(username)
        }
    }
    loadOrderList(username) {
        const result = getOrderListData(username)
        result.then(res => {
            return res.json()
        }).then(json => {
            // 获取数据
            this.setState({
                data: json
            })
        }).catch(ex => {
            console.error('用户主页“订单列表”获取数据报错, ', ex.message)
        })
    }
}

export default OrderList