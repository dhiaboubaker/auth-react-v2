import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-light bg-light px-4'>
                <Link to='/' className='navbar-brand'>
                    AuthJS
                </Link>

                <div>
                    <button className='btn btn-primary '>
                        Sing Up
                    </button>
                    <button className='btn btn-primary ms-2'>
                        Sing In
                    </button>
                    <button className='btn btn-danger ms-2'>
                        Log Out
                    </button>
                </div>
            </nav>
        </div>
    );
}
