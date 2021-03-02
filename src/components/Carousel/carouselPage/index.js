import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.jpg';
class CarouselPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={false}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <p className="d-block w-100 carouselTxt">
                     կրթություն
                </p>
                <img
                  className="d-block w-100 img"
                  src={img2}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
               <p className="d-block w-100 carouselTxt">
                   դաստիարակություն  
                 </p>
                 
                <img
                  className="d-block w-100 img"
                  src={img1}
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                 <p className="d-block w-100 carouselTxt">
                          ժամանց
                 </p>
                <img
                  className="d-block w-100 img"
                  src={img3}
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default CarouselPage;