import {createStore, combineReducers} from 'redux';
import NavReducer from './reducers/nav-reducer';
import MiddleGroupReducer from './reducers/middleGroup-reducer';
import SmallGroupReducer from './reducers/smallGroup-reducer';
import SeniorGroupReducer from './reducers/seniorGroup-reducer';
import MenuReducer from './reducers/menu-reducer';
import GalleryReducer from './reducers/gallery-reducer';

const reducers=combineReducers({
    navState:NavReducer,
    smallGroupState:SmallGroupReducer,
    middleGroupState:MiddleGroupReducer,
    seniorGroupState:SeniorGroupReducer,
    menuState:MenuReducer,
    galleryState:GalleryReducer
})

const store=createStore(reducers);

export default store;