import React from 'react';
import Script from 'next/script';
export default function BottomImports() {
  return (
    <React.Fragment>
      <Script src='assets/bootstrap/js/bootstrap.min.js'></Script>
      <Script src='assets/js/clean-blog.js'></Script>
    </React.Fragment>
  );
}
