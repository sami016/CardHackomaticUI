
import React from 'react';

export const Nav = () => <nav>
    <ul className='flex justify-evenly mb-4'>
        <li className='flex-1 mx-1 text-center'>
            <a href='/design'>Design</a>
        </li>
        <li className='flex-1 mx-1 text-center'>
            <a href='/build'>Build</a>
        </li>
        <li className='flex-1 mx-1 text-center'>
            <a href='/play'>Play</a>
        </li>
    </ul>
</nav>