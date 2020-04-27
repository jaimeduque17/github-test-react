import React, { Component, useState } from 'react';
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

    const [usedSearch, setUsedSearch] = useState(false);
    const [results, setResults] = useState([]);

    const _handleResults = (results) => {
        setResults(results)
        setUsedSearch(true)
    }

    const _renderResults = () => {
        return results.length === 0
            ? <h6><span role="img" aria-label="sad-face"> 😞 </span>Sorry, results not found!</h6>
            : <GistsList gists={results} />
    }

    return (
        <Container>
            <div className="SearchForm-wrapper">
                <Search onResult={_handleResults} />
            </div>
            {usedSearch
                ? _renderResults()
                : <small>Use the form to search a gist</small>
            }
        </Container>
    )
}

export default Home;