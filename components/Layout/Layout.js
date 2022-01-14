import React from 'react';
import MainNav from '../MainNav';
import Footer from '../Footer';
import HeadImports from '../HeadImports';
import BottomImports from '../BottomImports';
import Header from '../Header';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { fetchApi } from '../../util/fetchApi';

function Layout(props) {
  const router = useRouter();
  const data = fetchApi(router.pathname);
  return (
    <div>
      <HeadImports />
      <MainNav />
      <Header {...data} />
      <main>{props.children}</main>
      <Footer />
      <BottomImports />
    </div>
  );
}

export default Layout;
