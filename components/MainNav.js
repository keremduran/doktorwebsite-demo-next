import React from 'react';
import Link from 'next/link';

export default function MainNav() {
  return (
    <nav className='navbar navbar-expand-lg fixed-top' id='mainNav'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>Doktor Demo</a>
        </Link>
        <button
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          className='navbar-toggler'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='fa fa-bars' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' href='/'>
                <a>ANASAYFA</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/about'>
                <a>HAKKIMIZDA</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/contact'>
                <a>ILETISIM</a>
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/posts'>
                MAKALELERIMIZ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
