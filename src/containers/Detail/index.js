import React from 'react';
import Header from '../../components/Header'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
import BuyAndStore from '../../components/BuyAndStore'

class Detail extends React.Component {
    render() {
        // 获取商户ID
        const id = this.props.match.params.id

        return (
            <div>
                <Header title="商户详情" />
                <Info id={id} />
                <BuyAndStore id={id} onBuy={this.handleBuy.bind(this)} onStore={this.handleStore.bind(this)}/>
                <Comment id={id} />
            </div>
        )
    }
    handleBuy() {

    }
    handleStore(){

    }
}

export default Detail