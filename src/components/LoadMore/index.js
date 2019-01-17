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
                :<span>加载更多</span>
                }
            </div>
        )
    }
    componentDidMount(){
        let timeoutId;
        let _callback = ()=>{
            const top = this.domEl.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if(top && top < windowHeight){
                this.props.loadMoreFn();
            }
        }
        window.addEventListener("scroll",()=>{
           if(timeoutId){
               clearTimeout(timeoutId);
           } 
            timeoutId = setTimeout(() => {
               _callback();
           }, 50);
        },false)
    }
}

export default LoadMore