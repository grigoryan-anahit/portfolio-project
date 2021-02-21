import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col, Image} from 'react-bootstrap';

import {connect} from 'react-redux';
import '../../store/redux-store';
import { showPhotosPageAC, showVideosPageAC, imgOpenAC,modalCloseAC, nextImageAC,prevImageAC } from '../../store/ActionCreators';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import style from './gallery.module.css';

import {IMAGES} from './imagesForGallery';
import {VIDEOS} from './videosForGallery';

class GalleryPage extends React.Component{

 render(){
      const {galleryState:{activeImg, 
              modalIsOpen, photosPageIsOpen},
              showPhotosPage,showVideosPage,
              imgOpen, modalClose,nextImage,prevImage
            }=this.props;
  //images map
 
 const imagesjsx=IMAGES.map(image=>{
    return (
           <Col lg='3' md='3' sm='4' xs='5' className={style.colImg} key={image.id}>
               <img src={image.img}  alt={image.alt} className={style.imgItem} onClick={()=>imgOpen(image,image.id)}/>
          </Col>     
           )
      })
//videos map
const videosjsx=VIDEOS.map(video=>{
  return (
        <Col lg='2' md='3' sm='4' xs='5' className={style.colVid}  key={video.id}>
            <video src={video.movie}  alt={video.alt}   controls className={style.imgItem} />
        </Col>
      )
    })

    return (
      <>
         <div className={style.galleryPage}>
                 <div className={style.buttonsDiv} >
                      <button className={photosPageIsOpen?`${style.galleryButtonImg} ${style.galleryButtonClicked}`:style.galleryButtonImg} onClick={showPhotosPage} >ՆԿԱՐՆԵՐ</button>
                      <button className={!photosPageIsOpen?`${style.galleryButton} ${style.galleryButtonClicked}`:style.galleryButton} onClick={showVideosPage}>ՏԵՍԱՆՅՈՒԹԵՐ</button>
                   </div> 
                     
             <Container fluid >
                 <Row >
                    {photosPageIsOpen?imagesjsx:videosjsx}
               </Row>
              </Container>
         </div>

       
           { activeImg && modalIsOpen &&
          
        <Modal open={modalIsOpen}  onClose={modalClose}
                  center
                  classNames={{
                  overlay: 'customOverlay',
                  modal: 'customModal',
                 }}
                 showCloseIcon={false}
              > <Container ><Row ><Col lg='12' sm='12' xs='12'  > 
                 <Image src={activeImg.img}  alt={activeImg.alt} className={style.imgItemBig} /> 
                 </Col></Row></Container> 
                  <FontAwesomeIcon icon={faTimes}  className={style.closeIcon} color='orange'   cursor='pointer' onClick={modalClose} />  
                  <FontAwesomeIcon icon={faChevronRight} size='lg' className={style.nextIcon} color='orange'   cursor='pointer' onClick={nextImage} /> 
                  <FontAwesomeIcon icon={faChevronLeft} size='lg' className={style.prevIcon} color='orange'   cursor='pointer' onClick={prevImage} /> 
      
            </ Modal> 
           
             }
       
           
       </>
    );
 }

}
 const mapStateToProps=(state)=>{
       return {
        galleryState:state.galleryState
       }
 }

 const mapDispatchToProps=(dispatch)=>{
   return{
     showPhotosPage:()=>dispatch(showPhotosPageAC()),
     showVideosPage:()=>dispatch(showVideosPageAC()),
     imgOpen:(image,id)=>dispatch(imgOpenAC(image,id)),
     modalClose:()=>dispatch(modalCloseAC()),
     nextImage:()=>dispatch(nextImageAC()),
     prevImage:()=>dispatch(prevImageAC())
    }
 }
  const GalleryContainer=connect(mapStateToProps,mapDispatchToProps)(GalleryPage);
export default GalleryContainer;

