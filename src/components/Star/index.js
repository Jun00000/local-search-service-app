import React from 'react'

import './style.less'

class Star extends React.Component {
    constructor(){
        super();
        this.state = {
            star: 0,
        }
    }
    render() {
        // 获取 star 数量，并取余5（最多5个star）
        let star = this.state.star || 0
        if (star > 5) {
            star = star % 5
        }

        return (
            <div className="star-container">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    const lightClass = star >= item ? ' light' : ''
                    return <i key={index} className={'icon-star' + lightClass} 
                                onClick={this.handleStar.bind(this,item)}></i>
                })}
            </div>
        )
    }
    // 这里是为了处理初始传入star的情况
    componentDidMount() {
        this.setState({
            star: this.props.star
        })
    }
    handleStar(star){
        const clickCallback = this.props.clickCallback
        if (!clickCallback) {
            return
        }

        this.setState({
            star: star
        })

        clickCallback(star)
    }
}

export default Star