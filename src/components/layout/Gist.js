import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Gist = (props) => {

    const { id, photo, name, year, description } = props

    return (
        <>
            <Link to={`/detail/${id}`} className="card">
                <div className="card-image" style={{ paddingLeft: '100px' }}>
                    <figure className="image" style={{
                        position: 'relative',
                        width: '75%',
                        boxSizing: 'border-box',
                        padding: '10px',
                        borderRadius: '15px'
                    }}>
                        <img
                            alt={name}
                            src={photo === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png' : photo}
                            style={{
                                position: 'relative',
                                zIndex: 2,
                                width: '100%',
                                top: 0,
                                left: 0,
                                borderRadius: '15px',
                                boxShadow: `0 0 0 1px rgba(0,0,0,0.05)`
                            }}
                        />
                        <img
                            alt={name}
                            src={photo === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png' : photo}
                            style={{
                                width: '100%',
                                top: 0,
                                left: 0,
                                borderRadius: '15px',
                                boxShadow: `0 0 0 1px rgba(0,0,0,0.05)`,
                                position: 'absolute',
                                zIndex: 1,
                                opacity: .8,
                                filter: `blur(15px)`,
                                transform: `scale(0.9) translateY(20px)`
                            }}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content" style={{ textAlign: 'center' }}>
                            <p className="title is-4">{name}</p>
                            <p className="subtitle is-6">{year}</p>
                            <p className="subtitle is-6">{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Gist;