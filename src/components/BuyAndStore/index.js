import React from 'react';
import './style.less'

class BuyAndStore extends React.Component {
    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.props.isStored
                            ? <button className="selected" onClick={this.props.onStore}>已收藏</button>
                            : <button onClick={this.props.onStore}>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.props.onBuy}>购买</button>
                </div>
            </div>
        )
    }
}

export default BuyAndStore