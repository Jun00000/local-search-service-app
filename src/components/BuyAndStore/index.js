import React from 'react';
import './style.less'

class BuyAndStore extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.isStored
                    ? <button onClick={this.props.onStore}>已收藏</button>
                    : <button onClick={this.props.onStore}>收藏</button>
                }
                
                <button onClick={this.props.onBuy}>购买</button>
            </div>
        )
    }
}

export default BuyAndStore