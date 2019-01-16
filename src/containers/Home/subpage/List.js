import React from 'react';
import { getListData } from "../../../fetch/home/home";
import HomeList from "../../../components/HomeList";
import LoadMore from "../../../components/LoadMore"
import './style.less'

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],//不能是data:null，data是一个数组
            hasMore: false, //后端返回的，标志是否还有数据
            isLoadingMore: false, //记录当前状态下，是加载中还是点击可加载更多
            page: 1, //下一页的页码
        }
    }
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {this.state.data.length ?
                    <HomeList data={this.state.data} />
                    : <div>{/*加载中*/}</div>
                }
                {/* 如果后端返回标志还有更多数据，则展示<LoadingMore>组件 */
                 this.state.hasMore?
                    <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : <div></div>
                }
                
            </div>
        )
    }
    componentDidMount() {
        this._loadFirstPageData();
    }
    _loadFirstPageData() {
        const cityName = this.props.cityName;
        // fetch 后端取数据
        const result = getListData(cityName, 0);//获取的是首页数据，所以是0
        // console.log(result)
        this._handleResult(result);

    }
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        // fetch 后端取数据
        const result = getListData(cityName, this.state.page);//获取的是首页数据，所以是0
        // console.log(result)
        this._handleResult(result);
        this.setState({
            isLoadingMore: false,
            page: this.state.page+1,
        })
    }
    _handleResult(result) {
        result.then((res) => {
            return res.json()
        }).then((json) => {
            if (json) {
                this.setState({
                    hasMore: json.hasMore, //后端返回是否还有数据的标志
                    // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
                    data: this.state.data.concat(json.data),
                })
            }
        })
    }
}

export default List