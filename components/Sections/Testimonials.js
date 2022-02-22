import React from 'react';

export default function Testimonials() {
  return (
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
              <h5 className='name'>Ali Atay</h5>
              <p className='title'>Aktör / Yönetmen</p>
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
              <h5 className='name'>Mehmet Esin</h5>
              <p className='title'>Style Co. Kurucusu</p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 item'>
            <div className='box'>
              <p className='description'>
                Aliquam varius finibus est, et interdum justo suscipit.
                Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
                in tellus eu.
              </p>
            </div>
            <div className='author'>
              <img className='rounded-circle' src='assets/img/2.jpg' />
              <h5 className='name'>Hazal Deniz</h5>
              <p className='title'>Creative Ltd. Sahibi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
