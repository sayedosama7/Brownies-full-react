import React from "react";
import { useRef } from "react";
import Navbarr from "./Navbarr";
import "./App.css";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import Component from "./Component";
import emailjs from "@emailjs/browser";

import Footer from "./Footer";

const Home = () => {
  const form = useRef();
  const sendEmail = (e) => {
    alert("message sent successfully");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f9x5d3r",
        "template_4fj0ol5",
        form.current,
        "t8DwNgBD8Nh04BlOg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Navbarr />
      {/* start section 1 */}
      <section className="sec1">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12} className="sec11">
              <h2>حلواني براونيز</h2>
              <h5>
                يقدم حلواني براونيز احلي والذ الحلويات الشرقية والغربية
                <br />
                معاك في اي حاجة حلوة
              </h5>
              <a href="src/Menu.js" target={"_blank"}>
                <Button>MENU</Button>
              </a>{" "}
              {/*بعدين*/}
            </Col>
            <Col lg={6} md={12} sm={12} className="sec111">
              <img src="/Images/شرقي.jpg" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* end section 1 */}
      {/* start Oriental*/}
      <section className="sec2" id="Component">
        <Component />
      </section>
      {/* end Oriental */}

      {/* start Gateau */}
      <section className="sec3" id="Gateau">
        <Container>
          <h1 className="gateauu">Gateau</h1>
          <Row className="row1">
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/Gateau/Black Forest gateau.jpg"
                />
                <Card.Body>
                  <Card.Title>Black Forest gateau</Card.Title>
                  <a href="src/Menu.js">
                    <Button>Buy</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/Gateau/Brownille - Gâteau au chocolat et crème vanille.jpg"
                />
                <Card.Body>
                  <Card.Title>Chocolate Gateau</Card.Title>
                  <a href="src/Menu.js">
                    <Button>Buy</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/Gateau/Chocolate Mousse - NOW, FORAGER.jpg"
                />
                <Card.Body>
                  <Card.Title>Chocolate Mousse</Card.Title>
                  <a href="src/Menu.js">
                    <Button>Buy</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="row2">
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/Gateau/Kinder Délice _ pour le goûter - Mes Délicieuses Créations.jpg"
                />
                <Card.Body>
                  <Card.Title>Lotus Cheese Cake </Card.Title>
                  <a href="src/Menu.js">
                    <Button>Buy</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/Gateau/14 Fabulous Wedding Cakes with Modern Flair - Roxy's Kitchen.jpg"
                />
                <Card.Body>
                  <Card.Title>Wedding Cakes</Card.Title>
                  <a href="src/Menu.js">
                    <Button>Buy</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/Gateau/Strawberries and Cream Cupcakes Recipe _ The Best Strawberry Dessert.jpg"
                />
                <Card.Body>
                  <Card.Title>Cupcakes</Card.Title>
                  <a href="src/Menu.js">
                    <Button>Buy</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="row2">
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/Gateau/Tarte aux fruits rouges sur sablé breton · Aux délices du palais (1).jpg"
                />
                <Card.Body>
                  <Card.Title>Tarte</Card.Title>
                  <a href="src/Menu.js">
                    <Button>Buy</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/Gateau/HugeDomains_com.jpg"
                />
                <Card.Body>
                  <Card.Title>Toffy Cake</Card.Title>
                  <a href="src/Menu.js">
                    <Button>Buy</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/Gateau/Black Forest gateau.jpg"
                />
                <Card.Body>
                  <Card.Title>Black Forest gateau</Card.Title>
                  <a href="src/Menu.js">
                    <Button>Buy</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end Gateau */}

      {/* start Bakery */}
      <section id="Bakery">
        <Container>
          <h1 className="bakery">Bakery</h1>
          <Carousel className="carousel">
            <Carousel.Item interval={800}>
              <img
                className="d-block w-100"
                src="/Images/Bakery/Le Pain Quotidien Shibakouenten.jpg"
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img
                className="d-block w-100"
                src="/Images/Bakery/12 Best Bakeries In London To Visit.jpg"
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img
                className="d-block w-100"
                src="/Images/Bakery/Bakery style Challah bread_Soft, sweet fluffy and crumbly_.jpg"
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img
                className="d-block w-100"
                src="/Images/Bakery/Japan now has cat-shaped bread and we need to move there immediately.jpg"
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img
                className="d-block w-100"
                src="/Images/Bakery/Bourbon Vanilla French Toast.jpg"
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img
                className="d-block w-100"
                src="/Images/Bakery/Meet the Suprême_ The new, cream-filled croissant that's going viral and 'worth the hype'.jpg"
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img
                className="d-block w-100"
                src="/Images/Bakery/The Best Blueberry Muffins EVER.jpg"
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img
                className="d-block w-100"
                src="/Images/Bakery/Arome Bakery London Review _ ET Food Voyage.jpg"
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      {/* end Bakery */}
      {/* start about us */}
      <section className="about" id="About Us">
        <Container>
          <center>
            <h1>About Us</h1>
          </center>
          <center>
            <h2>حلواني براونيز</h2>
          </center>
          <center>
            <p>حلواني براونيز من اشهر محلات الحلو في الوطن العربي</p>
          </center>
          <center>
            <h3>2009-2011 Our Humble Beginnings</h3>
          </center>
          <center>
            <h5>
              The shop was opened in 2020, and since that time it offers the
              most delicious and delicious sweets!
            </h5>
          </center>
        </Container>
      </section>
      {/* end about us */}

      {/* start Contact Us */}
      <section className="contact_us" id="Contact Us">
        <center>
          <h1>Contact Us</h1>
        </center>
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <form ref={form} onSubmit={sendEmail}>
                <label className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  placeholder=" Your First Name"
                />
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  placeholder=" Your Last Name"
                />
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  placeholder=" Your Email"
                />
                <Button type="submit">Submit</Button>
              </form>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="contact1">
                <p>
                  <span>Email : </span>sayedosama088@gmail.com
                </p>
                <p><span>Phone : </span>01210304516
                </p>
                <p><span>Address : </span> Sharkia Hehia
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end Contact Us */}



      <Footer />
    </>
  );
};

export default Home;
