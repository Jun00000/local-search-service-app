import React from 'react';
import './style.less'


class LoadMore extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="load-more" ref={(el)=>this.domEl=el}>
                {this.props.isLoadingMore?
                <span>加载中</span>
                :<span onClick={()=>this.props.loadMoreFn()}>加载更多</span>
                }
            </div>
        )
    }
    componentDidMount(){
        console.log(this.domEl)
    }
}

export default LoadMore