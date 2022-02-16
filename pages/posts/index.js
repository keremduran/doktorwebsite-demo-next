import React from "react";
import Link from "next/link";
import { request } from "../../lib/datocms";
import { gql } from "graphql-request";

function Index({ data }) {
  return (
    <section className="post-list">
      <form className="m-3 search-form w-25" target="_self">
        <div className="d-flex align-items-center">
          <label className="form-label d-flex m-4 " htmlFor="search-field">
            <i className="fa fa-search" />
          </label>
          <input
            id="search-field"
            className="form-control search-field"
            placeholder="Ara"
            type="search"
            name="search"
          />
        </div>
      </form>
      <ul className="list-group">
        {data.allPosts.map((post) => (
          <li className="list-group-item m-3" key={post.id + "1"}>
            <Link
              key={post.id}
              href={{
                pathname: "/posts/[slug]",
                query: { slug: post.slug },
              }}
            >
              <a>
                <div>
                  <h3>{post.title}</h3>
                  <span>
                    {post.date} | {post.author.name}
                  </span>
                </div>
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
      }
      title
      content {
        value
      }
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
