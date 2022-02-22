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
                Burada sizinle paylasmak istedigimiz son gelismeleri, haberleri
                ve makaleleri gorebilirsiniz.
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
                <a href='#'>Doktor Mehmet Ali on 24 Aralik 2021</a>
              </p>
            </div>
            <hr />
            <div className='post-preview'>
              <a href='#'>
                <h2 className='post-title'>
                  Hayat bize verilip verilebilecek en guzel hediyedir.
                </h2>
                <h3 className='post-subtitle'>
                  Her insanın sınırlı sayıda kalp atışı olduğuna inanıyorum.
                  Hiçbirini boşa harcamak niyetinde değilim.
                </h3>
              </a>
              <p className='post-meta'>
                Paylasan&nbsp;
                <a href='#'>Doktor Mehmet Ali on 24 Aralik 2021</a>
              </p>
            </div>
            <hr />
            <div className='post-preview'>
              <a href='#'>
                <h2 className='post-title'>
                  Bilim henüz kehanet konusunda uzmanlaşmadı
                </h2>
                <h3 className='post-subtitle'>
                  Gelecek yıl için çok fazla öngörüde bulunuyoruz ama gelecek on
                  yıl için çok az şey öngörüyoruz.
                </h3>
              </a>
              <p className='post-meta'>
                Paylasan&nbsp;
                <a href='#'>Doktor Mehmet Ali on 24 Aralik 2021</a>
              </p>
            </div>
            <hr />
            <div className='post-preview'>
              <a href='#'>
                <h2 className='post-title'>Başarısızlık bir seçenek değil</h2>
                <h3 className='post-subtitle'>
                  Pek çok kişi, keşfin kaderimizin bir parçası olduğunu söylüyor
                  ama aslında bu bizim gelecek nesillere karşı görevimiz.{' '}
                </h3>
              </a>
              <p className='post-meta'>
                Paylasan&nbsp;
                <a href='#'>Doktor Mehmet Ali on 24 Aralik 2021</a>
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
                        Devam
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
