import { request } from "../lib/datocms";
import { gql } from "graphql-request";
import Testimonials from "../components/Sections/Testimonials";
import NewsAndArticles from "../components/Sections/NewsAndArticles";
import HighlightPhone from "../components/Sections/HighlightPhone";
import CompanyIntro from "../components/Sections/CompanyIntro";

export default function Home({ data }) {
  return (
    <main>
      <section className="home-page">
        <Testimonials />
        <section className="inner-content">
          <HighlightPhone />
          <CompanyIntro />
        </section>
        <NewsAndArticles />
      </section>
    </main>
  );
}

const HOMEPAGE_QUERY = gql`
  query MyQuery {
    allPages(filter: { slug: { eq: "" } }) {
      _createdAt
      header {
        buttonText
        createdAt
        heading
        heading2
        id
        image {
          url
        }
        subheading
      }
      id
    }
  }
`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}
