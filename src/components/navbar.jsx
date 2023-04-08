import React from "react";
import "../styles/navbar.css";
import { Carousel, Col, Container, Form, Row } from "react-bootstrap";
const abc = require("../img/navbar.png")

const Navbar = ({ setShow, size }) => {

  const data = [
    {
        name:"Роллы",
        id:1
    },
    {
        name:"Запеченные роллы",
        id:2
    },
    {
        name:"Горячие роллы",
        id:3
    },
    {
        name:"Роллы 1+1",
        id:4
    },
    {
        name:"Сеты",
        id:5
    },
    {
        name:"Пицца",
        id:6
    },
    {
        name:"WOK",
        id:7
    },
    {
        name:"Салаты & Супы",
        id:8
    },
    {
        name:"Бизнес-ланчи",
        id:9
    },
    {
        name:"Десерты",
        id:10
    },
    {
        name:"Соусы",
        id:11
    }
]


  return (
    <Container>
      <Row>
<Col>
<nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
        <h1 className='nav_logo'>LOGO</h1>
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
    
</Col>
      </Row>
      <Row>
      {
         data.map(({name}) => (
             <>
            <Col xs={1}>
            <button className='search-box'>
                <h4 className="search">{name}</h4>
              </button>
       </Col>
             
            </>
        ))
     }

<Col>
       <Form.Select aria-label="Default select example">
      <option>Til</option>
      <option value="1">Eng</option>
      <option value="2">Ru</option>
      <option value="3">Uz</option>
    </Form.Select>
       </Col>
      </Row>
      <Row>
                <Col>
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={abc}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3 className='carusel'>Роллы из-под ножа</h3>
          <p className='carusel1'>Вы можете быть уверенными, что наши роллы будут <br />
           приготовлены исключительно из свежей рыбы. <br />
Мы не готовим заранее. Приступаем к приготовлению <br /> блюд только после Вашего заказа.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={abc}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='carusel'>Роллы из-под ножа</h3>
          <p className='carusel1'>Вы можете быть уверенными, что наши роллы будут <br />
           приготовлены исключительно из свежей рыбы. <br />
Мы не готовим заранее. Приступаем к приготовлению <br /> блюд только после Вашего заказа.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={abc}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='carusel'>Роллы из-под ножа</h3>
          <p className='carusel1'>Вы можете быть уверенными, что наши роллы будут <br />
           приготовлены исключительно из свежей рыбы. <br />
Мы не готовим заранее. Приступаем к приготовлению <br /> блюд только после Вашего заказа.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </Col>
            </Row>
    </Container>
  );
};

export default Navbar;