import React from 'react';
import './style.less'

// 这里不知道为什么，好多css效果出不来，比如home-ad不行，改成home-ad1就可以
// ad-container不行，container可以
class HomeAd extends React.Component {
    render() {
        return (
            <div id="home-ad1">
                <h2>超值特惠</h2>
                <div className="container1 clearfix">
                    {this.props.data.map((item, index) => (
                        <div key={index} className="item1 float-left">
                            <a href={item.link}>
                                <img src={item.img} alt={item.title} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default HomeAd