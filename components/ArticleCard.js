import React from 'react';
import Image from 'next/image';

export default function ArticleCard({ props }) {
  const textPreviewLength = 120;
  const textPreview =
    props?.content?.value?.document?.children[0]?.children[0]?.value
      .toString()
      .slice(0, textPreviewLength);
  return (
    <div className='mb-3' style={{ maxWidth: '100%' }}>
      <div className='row no-gutters'>
        <div
          className='col-md-4'
          style={{
            backgroundImage: `url(${props?.coverImage?.url})`,
            backgroundPosition: '50% 50%',
          }}
        ></div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <span class='badge bg-secondary'>
              {props.category._seoMetaTags[0].content}
            </span>
            <p className='card-text'>{textPreview}...</p>
            <p className='card-text d-flex flex-wrap align-items-center justify-content-between'>
              <span>
                <div
                  className='d-flex flex-wrap align-items-center justify-content-between'
                  style={{
                    display: 'inline-block',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: '6rem',
                    height: '6rem',
                  }}
                >
                  <Image
                    width='60px'
                    height='60px'
                    className='rounded-circle'
                    src={props?.author?.picture?.url}
                    alt={props?.author?.name}
                  />
                </div>
                <small className='text-muted mx-2'>
                  Yazar: {props?.author?.name}
                </small>
              </span>
              <small className='text-muted float-right my-1'>
                Tarih: {props?.date}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
