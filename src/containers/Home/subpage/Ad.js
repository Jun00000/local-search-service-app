import React from 'react';
import { getAdData } from "../../../fetch/home/home";
class Ad extends React.Component {
    render(){
        return(
            <div>
                Ad
            </div>
        )
    }
    componentDidMount(){
        const result= getAdData();
        result.then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log(json)
        })
    }
}

export default Ad