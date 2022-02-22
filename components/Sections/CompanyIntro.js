import React from 'react';

export default function CompanyIntro() {
  return (
    <section className='company-intoduction'>
      <section className='article-list'>
        <div className='container'>
          <div className='intro'>
            <h2 className='text-center'>Tedavi Turlerimiz</h2>
            <p className='text-center'>
              Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
              Vestibulum nibh erat, pellentesque ut laoreet vitae.
            </p>
          </div>
          <div className='row articles'>
            <div className='col-sm-6 col-md-4 item'>
              <a href='#'>
                <img className='img-fluid' src='assets/img/desk.jpg' />
              </a>
              <h3 className='name'>Tedavi 1</h3>
              <p className='description'>
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                finibus est, interdum justo suscipit id.
              </p>
              <a className='action' href='#'>
                <i className='fa fa-arrow-circle-right' />
              </a>
            </div>
            <div className='col-sm-6 col-md-4 item'>
              <a href='#'>
                <img className='img-fluid' src='assets/img/building.jpg' />
              </a>
              <h3 className='name'>Tedavi 2</h3>
              <p className='description'>
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                finibus est, interdum justo suscipit id.
              </p>
              <a className='action' href='#'>
                <i className='fa fa-arrow-circle-right' />
              </a>
            </div>
            <div className='col-sm-6 col-md-4 item'>
              <a href='#'>
                <img className='img-fluid' src='assets/img/loft.jpg' />
              </a>
              <h3 className='name'>Tedavi 3</h3>
              <p className='description'>
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                finibus est, interdum justo suscipit id.
              </p>
              <a className='action' href='#'>
                <i className='fa fa-arrow-circle-right' />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Tedavi Turlerimiz */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <section className='projects-horizontal'>
              <div className='container'>
                <div className='intro'>
                  <h2 className='text-center'>Projeler</h2>
                  <p className='text-center'>
                    Nunc luctus in metus eget fringilla. Aliquam sed justo
                    ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
                  </p>
                </div>
                <div className='row projects'>
                  <div className='col-sm-6 item'>
                    <div className='row'>
                      <div className='col-md-12 col-lg-5'>
                        <a href='#'>
                          <img
                            className='img-fluid'
                            src='assets/img/desk.jpg'
                          />
                        </a>
                      </div>
                      <div className='col'>
                        <h3 className='name'>Proje Ismi</h3>
                        <p className='description'>
                          Aenean tortor est, vulputate quis leo in, vehicula
                          rhoncus lacus. Praesent aliquam in tellus eu gravida.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 item'>
                    <div className='row'>
                      <div className='col-md-12 col-lg-5'>
                        <a href='#'>
                          <img
                            className='img-fluid'
                            src='assets/img/building.jpg'
                          />
                        </a>
                      </div>
                      <div className='col'>
                        <h3 className='name'>Proje Ismi</h3>
                        <p className='description'>
                          Aenean tortor est, vulputate quis leo in, vehicula
                          rhoncus lacus. Praesent aliquam in tellus eu gravida.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 item'>
                    <div className='row'>
                      <div className='col-md-12 col-lg-5'>
                        <a href='#'>
                          <img
                            className='img-fluid'
                            src='assets/img/loft.jpg'
                          />
                        </a>
                      </div>
                      <div className='col'>
                        <h3 className='name'>Proje Ismi</h3>
                        <p className='description'>
                          Aenean tortor est, vulputate quis leo in, vehicula
                          rhoncus lacus. Praesent aliquam in tellus eu gravida.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 item'>
                    <div className='row'>
                      <div className='col-md-12 col-lg-5'>
                        <a href='#'>
                          <img
                            className='img-fluid'
                            src='assets/img/minibus.jpeg'
                          />
                        </a>
                      </div>
                      <div className='col'>
                        <h3 className='name'>Proje Ismi</h3>
                        <p className='description'>
                          Aenean tortor est, vulputate quis leo in, vehicula
                          rhoncus lacus. Praesent aliquam in tellus eu gravida.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>Videolar</h2>
          </div>
        </div>
        <div id='carousel-1' className='carousel slide' data-bs-ride='carousel'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <h3>Video Baslik 1</h3>
              <img
                className='w-100 d-block'
                src='https://cdn.bootstrapstudio.io/placeholders/1400x800.png'
                alt='Slide Image'
              />
            </div>
            <div className='carousel-item'>
              <h3>Video Baslik 2</h3>
              <img
                className='w-100 d-block'
                src='https://cdn.bootstrapstudio.io/placeholders/1400x800.png'
                alt='Slide Image'
              />
            </div>
            <div className='carousel-item'>
              <h3>Video Baslik 3</h3>
              <img
                className='w-100 d-block'
                src='https://cdn.bootstrapstudio.io/placeholders/1400x800.png'
                alt='Slide Image'
              />
            </div>
          </div>
          <div>
            <a
              className='carousel-control-prev'
              href='#carousel-1'
              role='button'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon btn-primary'
                aria-hidden='true'
              />
              <span className='visually-hidden'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carousel-1'
              role='button'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon btn-primary'
                aria-hidden='true'
              />
              <span className='visually-hidden'>Next</span>
            </a>
          </div>
          <ol className='carousel-indicators'>
            <li
              className='active'
              data-bs-target='#carousel-1'
              data-bs-slide-to={0}
            />
            <li data-bs-target='#carousel-1' data-bs-slide-to={1} />
            <li data-bs-target='#carousel-1' data-bs-slide-to={2} />
          </ol>
        </div>
      </div>
    </section>
  );
}
