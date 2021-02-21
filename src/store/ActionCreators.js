import {TOGGLE_ASIDE_OPEN} from './ActionTypes';
import {MIDDLE_GROUP_OPEN,MIDDLE_GROUP_CLOSE,
    SMALL_GROUP_OPEN,SMALL_GROUP_CLOSE,
    SENIOR_GROUP_OPEN,SENIOR_GROUP_CLOSE,TOGGLE_OPEN_MENU,
    SHOW_PHOTOS_PAGE,SHOW_VIDEOS_PAGE,IMG_OPEN,MODAL_OPEN,
    MODAL_CLOSE,NEXT_IMAGE,PREV_IMAGE
} from './ActionTypes';

export const toggleAsideOpenAC=()=>({type:TOGGLE_ASIDE_OPEN});
export const middleGroupOpenAC=()=>({type:MIDDLE_GROUP_OPEN});
export const middleGroupCloseAC=()=>({type:MIDDLE_GROUP_CLOSE});
export const smallGroupOpenAC=()=>({type:SMALL_GROUP_OPEN});
export const smallGroupCloseAC=()=>({type:SMALL_GROUP_CLOSE});
export const seniorGroupOpenAC=()=>({type:SENIOR_GROUP_OPEN});
export const seniorGroupCloseAC=()=>({type:SENIOR_GROUP_CLOSE});
export const toggleOpenMenuAC=()=>({type:TOGGLE_OPEN_MENU});

export const showPhotosPageAC=()=>({type:SHOW_PHOTOS_PAGE});
export const showVideosPageAC=()=>({type:SHOW_VIDEOS_PAGE});
export const imgOpenAC=(image,id)=>({type:IMG_OPEN,image:image,id:id});
export const modalCloseAC=()=>({type:MODAL_CLOSE});
export const nextImageAC=()=>({type:NEXT_IMAGE});
export const prevImageAC=()=>({type:PREV_IMAGE});
 