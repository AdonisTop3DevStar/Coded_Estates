import { useState } from "react";
import { Button, Col, Container, Nav, Row, Modal, Image, Tab, ButtonGroup  } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import React from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";
import LocationImg1 from '../../assets/images/location/world.jpg';
import LocationImg2 from '../../assets/images/location/europe.jpg';
import LocationImg3 from '../../assets/images/location/turkey.jpg';
import LocationImg4 from '../../assets/images/location/southeast_asia.jpg';
import LocationImg5 from '../../assets/images/location/thailand.jpg';
import LocationImg6 from '../../assets/images/location/south_america.jpg';
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { FaMinus, FaPlus } from "react-icons/fa";


export const SearchBar = () => {
  const [locationShow, setLocationShow] = useState(false);
  const [timeShow, setTimeShow] = useState(false);
  const [guestShow, setGuestShow] = useState(false);

  const [location, setLocation] = useState('');
  const [minDate, setMinDate] = useState(new Date());

  const locationData = [
    { value: "World", image: LocationImg1, title: "I'm flexible" },
    { value: "Europe", image: LocationImg2, title: "Europe" },
    { value: "Turkey", image: LocationImg3, title: "Turkey" },
    { value: "Southeast Asia", image: LocationImg4, title: "Southeast Asia" },
    { value: "Thailand", image: LocationImg5, title: "Thailand" },
    { value: "South America", image: LocationImg6, title: "South America" },
  ];

  return (
    <div className="SearchBar border-bottom">
      <Container className="d-flex justify-content-center">
        <div className="my-3 p-2 border rounded-5 d-flex align-items-center">
          <div className="py-1 px-3 fw-bold border-end cursor-pointer" onClick={() => (setLocationShow(true))}>Anywhere</div>
          <div className="py-1 px-3 fw-bold border-end cursor-pointer" onClick={() => (setTimeShow(true))}>Any Week</div>
          <div className="py-1 px-3 fw-semibold cursor-pointer" onClick={() => (setGuestShow(true))}>Add Guests</div>
          <Button className="round-btn d-flex p-2" onClick={() => (setLocationShow(true))}><FaSearch /></Button>
        </div>
      </Container>

      <Modal show={locationShow} onHide={() => setLocationShow(false)} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className="p-3">
          <Modal.Title>Search by region</Modal.Title>
          <Row>
            <Col xs={4} sm={4} md={4} className="my-2">
              <Image src={LocationImg1} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("World"); setLocationShow(false) }} />
              <div className="">I'm flexible</div>
            </Col>
            <Col xs={4} sm={4} md={4} className="my-2">
              <Image src={LocationImg2} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("Europe"); setLocationShow(false) }} />
              <div className="">Europe</div>
            </Col>
            <Col xs={4} sm={4} md={4} className="my-2">
              <Image src={LocationImg3} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("Turkey"); setLocationShow(false) }} />
              <div className="">Turkey</div>
            </Col>
            <Col xs={4} sm={4} md={4} className="my-2">
              <Image src={LocationImg4} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("Southeast Asia"); setLocationShow(false) }} />
              <div className="">Southeast Asia</div>
            </Col>
            <Col xs={4} sm={4} md={4} className="my-2">
              <Image src={LocationImg5} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("Thailand"); setLocationShow(false) }} />
              <div className="">Thailand</div>
            </Col>
            <Col xs={4} sm={4} md={4} className="my-2">
              <Image src={LocationImg6} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("South America"); setLocationShow(false) }} />
              <div className="">South America</div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal show={timeShow} onHide={() => setTimeShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
             <div className="d-flex align-item-center justify-content-center">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Choose dates</Nav.Link>
                  </Nav.Item>
                </Nav>
             </div>      

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Calendar
                    range
                    numberOfMonths={2}
                    minDate={minDate}
                  />
                </Tab.Pane>
              </Tab.Content>              
            </Row>
          </Tab.Container>
        </Modal.Body>
      </Modal>

      <Modal show={guestShow} onHide={() => setGuestShow(false)} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
          <div className="d-flex align-items-center justify-content-between my-2 guest-stepper border-bottom">
            <div className="guest-content">
              <div className="guest-title">Adults</div>
              <p className="guest-condition">Ages 13 or above</p>  
            </div>
            <div className="stepper">
              <ButtonGroup className="align-items-center ">
                <Button><FaMinus/></Button>
                <span className="px-3">1</span>
                <Button ><FaPlus/></Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between my-2 guest-stepper border-bottom">
            <div className="guest-content">
              <div className="guest-title">Children</div>
              <p className="guest-condition">Ages 2-12</p>  
            </div>
            <div className="stepper">
              <ButtonGroup className="align-items-center ">
                <Button><FaMinus/></Button>
                <span className="px-3">1</span>
                <Button ><FaPlus/></Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between my-2 guest-stepper border-bottom">
            <div className="guest-content">
              <div className="guest-title">Infants</div>
              <p className="guest-condition">Under 2</p>  
            </div>
            <div className="stepper">
              <ButtonGroup className="align-items-center ">
                <Button><FaMinus/></Button>
                <span className="px-3">1</span>
                <Button ><FaPlus/></Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between my-2 guest-stepper">
            <div className="guest-content">
              <div className="guest-title">Pets</div>
              <p className="guest-condition fw-bold">Bringing a service animal?</p>  
            </div>
            <div className="stepper">
              <ButtonGroup className="align-items-center ">
                <Button><FaMinus/></Button>
                <span className="px-3">1</span>
                <Button ><FaPlus/></Button>
              </ButtonGroup>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
