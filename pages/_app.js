import '../styles/globals.css';
import '../styles/bootstrap/css/bootstrap.min.css';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   const router = useRouter();
//   const data = fetchApi(router.pathname);
//   console.log('TEST', data);
//   return {
//     data,
//   };
// }

export default MyApp;
