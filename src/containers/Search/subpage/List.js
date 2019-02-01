import React from 'react';
import { getSearchData } from '../../../fetch/search/search';
import { connect } from 'react-redux';
import HomeList from "../../../components/HomeList";
import LoadMore from "../../../components/LoadMore";

// 初始化一个组件的 state --注意定义的位置
const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
}
class SearchList extends React.Component {
    constructor() {
        super();
        this.state = initialState;
    }
    render() {
        return (
            <div>
                {this.state.data.length ?
                    <HomeList data={this.state.data} />
                    : <div>{/*加载中*/}</div>
                }
                {/* 如果后端返回标志还有更多数据，则展示<LoadingMore>组件 */
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
                        : <div></div>
                }

            </div>
        )
    }
    componentDidMount() {
        this._loadFirstPageData();
    }

    //这里处理重新搜索
    componentDidUpdate(prevProps, preState) {
        const keyword = this.props.keyword
        const category = this.props.category

        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // 重置 state
        this.setState(initialState)

        // 重新加载数据
        this._loadFirstPageData()
    }
    _loadFirstPageData() {
        const cityName = '偷懒'; //这里偷懒了，应该用redux取到数据
        const keyword = this.props.keyword || ''
        const category = this.props.category
        const result = getSearchData(0, cityName, category, keyword)
        // console.log(result)
        this._handleResult(result);

    }
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.userInfo.cityName ;
        const page = this.state.page
        const keyword = this.props.keyword || ''
        const category = this.props.category
        const result = getSearchData(page, cityName, category, keyword)
        // console.log(result)
        this._handleResult(result);
        this.setState({
            isLoadingMore: false,
            page: this.state.page + 1,
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
// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)
