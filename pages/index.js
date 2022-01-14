import Testimonials from '../components/Sections/Testimonials';
import NewsAndArticles from '../components/Sections/NewsAndArticles';
import HighlightPhone from '../components/Sections/HighlightPhone';
import CompanyIntro from '../components/Sections/CompanyIntro';

export default function Home() {
  return (
    <section className='home-page container'>
      <Testimonials />
      <section className='inner-content'>
        <HighlightPhone />
        <CompanyIntro />
      </section>
      <NewsAndArticles />
    </section>
  );
}
