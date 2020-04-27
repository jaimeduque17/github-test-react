import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    margin-top: 5rem;
    text-align: center;
    font-size: 2rem;
`

const Eror404 = () => {
    return (
        <H1>
            <strong>
                <span role="img" aria-label="sad-face"> 😞 </span>Sorry, results not found!
            </strong>
        </H1>
    );
}

export default Eror404;