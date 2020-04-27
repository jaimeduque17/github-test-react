import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
`

const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
`

const Figure = styled.figure`
    position: relative;
    width: 10rem;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 15px;
`

const Img1 = styled.img`
    position: relative;
    z-index: 2;
    width: 10rem;
    top: 0;
    left: 0;
    border-radius: 15px;
    box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.1);
`

const Img2 = styled.img`
    width: 11rem;
    top: 0;
    left: 0;
    border-radius: 15px;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.05);
    position: absolute;
    z-index: 1;
    opacity: .8;
    filter: blur(15px);
    transform: scale(0.9) translateY(20px);
`

const Gist = (props) => {

    const { id, photo, name, year, description } = props

    return (
        <Container>
            <Link to={`/detail/${id}`} className="card">
                <ContainerImg className="card-image">
                    <Figure className="image">
                        <Img1
                            alt={name}
                            src={photo === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png' : photo}
                        />
                        <Img2
                            alt={name}
                            src={photo === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png' : photo}
                        />
                    </Figure>
                </ContainerImg>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content" style={{ textAlign: 'center' }}>
                            <p className="title is-4"><strong>Nombre:</strong> {name}</p>
                            <p className="subtitle is-6"><strong>Fecha de creación:</strong> {year}</p>
                            <p className="subtitle is-6"><strong>Descripción:</strong> {description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </Container>
    )
}

export default Gist;