import React from "react";
import { StructuredText } from "react-datocms";
import { useRouter } from "next/router";
import { request } from "../../lib/datocms";
import { gql } from "graphql-request";

export default function posts({ data }) {
  const post = data.data.post;
  return (
    <div className="px-4 mw-75">
      <h1>{post.title}</h1>
      <span className="text-muted">
        {post.author.name}
        <br />
        Tarih: {post.date} Son Guncelleme: {post.updatedAt}
      </span>
      <StructuredText data={post.content} />
    </div>
  );
}

const PATHS_QUERY = gql`
  query MyQuery($limit: IntType) {
    allPosts(first: $limit) {
      slug
    }
  }
`;

const POST_PAGE_QUERY = gql`
  query MyQuery($slug: String) {
    post(filter: { slug: { eq: $slug } }) {
      updatedAt
      date
      author {
        id
        name
      }
      title
      content {
        value
      }
      slug
    }
  }
`;

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const data = await request({
    query: POST_PAGE_QUERY,
    variables: { slug },
  });
  return {
    props: {
      data: {
        data,
        allPages: [
          {
            header: [
              {
                heading: data.post.title,
                subheading: data.post.author.name,
                subheading2: data.post.date,
              },
            ],
          },
        ],
      },
    },
  };
}
// { header: [{ props: { heading: data.post.title } }] }
export async function getStaticPaths() {
  const data = await request({
    query: PATHS_QUERY,
    variables: { limit: 10 },
  });
  const paths = data.allPosts.map((post) => {
    return {
      params: { slug: post.slug.toString() },
    };
  });
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
