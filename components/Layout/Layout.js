import React from 'react';
import MainNav from '../MainNav';
import Footer from '../Footer';
import HeadImports from '../HeadImports';
import BottomImports from '../BottomImports';
import Header from '../Header';
import { useRouter } from 'next/router';
import { fetchApi } from '../../util/fetchApi';

function Layout(props) {
  const router = useRouter();
  return (
    <div className='main-layout'>
      <HeadImports />
      <MainNav />
      <main>{props.children}</main>
      <Footer />
      <BottomImports />
    </div>
  );
}

export default Layout;
