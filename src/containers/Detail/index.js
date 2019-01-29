import React from 'react';
import Header from '../../components/Header'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'

class Detail extends React.Component {
    render() {
        // 获取商户ID
        const id = this.props.match.params.id

        return (
            <div>
                <Header title="商户详情" />
                <Info id={id} />
                <Buy id={id} />
                <Comment id={id} />
            </div>
        )
    }
}

export default Detail