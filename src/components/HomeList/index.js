import React from 'react';
import './style.less';
import Item from "./Item";

class HomeList extends React.Component {
    render() {
        return (
            <div className="list-container">
                {this.props.data.map((item,index)=>(
                    <Item item={item} key={index}/>
                ))}
            </div>
        )
    }
}

export default HomeList