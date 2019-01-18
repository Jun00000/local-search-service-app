import React from 'react';
import SearchHeader from  '../../components/SearchHeader'
import SearchList from './subpage/List.js'

class Search extends React.Component {
    render(){
        // react-router 4.x 以前的版本为this.props.params
        const params = this.props.match.params
        return(
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category} />
            </div>
        )
    }
}

export default Search;