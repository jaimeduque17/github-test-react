import React from 'react';
import { Link } from 'react-router-dom'

export const Button = () => (
    <Link className='button is-info is-medium' style={{marginBottom: '50px'}}
        to='/'>
        Return
    </Link>
)
export default Button;