import React from 'react';
import BuyAndStore from '../../../components/BuyAndStore'

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
                    onBuy={this.handleBuy.bind(this)} onStore={this.handleStore.bind(this)} />
            </div>
        )
    }
    // 购买事件
    handleBuy() {
    }
    // 收藏事件
    handleStore() {
    }
}

export default Buy