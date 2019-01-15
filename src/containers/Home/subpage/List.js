import React from 'react';
import { getListData } from "../../../fetch/home/home";
import HomeList from "../../../components/HomeList";

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],//不能是data:null，data是一个数组
        }
    }
    render() {
        return (
            <div>
                {this.state.data.length ?
                    <HomeList data={this.state.data} />
                    : <div>{/*加载中*/}</div>
                }
            </div>
        )
    }
    componentDidMount() {
        this._loadFirstPageData();
    }
    _loadFirstPageData(){
        const cityName = this.props.cityName;
        // fetch 后端取数据
        const result = getListData(cityName, 0);//获取的是首页数据，所以是0
        // console.log(result)
        result.then((res) => {
            return res.json()
        }).then((json) => {
            if (json.length) {
                this.setState({
                    data: json,
                })
            }
        })
    }
}

export default List