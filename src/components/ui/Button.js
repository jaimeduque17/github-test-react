import React from 'react';
import { Link } from 'react-router-dom'

export const Button = () => (
    <Link className='button is-info is-medium' style={{marginBottom: '50px'}}
        to='/'>
        Regresar
    </Link>
)
export default Button;