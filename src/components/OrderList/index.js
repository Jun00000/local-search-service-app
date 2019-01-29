import React from 'react'
import Item from './Item'

import './style.less'

class OrderList extends React.Component {
    render() {
        const data = this.props.data

        return (
            <div>
                {data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default OrderList