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
  const pageData = props?.children?.props?.data?.allPages[0];
  const headerData = pageData?.header[0];
  return (
    <div className='main-layout'>
      <HeadImports />
      <MainNav />
      <Header props={headerData} />
      <main>{props.children}</main>
      <Footer />
      <BottomImports />
    </div>
  );
}

export default Layout;
