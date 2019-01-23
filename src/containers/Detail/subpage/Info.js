import React from 'react';
import { getInfoData } from '../../../fetch/detail/detail'
import DetailInfo from '../../../components/DetailInfo'
import './style.less'

class Info extends React.Component {
    constructor(){
        super();
        this.state={
            info: false,
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.info
                    ? <DetailInfo data={this.state.info} />
                    : ''
                }
            </div>
        )
    }
    componentDidMount(){
        // 获取商户信息
        this._getInfo();
    }
    _getInfo(){
        const id = this.props.id;
        const result = getInfoData(id);
        result.then(res=> {
            return res.json();
        }).then(json => {
            this.setState({
                info: json
            })
        }).catch(ex => {
            console.log('详情页，获取商户信息出错')
        })
    }
}
 
export default Info