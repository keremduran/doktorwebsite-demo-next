import React from 'react';

export default function MainNav() {
  return (
    <nav className='navbar navbar-expand-lg fixed-top' id='mainNav'>
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          Doktor Demo
        </a>
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
              <a className='nav-link' href='index.html'>
                ANASAYFA
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='about.html'>
                HAKKIMIZDA
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='contact.html'>
                ILETISIM
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='post.html'>
                MAKALELERIMIZ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
