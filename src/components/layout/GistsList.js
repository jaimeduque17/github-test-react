import React from 'react';
import Gist from './Gist'

const GistsList = (props) => {

    const { gists } = props
    return (
        <div style={{ paddingTop: '100px' }}>
            {
                gists.map(gist => {
                    return (
                        <div key={gist.id} style={{ alignItems: 'center' }}>
                            <Gist
                                id={gist.id}
                                name={gist.owner.login}
                                year={gist.created_at}
                                description={gist.description}
                                photo={gist.owner.avatar_url === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png' : gist.owner.avatar_url}
                            />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default GistsList;