import React from 'react';
import './style.less'
import ReactSwipe from "react-swipe";

class Category extends React.Component {
    render(){
        return(
           <ReactSwipe className="carousel" swipeOptions={{continuous:false}}>
               <div>PANE 1</div>
               <div>PANE 2</div>
               <div>PANE 3</div>
           </ReactSwipe>
        )
    }
    componentDidMount(){
    }
}

export default Category;