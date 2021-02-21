import {SENIOR_GROUP_OPEN,SENIOR_GROUP_CLOSE} from '../ActionTypes';

const initialState={
    seniorGroupIsOpen:false
}

const SeniorGroupReducer=(state=initialState,action)=>{
 switch(action.type){
     case SENIOR_GROUP_OPEN:{
         return {
             ...state,
             seniorGroupIsOpen:true
         }
     }
     case SENIOR_GROUP_CLOSE:{
         return {
             ...state,
             seniorGroupIsOpen:false
         }
     }
     default:return state;
 }
}
export default SeniorGroupReducer;