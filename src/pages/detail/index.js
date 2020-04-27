import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Button } from '../../components/ui/Button';

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 50px;
    box-sizing: border-box;
    padding-right: 15px;
    padding-left: 15px;
`

const DetailCard = styled.div`
    position: relative;
    width: 50%;
    max-width: 500px;
    box-sizing: border-box;
    padding-right: 30px;
    padding-left: 30px;
`

const Img1 = styled.img`
    width: 100%;
    top: 0;
    left: 0;
    border-radius: 15px;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.05);
    position: absolute;
    z-index: 1;
    opacity: .8;
`

const Img2 = styled.img`
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    border-radius: 15px;
    filter: blur(20px);
    transform: scale(0.9) translateY(-20px);
`

const Detail = (props) => {

    const [gist, setGist] = useState({})

    const _fetchGist = ({ id }) => {
        fetch(`https://api.github.com/gists/${id}`)
            .then(res => res.json())
            .then(gist => {
                console.log({ gist })
                setGist(gist)
            })
    }

    useEffect(() => {
        console.log(props)
        const { gistId } = props.match.params
        _fetchGist({ id: gistId })
    })

    return (
        <Container className="Detail">
            <ContainerCard className="Detail__card" style={{
                
            }}>
                <DetailCard className="Detail__column Detail__column_img" style={{
                    
                }}>
                    <Img1 src={gist.owner && gist.owner.avatar_url ? gist.owner.avatar_url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png'} alt={gist.owner} className="Detail__poster Detail__poster_blured"/>
                    <Img2 src={gist.owner && gist.owner.avatar_url ? gist.owner.avatar_url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png'} alt={gist.owner} className="Detail__poster"/>
                </DetailCard>
                <div className="Detail__column Detail__description" style={{ marginTop: '130px' }}>
                    <h2 className="Detail__title title">Nombre: {gist.owner && gist.owner.login}</h2>
                    <div className="tags">
                        <p className="tag is-rounded">Fecha de creación: {moment(gist.created_at).format('L')}</p>
                    </div>
                    <p onClick={() => window.location.href = `https://github.com/${gist.owner && gist.owner.login}`}>
                        <strong>Perfil de Github:</strong> <span className="tag is-warning"><i className="fas fa-star Detail__star"></i> {gist.owner && gist.owner.html_url}</span>
                    </p>
                    <p>
                        <strong>Descripción:</strong>
                        <br />
                        {gist.description}
                    </p>
                    <div className="Detail__footer" style={{ marginTop: '30px' }}>
                        <Button />
                    </div>
                </div>
            </ContainerCard>
        </Container>
    )
}

export default Detail;