import React from 'react';

export default function about() {
  return (
    <div>
      <header
        className='masthead h-75 d-flex justify-content-center align-items-center'
        style={{ backgroundImage: 'url("assets/img/AboutImageMain.jpg")' }}
      >
        <div className='overlay' />
        <div className='container' style={{ margin: 'auto' }}>
          <div className='row'>
            <div className='col-md-10 col-lg-8 mx-auto position-relative'>
              <div className='site-heading' style={{ padding: 0 }}>
                <h1 style={{ height: '99px', padding: '10px' }}>Hakkimizda</h1>
                <span className='subheading'>Yaptiklarimiz</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='features-boxed'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <section className='team-clean'>
                <div className='container'>
                  <div className='intro'>
                    <h2 className='text-center'>Takim</h2>
                    <p className='text-center'>
                      Nunc luctus in metus eget fringilla. Aliquam sed justo
                      ligula. Vestibulum nibh erat, pellentesque ut laoreet
                      vitae.{' '}
                    </p>
                  </div>
                  <div className='row people'>
                    <div className='col-md-6 col-lg-4 item'>
                      <img className='rounded-circle' src='assets/img/1.jpg' />
                      <h3 className='name'>Ben Johnson</h3>
                      <p className='title'>Musician</p>
                      <p className='description'>
                        Aenean tortor est, vulputate quis leo in, vehicula
                        rhoncus lacus. Praesent aliquam in tellus eu gravida.
                        Aliquam varius finibus est, et interdum justo suscipit
                        id. Etiam dictum feugiat tellus, a semper massa.{' '}
                      </p>
                      <div className='social'>
                        <a href='#'>
                          <i className='fa fa-facebook-official' />
                        </a>
                        <a href='#'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#'>
                          <i className='fa fa-instagram' />
                        </a>
                      </div>
                    </div>
                    <div className='col-md-6 col-lg-4 item'>
                      <img className='rounded-circle' src='assets/img/2.jpg' />
                      <h3 className='name'>Emily Clark</h3>
                      <p className='title'>Artist</p>
                      <p className='description'>
                        Aenean tortor est, vulputate quis leo in, vehicula
                        rhoncus lacus. Praesent aliquam in tellus eu gravida.
                        Aliquam varius finibus est, et interdum justo suscipit
                        id. Etiam dictum feugiat tellus, a semper massa.{' '}
                      </p>
                      <div className='social'>
                        <a href='#'>
                          <i className='fa fa-facebook-official' />
                        </a>
                        <a href='#'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#'>
                          <i className='fa fa-instagram' />
                        </a>
                      </div>
                    </div>
                    <div className='col-md-6 col-lg-4 item'>
                      <img className='rounded-circle' src='assets/img/3.jpg' />
                      <h3 className='name'>Carl Kent</h3>
                      <p className='title'>Stylist</p>
                      <p className='description'>
                        Aenean tortor est, vulputate quis leo in, vehicula
                        rhoncus lacus. Praesent aliquam in tellus eu gravida.
                        Aliquam varius finibus est, et interdum justo suscipit
                        id. Etiam dictum feugiat tellus, a semper massa.{' '}
                      </p>
                      <div className='social'>
                        <a href='#'>
                          <i className='fa fa-facebook-official' />
                        </a>
                        <a href='#'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#'>
                          <i className='fa fa-instagram' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='intro'>
            <h2 className='text-center'>Features </h2>
            <p className='text-center'>
              Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
              Vestibulum nibh erat, pellentesque ut laoreet vitae.
            </p>
          </div>
          <div className='row justify-content-center features'>
            <div className='col-sm-6 col-md-5 col-lg-4 item'>
              <div className='box'>
                <i className='fa fa-map-marker icon' />
                <h3 className='name'>Works everywhere</h3>
                <p className='description'>
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className='learn-more' href='#'>
                  Learn more »
                </a>
              </div>
            </div>
            <div className='col-sm-6 col-md-5 col-lg-4 item'>
              <div className='box'>
                <i className='fa fa-clock-o icon' />
                <h3 className='name'>Always available</h3>
                <p className='description'>
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className='learn-more' href='#'>
                  Learn more »
                </a>
              </div>
            </div>
            <div className='col-sm-6 col-md-5 col-lg-4 item'>
              <div className='box'>
                <i className='fa fa-list-alt icon' />
                <h3 className='name'>Customizable </h3>
                <p className='description'>
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className='learn-more' href='#'>
                  Learn more »
                </a>
              </div>
            </div>
            <div className='col-sm-6 col-md-5 col-lg-4 item'>
              <div className='box'>
                <i className='fa fa-leaf icon' />
                <h3 className='name'>Organic </h3>
                <p className='description'>
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className='learn-more' href='#'>
                  Learn more »
                </a>
              </div>
            </div>
            <div className='col-sm-6 col-md-5 col-lg-4 item'>
              <div className='box'>
                <i className='fa fa-plane icon' />
                <h3 className='name'>Fast </h3>
                <p className='description'>
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className='learn-more' href='#'>
                  Learn more »
                </a>
              </div>
            </div>
            <div className='col-sm-6 col-md-5 col-lg-4 item'>
              <div className='box'>
                <i className='fa fa-phone icon' />
                <h3 className='name'>Mobile-first</h3>
                <p className='description'>
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className='learn-more' href='#'>
                  Learn more »
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 col-lg-8 mx-auto'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              nostrum ullam eveniet pariatur voluptates odit, fuga atque ea
              nobis sit soluta odio, adipisci quas excepturi maxime quae totam
              ducimus consectetur?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              praesentium recusandae illo eaque architecto error, repellendus
              iusto reprehenderit, doloribus, minus sunt. Numquam at quae
              voluptatum in officia voluptas voluptatibus, minus!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              consequuntur magnam, excepturi aliquid ex itaque esse est vero
              natus quae optio aperiam soluta voluptatibus corporis atque iste
              neque sit tempora!
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
