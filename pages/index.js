import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
  return (
    <div>
      <section className='testimonials-clean'>
        <div className='container'>
          <div className='row intro text-center'>
            <h2>Yorumlar</h2>
            <p>
              Hasta memnuniyeti bizim icin oncelik tasir, ve ise basladigimiz
              gunden beri tedavi ettigimiz binlerce hasta icin bu hic
              degismemistir. Bunu size anlatmak icin sozu en iyisi onlara
              birakalim:
            </p>
          </div>
          <div className='row people'>
            <div className='col-md-6 col-lg-4 item'>
              <div className='box'>
                <p className='description'>
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est.
                </p>
              </div>
              <div className='author'>
                <img className='rounded-circle' src='assets/img/1.jpg' />
                <h5 className='name'>Ben Johnson</h5>
                <p className='title'>CEO of Company Inc.</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 item'>
              <div className='box'>
                <p className='description'>
                  Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                  est, et interdum justo suscipit id.
                </p>
              </div>
              <div className='author'>
                <img className='rounded-circle' src='assets/img/3.jpg' />
                <h5 className='name'>Carl Kent</h5>
                <p className='title'>Founder of Style Co.</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 item'>
              <div className='box'>
                <p className='description'>
                  Aliquam varius finibus est, et interdum justo suscipit.
                  Vulputate quis leo in, vehicula rhoncus lacus. Praesent
                  aliquam in tellus eu.
                </p>
              </div>
              <div className='author'>
                <img className='rounded-circle' src='assets/img/2.jpg' />
                <h5 className='name'>Emily Clark</h5>
                <p className='title'>Owner of Creative Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='inner-content'>
        <section className='quick-actions'>
          <section className='highlight-phone'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8'>
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
                <div className='col-sm-4'>
                  <div className='d-none d-md-block phone-mockup'>
                    <img className='device' src='assets/img/phone.svg' />
                    <div className='screen' />
                  </div>
                </div>
              </div>
            </div>
            <section className='highlight-phone'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8'>
                    <h2>Hizli Randevu Ozelligi</h2>
                    <div className='intro'>
                      <p>
                        Nunc luctus in metus eget fringilla. Aliquam sed justo
                        ligula. Vestibulum nibh erat, pellentesque ut laoreet
                        vitae. Aliqua sed justo ligula.
                      </p>
                    </div>
                    <a className='btn btn-primary' role='button' href='#'>
                      randevu al
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
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
                        ligula. Vestibulum nibh erat, pellentesque ut laoreet
                        vitae.
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
                            <h3 className='name'>Project Name</h3>
                            <p className='description'>
                              Aenean tortor est, vulputate quis leo in, vehicula
                              rhoncus lacus. Praesent aliquam in tellus eu
                              gravida.
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
                            <h3 className='name'>Project Name</h3>
                            <p className='description'>
                              Aenean tortor est, vulputate quis leo in, vehicula
                              rhoncus lacus. Praesent aliquam in tellus eu
                              gravida.
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
                            <h3 className='name'>Project Name</h3>
                            <p className='description'>
                              Aenean tortor est, vulputate quis leo in, vehicula
                              rhoncus lacus. Praesent aliquam in tellus eu
                              gravida.
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
                            <h3 className='name'>Project Name</h3>
                            <p className='description'>
                              Aenean tortor est, vulputate quis leo in, vehicula
                              rhoncus lacus. Praesent aliquam in tellus eu
                              gravida.
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
          {/* Projelerimiz */}
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h2>Videolar</h2>
              </div>
            </div>
            <div
              id='carousel-1'
              className='carousel slide'
              data-bs-ride='carousel'
            >
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
          {/* Videolarimiz */}
        </section>
      </section>
      <section className='news-and-articles'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='intro'>
                <h2 className='text-center' style={{ marginTop: '48px' }}>
                  Makaleler ve Haberler
                </h2>
                <p className='text-center' style={{ marginTop: '0px' }}>
                  Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                  Vestibulum nibh erat, pellentesque ut laoreet vitae.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-10 col-lg-8'>
              <div className='post-preview'>
                <a href='#'>
                  <h2 className='post-title'>
                    Alanda teknik gelisme ile ameliyat sonrasi iyilesme hizinda
                    artis yasandi.
                  </h2>
                  <h3 className='post-subtitle'>
                    Problemlerin cozumu hic bu kadar kolay gorunmemisti.
                  </h3>
                </a>
                <p className='post-meta'>
                  Paylasan&nbsp;
                  <a href='#'>Doctor Ad Soyad on December 24, 2021</a>
                </p>
              </div>
              <hr />
              <div className='post-preview'>
                <a href='#'>
                  <h2 className='post-title'>
                    I believe every human has a finite number of heartbeats. I
                    don't intend to waste any of mine.
                  </h2>
                </a>
                <p className='post-meta'>
                  Posted by&nbsp;
                  <a href='#'>Start Bootstrap on September 18, 2018</a>
                </p>
              </div>
              <hr />
              <div className='post-preview'>
                <a href='#'>
                  <h2 className='post-title'>
                    Science has not yet mastered prophecy
                  </h2>
                  <h3 className='post-subtitle'>
                    We predict too much for the next year and yet far too little
                    for the next ten.
                  </h3>
                </a>
                <p className='post-meta'>
                  Posted by&nbsp;
                  <a href='#'>Start Bootstrap on August 24, 2018</a>
                </p>
              </div>
              <hr />
              <div className='post-preview'>
                <a href='#'>
                  <h2 className='post-title'>Failure is not an option</h2>
                  <h3 className='post-subtitle'>
                    Many say exploration is part of our destiny, but it’s
                    actually our duty to future generations.
                  </h3>
                </a>
                <p className='post-meta'>
                  Posted by&nbsp;<a href='#'>Start Bootstrap on July 8, 2018</a>
                </p>
              </div>
              <hr />
              <div className='clearfix'>
                <button className='btn btn-primary' type='button'>
                  DAHA FAZLA ⇒
                </button>
              </div>
            </div>
            <div className='col'>
              <div className='card'>
                <div className='card-body'>
                  <h4 className='card-title'>Baslik</h4>
                  <h6 className='text-muted card-subtitle mb-2'>Alt baslik</h6>
                  <p className='card-text'>
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus.
                  </p>
                  <a className='card-link' href='#'>
                    Link
                  </a>
                  <a className='card-link' href='#'>
                    Link
                  </a>
                </div>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <h4 className='card-title'>Baslik</h4>
                  <h6 className='text-muted card-subtitle mb-2'>Alt baslik</h6>
                  <p className='card-text'>
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus.
                  </p>
                  <a className='card-link' href='#'>
                    Link
                  </a>
                  <section className='highlight-blue'>
                    <div className='container'>
                      <div className='intro'>
                        <h2 className='text-center'>Bilgi</h2>
                        <p className='text-center'>
                          Nunc luctus in metus eget fringilla. Aliquam sed justo
                          ligula. Vestibulum nibh erat, pellentesque ut laoreet
                          vitae.
                        </p>
                      </div>
                      <div className='buttons'>
                        <a className='btn btn-primary' role='button' href='#'>
                          Primary
                        </a>
                      </div>
                    </div>
                  </section>
                  <a className='card-link' href='#'>
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
