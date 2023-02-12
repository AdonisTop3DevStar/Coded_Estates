import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Col,
  Form,
  Image,
  InputGroup,
  Row,
  Table
} from "react-bootstrap";
import BuildingImage from "../../../assets/images/building/1.webp";
import { SecondPrimaryBtn } from "../../../components/button/Buttons";
import { TraitCard1 } from "../../../components/card/card";
import { DetailData } from "../../../utils/data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  FaHeart,
  FaShareAlt,
  FaExclamationCircle,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
} from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function PropertiesDetail() {
  return (
    <div className="PropertiesDetail">
      <div className="fs-4 fw-bold">Properties Detail</div>
      <div className="fs-6 opacity-50 mb-3">
        Welcome to Coede Estate Property Admin
      </div>
      <div className="fs-5 fw-bold mb-2">70 Washington Street #9G</div>
      <div className="d-flex align-items-center justify-content-between">
        <div className=""><u>70 Washington Street #9G</u></div>
        <div className="d-flex align-items-center">
          <Link className="nav-link opacity-50"><AiOutlineUpload className="me-2"/>Share</Link>
          <Link className="nav-link ms-4 opacity-50"><AiOutlineHeart className="me-2"/>Save</Link>
        </div>
      </div>
      <div className="NFTGallary">
        
      </div>
      <Row className="BidTable my-2">
        <Col sm={12} md={8}>
          <div className="fs-5 fw-bold">Bid</div>
          <div className="opacity-50 mb-2">Highest Bid : <strong>520 SEI</strong></div>
          <Table hover responsive className="w-100">
            <thead className="w-100">
              <tr className="w-100">
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="my-2">
        <Col sm={12} md={12}>

        </Col>
      </Row>
      <Row className="my-2">
        <Col sm={12} md={12}>
          
        </Col>
      </Row>
      <Row className="my-2">
        <Col sm={12} md={12}>
          
        </Col>
      </Row>
      <Row className="my-2">
        <Col sm={12} md={12}>
          
        </Col>
      </Row>
    </div>
  );
}
