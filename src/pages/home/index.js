import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GistsList from '../../components/layout/GistsList';
import Search from '../../components/ui/Search';
import '../../App.css';

const Container = styled.div`
    margin-top: 2rem;
    text-align: center;
    color: black;
`

function Home() {

    const [search, setSearch] = useState('');
    const [gist, setGist] = useState([]);

    useEffect(() => {
        const consultAPI = async () => {

            if (search === '') return;

            const url = `https://api.github.com/users/${search}/gists`;

            const response = await fetch(url);
            const result = await response.json();

            setGist(result);
            console.log('result', result[0])

        }
        consultAPI();

    }, [search]);

    return (
        <Container>
            <div className="SearchForm-wrapper">
                <Search setSearch={setSearch} />
            </div>
            <div>
                <GistsList gists={gist} />
            </div>
        </Container>
    )
}

export default Home;