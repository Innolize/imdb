import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponente = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Carousel className="letra-borde" activeIndex={index} onSelect={handleSelect} style={{ width: "60%", height: "auto", marginLeft: "auto", marginRight: "auto", marginTop:"20px", marginBottom:"20px" }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://image.tmdb.org/t/p/original/jAtO4ci8Tr5jDmg33XF3OZ8VPah.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Force of Nature</h3>
                    <p>A gang of thieves plan a heist during a hurricane and encounter trouble when a disgraced cop tries to force everyone in the building to evacuate.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://image.tmdb.org/t/p/original/cjAirCV9TyTQcp7mFNRnvgkoVFV.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Babyteeth</h3>
                    <p>A terminally ill teen upsets her parents when she falls in love with a small-time drug dealer.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img

                    className="d-block w-100"
                    src="https://image.tmdb.org/t/p/original/5rwcd24GGltKiqdPT4G2dmchLr9.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Irresistible</h3>
                    <p>A Democratic political consultant helps a retired Marine colonel run for mayor in a small, conservative Wisconsin town.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponente