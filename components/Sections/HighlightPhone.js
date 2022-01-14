import React from 'react';

export default function HighlightPhone() {
  return (
    <section className='quick-actions highlight-phone'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='mb-5'>
            <div className='intro'>
              <h2>Bize Ulas</h2>
              <p>
                Son teknoloji online sistem ile saniyeler icerisinde uygun
                saatleri aratabilirsiniz.
              </p>
            </div>
            <a className='btn btn-primary' role='button' href='#'>
              Bize ulas
            </a>
          </div>
          <div>
            <h2>Hizli Randevu Ozelligi</h2>
            <div className='intro'>
              <p>
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae. Aliqua sed
                justo ligula.
              </p>
            </div>
            <a className='btn btn-primary' role='button' href='#'>
              randevu al
            </a>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='d-none d-md-block phone-mockup'>
            <img className='device' src='assets/img/phone.svg' />
            <div className='screen' />
          </div>
        </div>
      </div>
    </section>
  );
}
