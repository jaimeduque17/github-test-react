import React from 'react';
import moment from 'moment';
import Gist from './Gist';

const GistsList = ({ gists }) => {

    return (
        <div style={{ paddingTop: '10px' }}>
            {
                gists.map(gist => {
                    return (
                        <div key={gist.id} style={{ alignItems: 'center' }}>
                            <Gist
                                id={gist.id}
                                name={gist.owner.login}
                                year={moment(gist.created_at).format('L')}
                                description={gist.description && gist.description.length > 30 ? `${gist.description.substring(0, 30)}...` : gist.description}
                                photo={gist.owner.avatar_url === '' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png' : gist.owner.avatar_url}
                            />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default GistsList;