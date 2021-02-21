import {TOGGLE_OPEN_MENU} from '../ActionTypes';

const initialState={
    menuIsOpen:false
}

const MenuReducer=(state=initialState,action)=>{
 switch(action.type){
     case TOGGLE_OPEN_MENU:{
         return {
             ...state,
             menuIsOpen:!state.menuIsOpen
         }
     }
     
     default:return state;
 }
}
export default MenuReducer;