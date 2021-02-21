import{TOGGLE_ASIDE_OPEN} from '../ActionTypes';

const initialState={
    asideIsOpen:false
}

const NavReducer=(state=initialState,action)=>{
    switch (action.type){
        case TOGGLE_ASIDE_OPEN:{
            return {
                ...state,
                asideIsOpen:!state.asideIsOpen
            }
        }
        default: return state;
    }
}
export default NavReducer;