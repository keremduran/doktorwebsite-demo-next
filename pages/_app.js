import "../styles/globals.css";
import "../styles/bootstrap/css/bootstrap.min.css";
import "../public/assets/css/Article-List.css";
import "../public/assets/css/Testimonials.css";
import "../public/assets/css/Features-Blue.css";
import "../public/assets/css/Features-Boxed.css";
import "../public/assets/css/Global.css";
import "../public/assets/css/Highlight-Blue.css";
import "../public/assets/css/Highlight-Phone.css";
import "../public/assets/css/Projects-Horizontal.css";
import "../public/assets/css/Team-Boxed.css";
import "../public/assets/css/Team-Clean.css";
import "../public/assets/fonts/font-awesome.min.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
