import React from 'react';
import MainNav from '../MainNav';
import Header from '../Header';
import Footer from '../Footer';
import HeadImports from '../HeadImports';
import BottomImports from '../BottomImports';

function Layout(props) {
  return (
    <div>
      <HeadImports />
      <MainNav />
      <Header />
      <main>{props.children}</main>
      <Footer />
      <BottomImports />
    </div>
  );
}

export default Layout;
