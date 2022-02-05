import React from "react";
import Link from "next/link";
import { request } from "../../lib/datocms";
import { gql } from "graphql-request";

function Index({ data }) {
  console.log(data);
  return (
    <ul>
      {/* {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={{
              pathname: "/posts/[slug]",
              query: { slug: post.slug },
            }}
          >
            <a>{post.title}</a>
          </Link>
        </li>
      ))} */}
    </ul>
  );
}

const POSTS_PAGE_QUERY = gql`
  query MyQuery {
    allPages(filter: { slug: { eq: "/posts" } }) {
      _createdAt
      id
    }
    allPosts {
      id
      title
    }
    allPosts(orderBy: _createdAt_DESC) {
      updatedAt
      date
      author {
        id
        name
      }
      title
      slug
    }
  }
`;

export async function getStaticProps() {
  const data = await request({
    query: POSTS_PAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

export default Index;
