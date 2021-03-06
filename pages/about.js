import { request } from "../lib/datocms";
import { gql } from "graphql-request";
import React from "react";

export default function About({ data }) {
  return (
    <div>
      <section className="features-boxed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="team-clean">
                <div className="container">
                  <div className="intro">
                    <h2 className="text-center">Takim</h2>
                    <p className="text-center">
                      Nunc luctus in metus eget fringilla. Aliquam sed justo
                      ligula. Vestibulum nibh erat, pellentesque ut laoreet
                      vitae.{" "}
                    </p>
                  </div>
                  <div className="row people">
                    <div className="col-md-6 col-lg-4 item">
                      <img className="rounded-circle" src="assets/img/1.jpg" />
                      <h3 className="name">Mehmet Ali</h3>
                      <p className="title">Docent Doktor</p>
                      <p className="description">
                        Aenean tortor est, vulputate quis leo in, vehicula
                        rhoncus lacus. Praesent aliquam in tellus eu gravida.
                        Aliquam varius finibus est, et interdum justo suscipit
                        id. Etiam dictum feugiat tellus, a semper massa.{" "}
                      </p>
                      <div className="social">
                        <a href="#">
                          <i className="fa fa-facebook-official" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 item">
                      <img className="rounded-circle" src="assets/img/2.jpg" />
                      <h3 className="name">Demet Kaya</h3>
                      <p className="title">Doktor</p>
                      <p className="description">
                        Aenean tortor est, vulputate quis leo in, vehicula
                        rhoncus lacus. Praesent aliquam in tellus eu gravida.
                        Aliquam varius finibus est, et interdum justo suscipit
                        id. Etiam dictum feugiat tellus, a semper massa.{" "}
                      </p>
                      <div className="social">
                        <a href="#">
                          <i className="fa fa-facebook-official" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 item">
                      <img className="rounded-circle" src="assets/img/3.jpg" />
                      <h3 className="name">Burak Deniz</h3>
                      <p className="title">Doktor</p>
                      <p className="description">
                        Aenean tortor est, vulputate quis leo in, vehicula
                        rhoncus lacus. Praesent aliquam in tellus eu gravida.
                        Aliquam varius finibus est, et interdum justo suscipit
                        id. Etiam dictum feugiat tellus, a semper massa.{" "}
                      </p>
                      <div className="social">
                        <a href="#">
                          <i className="fa fa-facebook-official" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Bizi One Cikaranlar</h2>
            <p className="text-center">
              Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
              Vestibulum nibh erat, pellentesque ut laoreet vitae.
            </p>
          </div>
          <div className="row justify-content-center features">
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fa fa-map-marker icon" />
                <h3 className="name">Global Servis</h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className="learn-more" href="#">
                  Daha Fazla ??
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fa fa-clock-o icon" />
                <h3 className="name">Randevu Kolayligi</h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className="learn-more" href="#">
                  Daha fazla ??
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fa fa-list-alt icon" />
                <h3 className="name">Limitsiz Secenekler </h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className="learn-more" href="#">
                  Daha fazla ??
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fa fa-leaf icon" />
                <h3 className="name">Dogallik </h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className="learn-more" href="#">
                  Daha fazla ??
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fa fa-plane icon" />
                <h3 className="name">Uzak ve Konaklama Yardimi </h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className="learn-more" href="#">
                  Daha fazla ??
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fa fa-phone icon" />
                <h3 className="name">Kaliteli Museti Hizmeti</h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu.
                </p>
                <a className="learn-more" href="#">
                  Daha fazla ??
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              nostrum ullam eveniet pariatur voluptates odit, fuga atque ea
              nobis sit soluta odio, adipisci quas excepturi maxime quae totam
              ducimus consectetur?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              praesentium recusandae illo eaque architecto error, repellendus
              iusto reprehenderit, doloribus, minus sunt. Numquam at quae
              voluptatum in officia voluptas voluptatibus, minus!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              consequuntur magnam, excepturi aliquid ex itaque esse est vero
              natus quae optio aperiam soluta voluptatibus corporis atque iste
              neque sit tempora!
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

const ABOUT_PAGE_QUERY = gql`
  query MyQuery {
    allPages(filter: { slug: { eq: "about" } }) {
      _createdAt
      header {
        buttonText
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
    query: ABOUT_PAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}
