import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

class CarouselPageText extends Component {
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
                <MDBMask overlay="black-light" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <p
                  className="d-block w-100 carouselTxt">
                      դաստիարակություն
                  </p>
                 
                <MDBMask overlay="black-strong" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <p className="d-block w-100 carouselTxt">
                  ժամանց
                   </p>
                <MDBMask overlay="black-slight" />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default CarouselPageText;