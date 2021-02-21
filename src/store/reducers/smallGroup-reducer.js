import {SMALL_GROUP_OPEN,SMALL_GROUP_CLOSE} from '../ActionTypes';

const initialState={
    smallGroupIsOpen:false,
}

const SmallGroupReducer=(state=initialState,action)=>{
 switch(action.type){
     case SMALL_GROUP_OPEN:{
         return {
             ...state,
             smallGroupIsOpen:true
         }
     }
     case SMALL_GROUP_CLOSE:{
         return {
             ...state,
             smallGroupIsOpen:false
         }
     }
     default:return state;
 }
}
export default SmallGroupReducer;