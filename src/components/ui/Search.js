import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import Gist from '../layout/Gist';

const Form = styled.form`
    display: flex;
    padding: 1rem;
    justify-content: center;
`

const InputSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: white;
    border: none;
    text-indent: -9999px;

    &:hover {
        cursor: pointer;
    }
`

const API_KEY = '20cb1df1'

function Search(props) {

    const [inputMovie, setInputMovie] = useState('');
    // const [data, setData] = useState([]);

    const _handleChange = (e) => {
        setInputMovie(e.target.value)
    }

    const _handleSubmit = (e) => {
        e.preventDefault()
        // setData(data)

        fetch(`https://api.github.com/users/${inputMovie}/gists`)
            .then(res => res.json())
            .then(results => {
                // const { data = [] } = results
                console.log(results)
                
                // props.onResults(data)
            })
    }

    // useEffect(() => {
    //     _handleSubmit()
    // }, [])

    // const _handleSubmit = async () => {
    //     // e.preventDefault()
    //     const data = await fetch(`https://api.github.com/users/${inputMovie}/gists`)
    //     const users = await data.json()
    //     setJaja(users)
    // }

    return (
        <Form onSubmit={_handleSubmit}>
            <div className="field has-addons">
                <div className="control has-icons-left has-icons-right ">
                    <input
                        className="input is-large"
                        onChange={_handleChange}
                        type="text"
                        placeholder="Movie to see.." />
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
        </Form>
    )
}

export default Search;