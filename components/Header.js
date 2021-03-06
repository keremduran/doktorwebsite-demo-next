import React from 'react';

export default function Header({ props }) {
  return (
    <header
      className='masthead d-flex justify-content-center align-items-center'
      style={{
        backgroundImage: `url(${props?.image?.url})`,
        backgroundPosition: '50% 20%',
        height: '90vh',
      }}
    >
      <div className='overlay' />
      <div className='col-md-10 col-lg-8 offset-sm-4 position-relative flex-column justify-content-center align-items-center'>
        <div className='p-0 site-heading container'>
          <h1 className='mt-10'>
            {props?.heading}
            {props?.heading2 && (
              <span className='heading2'>
                <br />
                {props?.heading2}
              </span>
            )}
            {props?.subheading && (
              <span className='subheading'>{props?.subheading}</span>
            )}
            {props?.subheading2 && (
              <span className='subheading'>{props?.subheading2}</span>
            )}
          </h1>
        </div>
        {props?.buttonText && (
          <div className='continue-button d-flex'>
            <button className='btn btn-dark m-2 mx-auto' type='button'>
              {props?.buttonText}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
