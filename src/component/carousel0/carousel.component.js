import React from "react";
import './carousel.component.css'

export default function CarouselComponent() {
    return (
        <div className="carousel_container">
            <section className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                    <li id="carousel__slide1"
                        tabIndex="0"
                        className="carousel__slide">
                            WITH THE BEST PRICE
                    <div className="carousel__snapper">
                    </div>
                    </li>
                    <li id="carousel__slide2"
                        tabIndex="0"
                        className="carousel__slide">
                            GET THINGS YOU NEED
                    <div className="carousel__snapper"></div>
                    </li>
                    <li id="carousel__slide3"
                        tabIndex="0"
                        className="carousel__slide">
                            RECEIVE FARM FRESH PRODUCES
                    <div className="carousel__snapper"></div>
                    </li>
                    <li id="carousel__slide4"
                        tabIndex="0"
                        className="carousel__slide">
                            FROM YOUR APARTMENT
                    <div className="carousel__snapper"></div>
                    </li>
                </ol>
                </section>
        </div>
    );
}