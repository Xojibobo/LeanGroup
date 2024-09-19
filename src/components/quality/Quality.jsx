import React, { Component } from "react";
import Slider from "react-slick";
import quality from "../data/quality";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function Quality() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    return (
        <div className="slider-container">
            <div className="container" id="container">
                <h1>Качество продукции подтверждают <span>сертификаты</span></h1>
                <div className="row">
                    <Slider {...settings}>
                        {quality.map((e, index) => (
                            <div key={index}>
                                <img src={e.img} alt="Quality Image" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Quality;
