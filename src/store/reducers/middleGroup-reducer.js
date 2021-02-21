import {MIDDLE_GROUP_OPEN,MIDDLE_GROUP_CLOSE} from '../ActionTypes';

const initialState={
    middleGroupIsOpen:false
}

const MiddleGroupReducer=(state=initialState,action)=>{
 switch(action.type){
     case MIDDLE_GROUP_OPEN:{
         return {
             ...state,
             middleGroupIsOpen:true
         }
     }
     case MIDDLE_GROUP_CLOSE:{
         return {
             ...state,
             middleGroupIsOpen:false
         }
     }
     default:return state;
 }
}
export default MiddleGroupReducer;