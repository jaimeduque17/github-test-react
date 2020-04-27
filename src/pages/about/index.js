import React from 'react';
import styled from 'styled-components';
import '../../App.css';

const H1 = styled.h1`
    margin-top: 15rem;
    text-align: center;
    color: black;
    font-size: 2rem;
    padding: 0 20rem;
`

function About() {
    return(
        <H1>Using the [Github Gists API]
        (https://developer.github.com/v3/gists/) is developed an
        app to consult public gist.</H1>
    )
}

export default About;