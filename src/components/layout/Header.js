import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Search from '../ui/Search';
import Navigation from './Navigation';
import Button from '../ui/Button';
import Github from '../../assets/images/github.png';

const MainHeader = styled.div`
    color: blue;
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    padding: 2rem 0;
    background-color: gray;
    width: 100%;
`

const ContainerHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const Logo = styled.p`
    color: black;
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`

const Git = styled.img`
    width: 4rem;
    margin-right: 1rem;
    justify-content: center;
    align-items: center;
`

const Header = () => {

    return (
        <MainHeader>
            <ContainerHeader>
                    <Link to="/">
                        <Logo>
                            <Git src={Github}/>
                            Browser Gist
                        </Logo>
                    </Link>
                    <Navigation />
            </ContainerHeader>
        </MainHeader>
    );
}

export default Header;