import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
export default class AutoPlay extends Component {
      render() {
            const settings = {
                  dots: true,
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                  speed: 2000,
                  autoplaySpeed: 1000,
                  cssEase: "linear"
            };
            return (
                  <div className="slider" >
                        <h1>Oriental</h1>
                        <Slider {...settings} className="slider2">
                              <div>
                                    <Card style={{ margin: "10px" }} >
                                          <Card.Img style={{ width: "100%", maxHeight: "100%" }} variant="top" src="/Images/Oriental/Gooey.jpg" />
                                    </Card>
                              </div>
                              <div>
                                    <Card style={{ margin: "10px" }}>
                                          <Card.Img style={{ width: "100%", maxHeight: "100%" }} variant="top" src="/Images/Oriental/Mini Kok Chai (Chinese Crispy Peanut Puffs) - Baked or Fried.jpg" />
                                    </Card>
                              </div>
                              <div>
                                    <Card style={{ margin: "10px" }}>
                                          <Card.Img style={{ width: "100%", maxmaxHeight: "100%" }} variant="top" src="/Images/Oriental/Serbetli Tatlilar.png" />
                                    </Card>
                              </div>
                              <div>
                                    <Card style={{ margin: "10px" }}>
                                          <Card.Img style={{ width: "100%", maxHeight: "100%" }} variant="top" src="/Images/Oriental/Lebanese Baklava.jpg" />
                                    </Card>
                              </div>
                              <div>
                                    <Card style={{ margin: "10px" }}>
                                          <Card.Img style={{ width: "100%", maxHeight: "100%" }} variant="top" src="/Images/Oriental/Nidos de Ruiseñor - {Ouch el Boulboul} - Bake-Street_com.jpg" />
                                    </Card>
                              </div>
                              <div>
                                    <Card style={{ margin: "10px" }}>
                                          <Card.Img style={{ width: "100%", maxHeight: "100%" }} variant="top" src="/Images/Oriental/Baklava and Beyond_ 12 Turkish Sweets You Should Know.jpg" />
                                    </Card>
                              </div>
                        </Slider>
                  </div>
            );
      }
}