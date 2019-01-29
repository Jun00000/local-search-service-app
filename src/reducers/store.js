import * as actionTypes  from "../constants/store";

// 用户收藏*列表*，肯定是一个数组
export default function store(state=[], action) {
    switch(action.type) {

        case actionTypes.STORE_UPDATE: {
            return action.data
        }
        case actionTypes.STORE_ADD: {
            return state.unshift(action.data);
        }
        case actionTypes.STORE_RM: {
            // return action.data
            return state.filter((item)=> {
                if(item !== action.data){
                    return item;
                }
                return true;
            })
        }
        default : {
            return state
        }
    }
}
