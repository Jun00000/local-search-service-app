import React from 'react';
import './style.less'
import SearchInput from '../SearchInput'
import { withRouter } from 'react-router-dom'

class SearchHeader extends React.Component {
    constructor() {
        super();
    }
    handleClick() {
        window.history.back();
    }
    handleEnter(value) {
        this.props.history.push('/search/all/' + encodeURIComponent(value))
    }
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.handleClick.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={this.props.keyword || ''} handleEnter={this.handleEnter.bind(this)}/>
                </div>
            </div>
        )
    }
}

// 思考一个问题，这里我要加withRouter是不是因为不是在最外层包裹的<Router>呢----并不是
export default withRouter(SearchHeader);