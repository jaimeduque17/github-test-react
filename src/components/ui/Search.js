import React, { useState } from 'react';
import styled from 'styled-components';
import Error404 from '../layout/404';

const Form = styled.form`
    display: flex;
    padding: 2rem;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`

function Search({setSearch}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(false);

    const searchImage = (e) => {
        e.preventDefault();

        // validate
        if (searchTerm === '') {
            setError(true);
            return;
        }

        // send the term to the main component
        setError(false);
        setSearch(searchTerm);
    }

    return (
        <Form onSubmit={searchImage}>
            <div className="field has-addons">
                <div className="control has-icons-left has-icons-right ">
                    <input
                        className="input is-large"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Gist to see.." />
                    <span className="icon is-small is-left">
                        <img alt="magnifying-glass" src="https://img.icons8.com/plasticine/100/000000/google-web-search.png" />
                    </span>
                </div>
                <div className="control">
                    <button className="button is-info is-large">
                        Search
                    </button>
                </div>
            </div>
            {(error) ? <Error404 /> : null}
        </Form>
    )
}

export default Search;