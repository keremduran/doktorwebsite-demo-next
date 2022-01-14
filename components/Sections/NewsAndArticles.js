import React from 'react';

export default function NewsAndArticles() {
  return (
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
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </h3>
              </a>
              <p className='post-meta'>
                Posted by&nbsp;
                <a href='#'>Start Bootstrap on July 8, 2018</a>
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
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
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
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
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
  );
}
