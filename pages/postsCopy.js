import Link from "next/link";
import { request } from "../lib/datocms";
import { gql } from "graphql-request";

function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={{
              pathname: "/blog/[slug]",
              query: { slug: post.slug },
            }}
          >
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const CONTACT_PAGE_QUERY = gql`
  query MyQuery {
    allPosts
  }
`;

export async function getStaticProps() {
  const data = await request({
    query: CONTACT_PAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

export default Posts;
