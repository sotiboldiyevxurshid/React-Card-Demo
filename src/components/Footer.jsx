import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/footer.css";
import FeedIcon from "@mui/icons-material/Feed";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';


export default function Footer() {
    const footer = [
        {
          id: 1,
          footer1: "Новости",
          footer_icon: <FeedIcon />,
          cl:"footer_class"
        },
        {
          id: 2,
          footer1: "Вакансии",
          footer_icon: <AttachMoneyIcon />,
          cl:"footer_class"
    
        },
        {
          id: 3,
          footer1: "Контакты",
          footer_icon: <ContactMailIcon />,
          cl:"footer_class"
    
        },
      ];
    
      const footer1 = [
        {
          id: 1,
          footer1: "Правовые документы",
          footer_icon: <DocumentScannerIcon />,
          cl:"footer_class"
    
        },
        {
          id: 2,
          footer1: "Франшиза",
          footer_icon: <BusinessCenterIcon />,
          cl:"footer_class"
    
        },
        {
          id: 3,
          footer1: "Калорийность и состав",
          footer_icon: <LocalDiningIcon />,
          cl:"footer_class"
    
        },
    ]
  return (
    <div>
        <Container>
        <Row className=" mt-5">
          <Col md={2} xs={12}>
            {footer.map(({ footer1, footer_icon,cl }) => (
              <>
                <div className="footer_div">
                  {footer_icon}
                  <h6 className={cl}>{footer1}</h6>
                </div>
              </>
            ))}
          </Col>
          <Col md={4} xs={12}>
            {footer1.map(({ footer1, footer_icon,cl }) => (
              <>
                <div className="footer_div">
                  {footer_icon}
                  <h6 className={cl}>{footer1}</h6>
                </div>
              </>
            ))}
          </Col>
       

          <Col xs={4}>
            <img className="footer_img"  src="https://www.qrstuff.com/images/default_qrcode.png" alt="" />
          </Col>

          <Col>
          <p  className="footer_p">Для заказов:</p>
          <p className="footer_tel">8 (8553) 40-20-12</p>
          <p className="footer_p">Контроль качества:</p>
          <p className="footer_tel">8 (8553) 40-20-11</p>
          <p className="footer_p">пн-чт   пт-сб  вс
</p>
          <p className="footer_tel">10:00 - 23:00</p>

          <div className="footer_salom_1">
            <InstagramIcon className="footer_salom_1_1"/>
            <TelegramIcon  className="footer_salom_1_2"/>
          </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
