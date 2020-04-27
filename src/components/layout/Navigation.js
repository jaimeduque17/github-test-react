import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: white;
        font-family: 'PT Sans', sans-serif;
        text-decoration: blink;

        &:last-of-type {
            margin-right: 0;
        }
    }
`

const Navigation = () => {
    return (
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </Nav>
    );
}

export default Navigation;