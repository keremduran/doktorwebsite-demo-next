import { request } from "../lib/datocms";
import { gql } from "graphql-request";
import React from "react";

export default function contact() {
  return (
    <div className="container contact-page">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <p>
            Bize ulasmak icin asagidaki formu doldurarak mesaj
            gonderebilirsiniz.
          </p>
          <form id="contactForm" name="sentMessage" noValidate="novalidate">
            <div className="control-group">
              <div className="form-floating controls mb-3">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  required
                  placeholder="Name"
                />
                <label className="form-label" htmlFor="name">
                  Isim
                </label>
                <small className="form-text text-danger help-block" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-floating controls mb-3">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  required
                  placeholder="Email Address"
                />
                <label className="form-label">Email Adresi</label>
                <small className="form-text text-danger help-block" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-floating controls mb-3">
                <input
                  className="form-control"
                  type="tel"
                  id="phone"
                  required
                  placeholder="Phone Number"
                />
                <label className="form-label">Telefon Numarasi</label>
                <small className="form-text text-danger help-block" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-floating controls mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  data-validation-required-message="Please enter a message."
                  required
                  placeholder="Message"
                  style={{ height: "150px" }}
                  defaultValue={""}
                />
                <label className="form-label">Mesaj</label>
                <small className="form-text text-danger help-block" />
              </div>
            </div>
            <div id="success" />
            <div className="mb-3">
              <button
                className="btn btn-primary"
                id="sendMessageButton"
                type="submit"
              >
                GONDER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const CONTACT_PAGE_QUERY = gql`
  query MyQuery {
    allPages(filter: { slug: { eq: "contact" } }) {
      _createdAt
      header {
        createdAt
        heading
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
    query: CONTACT_PAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}
