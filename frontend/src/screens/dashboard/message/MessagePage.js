import { Button, ButtonGroup, Col, Form, ListGroup, Row, InputGroup, Image } from "react-bootstrap";
import { FaSearch, FaTelegramPlane } from "react-icons/fa";
import Map from '../../../assets/images/icons/map.svg';
import User from '../../../assets/images/icons/user.svg';
import Heart from '../../../assets/images/icons/heart-fill.svg';
import DetailImage from '../../../assets/images/building/5.webp';

function MessagePage() {
    return (
      <div className="MessagePage mt-2">
        <Row>
          <Col md={2} className="border-end user-list">
          <ButtonGroup className="border-gray bg-white p-2 w-100">
            <Button variant="secondary">My Offers</Button>
            <Button variant="secondary">My Bids</Button>
          </ButtonGroup>
            <div className="fs-5 fw-bold my-3">All Messages</div>
            <InputGroup className="mb-3 rounded border text-gray">
              <InputGroup.Text id="basic-addon1" className="bg-white border-0 text-gray"><FaSearch/></InputGroup.Text>
              <Form.Control
                placeholder="Search inbox"
                className="border-0"
              />
            </InputGroup>
            <div className="user-list-body">
              <div className="my-2 bg-white-custom p-2 rounded">
                <div className="d-flex align-items-content justify-content-between mb-2">
                  <div className="fw-semibold fs-6 text-red">Inquiry</div>
                  <small className="text-gray">7:11 PM</small>
                </div>
                <div className="fw-bold f-6 mb-2">0x20jsd...90b</div>
                <div><small className="text-gray mb-2">Hotel medio</small></div>
                <div><small className="text-gray mb-2">Feb 4 - Feb 6 (2 nights)</small></div>
                <div><small className="text-gray mb-2">2 guests - 2,000.00 SEI</small></div>               
                
              </div>
              <div className="my-2 bg-white-custom p-2 rounded">
                <div className="d-flex align-items-content justify-content-between mb-2">
                  <div className="fw-semibold fs-6 text-red">Inquiry</div>
                  <small className="text-gray">7:11 PM</small>
                </div>
                <div className="fw-bold f-6 mb-2">0x20jsd...90b</div>
                <div><small className="text-gray mb-2">Hotel medio</small></div>
                <div><small className="text-gray mb-2">Feb 4 - Feb 6 (2 nights)</small></div>
                <div><small className="text-gray mb-2">2 guests - 2,000.00 SEI</small></div>               
                
              </div>
              <div className="my-2 bg-white-custom p-2 rounded">
                <div className="d-flex align-items-content justify-content-between mb-2">
                  <div className="fw-semibold fs-6 text-red">Inquiry</div>
                  <small className="text-gray">7:11 PM</small>
                </div>
                <div className="fw-bold f-6 mb-2">0x20jsd...90b</div>
                <div><small className="text-gray mb-2">Hotel medio</small></div>
                <div><small className="text-gray mb-2">Feb 4 - Feb 6 (2 nights)</small></div>
                <div><small className="text-gray mb-2">2 guests - 2,000.00 SEI</small></div>               
                
              </div>
            </div>
          </Col>
          <Col md={7} className="border-end content-view position-relative">
            <div className="fs-5 fw-bold my-3 d-flex align-items-center justify-content-between">
              <div>0x20jsd...90b</div>
              <div className="d-flex align-items-center">
                <Image className="me-3" src={Map} width="30" height="30"/>
                <Image className="me-3" src={User} width="25" height="25"/>
                <Image src={Heart} width="30" height="30"/>
              </div>
            </div>
            <div className="Message-content p-3">
              <div className="text-center text-gray my-3">Jan 11, 2023</div>
              <div className="bg-white-custom  p-2 rounded my-3">Inquiry sent : 2 guests, Feb 4 -  Feb 6</div>
              <div className="chat-body w-75 my-3">
                <div className="d-flex align-items-center">
                  <div className="fs-6 fw-bold me-2">0x20jsd...90b</div>
                  <div className="text-gray"> 07 : 11 PM</div>
                </div>
                <div className="">Is this something that can be rented?</div>
              </div>
            </div>
            <div className="position-absolute bottom-0 mb-2 w-100">
              <div className="d-flex align-items-center">
              <Form.Group className="w-100 border-dark-purple" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Hello" />
              </Form.Group>
              <Button className="bg-white mx-4 px-4 text-dark-purple border-dark-purple fw-bold">Send</Button>
              </div>
            </div>
          </Col>
          <Col md={3} className="border-end content-detail">
            <div className="fs-5 fw-bold my-3">Reservation Details</div>
            <Image src={DetailImage} className="rounded w-100 mb-2" height="200" style={{objectFit : "cover"}}/>
            <div className="border-top py-2">
              <div className="fw-semibold text-gray mb-1">Inquiry</div>
              <div className="fw-bold mb-1">0x20jsd...90b asked about a trip</div>
              <div><small className="text-gray mb-2">Hotel medio</small></div>
                <div><small className="text-gray mb-2">Feb 4 - Feb 6 (2 nights)</small></div>
                <div><small className="text-gray mb-2">2 guests - 2,000.00 SEI</small></div>               
            </div>
            <div className="border-top py-2">
              <Button className="border-gray bg-white text-dark-purple fw-bold mb-2 w-100">Approve</Button>
              <Button className="border-gray bg-white text-dark-purple fw-bold w-100">Decline</Button>
            </div>
            <div className="border-top py-2">
              <div className="fs-5 fw-bold my-2">Booking Details</div>
              <div className="fs-6 fw-bold mb-1">Guests</div>
              <div className="text-gray pb-2 border-bottom"><small>2 adults</small></div>
              <div className="fs-6 fw-bold mb-1">Check-in</div>
              <div className="text-gray pb-2 border-bottom"><small>Sat, Feb 4th, 2023</small></div>
              <div className="fs-6 fw-bold mb-1">Checkout</div>
              <div className="text-gray pb-2 border-bottom"><small>Sat, Feb 6th, 2023</small></div>
              <div className="fw-semibold"><u>Show calendar</u></div>
            </div>
            <div className="border-top pt-2">
              <div className="fs-5 fw-bold my-2">Potential Earnings</div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="text-gray">1000 SEI X 2 nights</span>
                <span className="text-gray">4000 SEI</span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="text-gray">Service fee (host)</span>
                <span className="text-gray">-60 SEI</span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="text-gray">Total (SEI)</span>
                <span className="fw-bold">3940 SEI</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  
  export default MessagePage;
  