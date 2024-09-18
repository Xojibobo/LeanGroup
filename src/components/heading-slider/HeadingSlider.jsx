import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function HeaderSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true


    };
    return (
        <Slider {...settings}>
            <div>
                <img src="./assets/slider1.svg" alt="" />
                <div className="container col-4 position-absolute top-50">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-6"> <p>LEANGROUP - тубы и этикетки</p>
                            <h1>Ламинатные тубы</h1>
                            <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                            <button className="btn btn-warning text-white">Каталог</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="./assets/slider1.svg" alt="" />
                <div className="container col-4 position-absolute top-50">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-6"> <p>LEANGROUP - тубы и этикетки</p>
                            <h1>Ламинатные тубы</h1>
                            <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                            <button className="btn btn-warning text-white">Каталог</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="./assets/slider1.svg" alt="" />
                <div className="container col-4 position-absolute top-50">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-6"> <p>LEANGROUP - тубы и этикетки</p>
                            <h1>Ламинатные тубы</h1>
                            <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                            <button className="btn btn-warning text-white">Каталог</button>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
}