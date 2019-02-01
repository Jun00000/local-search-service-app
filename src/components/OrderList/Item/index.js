import React from 'react'
import './style.less'
import Star from '../../Star'

class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            commentState: 2, //0--not comment yet, 1--commenting, 2--commented
            stars: {}
        }
        this._textarea = null;
    }
    render() {
        const data = this.props.data
        return (
            <div className="clear-fix order-item-container">
                <div className="clearfix">
                    <div className="order-item-img float-left">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="order-item-comment float-right">
                        {
                            this.state.commentState === 0
                                ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                                :
                                this.state.commentState === 1
                                    ? ''
                                    : <button className="btn unseleted-btn">已评价</button>
                        }

                    </div>
                    <div className="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                </div>
                <div>
                    {
                        // “评价中”才会显示输入框
                        this.state.commentState === 1
                            ? <div className="comment-text-container">
                                <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref={el => this._textarea = el}></textarea>
                                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                    <Star star="0" clickCallback={this.starClickCallback.bind(this)} />
                                </div>
                                <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                                &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                            </div>
                            : ''
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        //init commentState
        this.setState({
            commentState: this.props.data.commentState,
        })
    }
    showComment() {
        this.setState({
            commentState: 1,
        })
    }
    hideComment() {
        this.setState({
            commentState: 0,
        })
    }
    submitComment() {
        // 获取提交时的操作函数
        const submitComment = this.props.submitComment
        // 获取id
        const id = this.props.data.id
        // 获取 star 数量
        const stars = this.state.stars
        const star = stars[id] || '0'
        // 获取评价内容
        const value = this._textarea.value.trim();
        if (!value) {
            return
        }

        // 执行数据提交
        submitComment(id, value, star, this.commentOk.bind(this))
    }
    commentOk() {
        // 已经评价，修改状态
        this.setState({
            commentState: 2
        })
    }
    starClickCallback(star) {
        let stars = this.state.stars
        const id = this.props.data.id
        stars[id] = star

        this.setState({
            stars: stars
        })
    }
}

export default Item