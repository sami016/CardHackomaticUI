
import React from 'react';
import './Nav.scss';

export const Nav = () => <nav>
    <ul className='flex justify-evenly mb-4'>
        <li className='flex-1 mx-1 text-center'>
            <a href='/#/design'>Design</a>
        </li>
        {/* <li className='flex-1 mx-1 text-center not-implemented'>
            <a href='/#/build'>Build</a>
        </li>
        <li className='flex-1 mx-1 text-center not-implemented'>
            <a href='/#/play'>Play</a>
        </li> */}
        <li className='flex-1 mx-1 text-center'>
            <a href='/#/settings'>Settings</a>
        </li>
    </ul>
</nav>