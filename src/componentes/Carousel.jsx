import React, { useState, useEffect } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { obtenerEstrenos } from '../service/API/obtenerDatosAPI';
import styled from '@emotion/styled';

const ContenedorPortada = styled.div`
    position: absolute;
    bottom: 0px;
    left: 30px;
`
const ImagenPortada = styled.img`
    height: 200px;
`

const CuadroCarousel = ({ data }) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Carousel className="letra-borde" activeIndex={index} onSelect={handleSelect} style={{ width: "100%", height: "auto", paddingTop: "20px", marginBottom: "20px" }}>
            {data && data.map((x, i) =>
                <Carousel.Item key={i}>
                    <img
                        className="d-block w-100"
                        src={`https://image.tmdb.org/t/p/original${x.backdrop_path}`}
                        alt="First slide"
                    />

                    <Carousel.Caption >
                        <h3>{x.original_title}</h3>
                        <p>{x.overview}</p>
                    </Carousel.Caption>
                    <ContenedorPortada>
                        <ImagenPortada src={`https://image.tmdb.org/t/p/original${x.poster_path}`} onClick={() => console.log("click")} />
                    </ContenedorPortada>

                </Carousel.Item>

            )}

        </Carousel >
    )
}


const CarouselComponente = () => {
    const [imagenesCarousel, setImagenesCarousel] = useState("")

    useEffect(() => {
        console.log(imagenesCarousel)
        if (imagenesCarousel === "") {
            async function test() {
                setImagenesCarousel(await obtenerEstrenos())
            }
            test()
        }
    }, [imagenesCarousel])

    if (imagenesCarousel === "")
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )

    if (imagenesCarousel)
        return (
            <CuadroCarousel data={imagenesCarousel.slice(0, 5)} />
        )



}

export default CarouselComponente