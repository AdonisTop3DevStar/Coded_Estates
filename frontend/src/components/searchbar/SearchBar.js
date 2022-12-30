import { Button, Col, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <div className="SearchBar border-bottom">
      <Form className="w-75 mx-auto py-3">
        <Row className="rounded-pill justify-content-center border align-items-center">
          <Col xs={12} sm={12} md={3} className="house-type">
            <Form.Group className="my-1 d-flex align-items-center justify-content-end" controlId="exampleForm.ControlInput1">
              <Form.Label>House Type : </Form.Label>
              <Form.Select aria-label="Default select example" className="border border-0 rounded-0 border-end border-2">
                <option value="1">All</option>
                <option value="2">Apartment</option>
                <option value="3">Mansion</option>
                <option value="4">Farm</option>
                <option value="5">TownHouse</option>
                <option value="6">Cabin</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={2}>
            <Form.Group className="my-1" controlId="exampleForm.ControlInput1">
              <Form.Select aria-label="Default select example" className="border border-0 rounded-0 border-end border-2">
                <option value="1">All</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={2}>
            <Form.Group className="my-1" controlId="exampleForm.ControlInput1">
              <Form.Select aria-label="Default select example" className="border border-0 rounded-0 border-end border-2">
                <option value="1">All</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={2}>
            <Form.Group className="my-1" controlId="exampleForm.ControlInput1">
              <Form.Select aria-label="Default select example" className="border border-0 rounded-0 border-end border-2">
                <option value="1">All</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={2}>
            <Form.Group className="my-1" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter address or city or pin code" className="border border-0"/>
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={1} className="d-flex align-items-center justify-content-center">
            <Button type="submit" className="rounded-circle d-flex align-items-center justify-content-center p-2"><FaSearch/></Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
