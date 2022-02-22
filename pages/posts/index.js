import React from "react";
import Link from "next/link";
import { request } from "../../lib/datocms";
import { gql } from "graphql-request";
import ArticleCard from "../../components/ArticleCard";

function Index({ data }) {
  return (
    <section className="post-list">
      <ul className="list-group px-4">
        {data.allPosts.map((post) => (
          <li
            className="list-group-item list-group-item-action"
            key={post.id + "1"}
          >
            <Link
              key={post.id}
              href={{
                pathname: "/posts/[slug]",
                query: { slug: post.slug },
              }}
            >
              <a>
                <ArticleCard key={post.id} props={post} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const POSTS_PAGE_QUERY = gql`
  query MyQuery($limit: IntType) {
    allPages(filter: { slug: { eq: "posts" } }) {
      _createdAt
      id
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
    }
    allPosts(first: $limit) {
      updatedAt
      date
      author {
        id
        name
        picture {
          url
        }
      }
      title
      content {
        value
      }
      slug
      coverImage {
        url
      }
      category {
        _seoMetaTags {
          content
        }
      }
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
