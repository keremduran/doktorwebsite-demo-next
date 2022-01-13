import React from 'react';

export default function Header() {
  return (
    <header
      className='masthead d-flex justify-content-center align-items-end'
      style={{
        backgroundImage: 'url("assets/img/DoctorImage.jpg")',
        backgroundPosition: '50% 20%',
        height: '90vh',
      }}
    >
      <div className='overlay' />
      <div className='container h-75 d-flex align-items-right'>
        <div className='col-md-10 col-lg-8 offset-5 offset-sm-4 position-relative flex-column justify-content-center align-items-center'>
          <div className='site-heading container' style={{ padding: 0 }}>
            <h1 className='mt-10'>
              Doktor
              <br />
              Ad Soyad
              <br />
              <span className='subheading'>Uzmanlik</span>
            </h1>
          </div>
          {/* Continue Button */}
          <div class='continue-button container d-flex justify-content-center align-items-center'>
            <button
              className='btn btn-primary m-2 data-mdb-toggle="animation" data-mdb-animation-reset="true" data-mdb-animation="slide-out-right'
              type='button'
            >
              devam et
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
