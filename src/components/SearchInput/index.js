import React from 'react';
import './style.less'

class SearchInput extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }
    componentDidMount(){
        this.setState({
            value: this.props.value || ''
        })
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    handleKeyUp(e){
        if (e.keyCode !== 13) {
            return
        }
        this.props.handleEnter(this.state.value)
    }
    render() {
        return (
            <input type="text" className="search-input"
                placeholder="请输入关键字" value={this.state.value}
                onChange={this.handleChange.bind(this)}
                onKeyUp={this.handleKeyUp.bind(this)} />
        )
    }
}

export default SearchInput;