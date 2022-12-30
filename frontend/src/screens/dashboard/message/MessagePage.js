import { Button, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import { FaUserPlus, FaTelegramPlane } from "react-icons/fa";

function MessagePage() {
    return (
      <div className="MessagePage mt-2">
        <div className="fs-4 fw-bold">Message</div>
        <div className="fs-6 opacity-50">Welcome to Coede Estate Property Admin</div>
        <Row className="mt-5">
          <Col sm={12} md={3}>
            <Card>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                <Form.Group className="w-75" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Search for Address" />
                </Form.Group>
                <Button className="bg-white text-black border border-1 fs-5"><FaUserPlus/></Button>
                </div>
                <hr/>
                <ListGroup>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                  <ListGroup.Item>CMfoTg1x4ExVZ...CevJ23j</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={9}>
            <Card>
              <Card.Body>
                <div className="h-75 chat-body w-100 border mb-4 border-1 rounded-2">
                   
                </div>
                <div className="d-flex align-items-center justify-content-between">
                <Form.Group className="w-100" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Hello" />
                </Form.Group>
                <Button className="bg-white text-black border ms-4 border-1 fs-5"><FaTelegramPlane/></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
  
  export default MessagePage;
  