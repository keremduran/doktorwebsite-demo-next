import React from 'react';

export default function PostPreview({ title, subtitle, meta }) {
  return (
    <div className='post-preview'>
      <a href='#'>
        <h2 className='post-title'>{title}</h2>
        <h3 className='post-subtitle'>{subtitle}</h3>
      </a>
      <p className='post-meta'>
        Paylasan&nbsp;
        <a href='#'>Doctor Ad Soyad on December 24, 2021</a>
      </p>
    </div>
  );
}
