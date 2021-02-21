import {SHOW_PHOTOS_PAGE,
 SHOW_VIDEOS_PAGE,
 IMG_OPEN,
 MODAL_CLOSE,
 NEXT_IMAGE,
 PREV_IMAGE
} from '../ActionTypes';
import {IMAGES} from '../../pages/gallery/imagesForGallery';

const initialState={
    activeImg:null,
    currentIndex:null,
    modalIsOpen:false,
    photosPageIsOpen:true
}
const GalleryReducer=(state=initialState,action)=>{
    switch(action.type){
        case SHOW_PHOTOS_PAGE:{
            return {
                ...state,
                photosPageIsOpen:true
            }
        }
        case SHOW_VIDEOS_PAGE:{
            return {
                ...state,
                photosPageIsOpen:false
            }
        }
        case IMG_OPEN:{

            return {
                ...state,
                activeImg:action.image,
                currentIndex:action.id,
                modalIsOpen:true,
            }
        }
     
        case MODAL_CLOSE:{
            return {
                ...state,
                modalIsOpen:false
            }
        }
         case NEXT_IMAGE:{
            let currentIndex = IMAGES.indexOf(state.activeImg);
            let nextImage = IMAGES[currentIndex +1];
               if(currentIndex >= IMAGES.length - 1){
                     return{
                         ...state,
                            activeImg:IMAGES[0]
                     }
                 }
              else return {
                  ...state,
                  activeImg:nextImage
              }
        }
        case PREV_IMAGE:{
            let currentIndex = IMAGES.indexOf(state.activeImg);
            let prevImage = IMAGES[currentIndex -1];
                if(currentIndex===0){
                    return { 
                           ...state, 
                       activeImg:IMAGES[IMAGES.length-1]
                    }
                  }
                    else  return{
                        ...state, 
                        activeImg:prevImage
                        }
                    
                }
        default:return state;
    }
}
export default GalleryReducer;