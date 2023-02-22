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

export default function PropertiesDetail() {
  return (
    <div className="PropertiesDetail">
      <div className="fs-4 fw-bold">Properties Detail</div>
      <div className="fs-6 opacity-50">
        Welcome to Coede Estate Property Admin
      </div>
      <Row>
        <Col sm={12} md={3}>
          <Card className="mb-2">
            <Card.Body className="d-flex align-items-center">
              <Image
                src={BuildingImage}
                width="100"
                height="100"
                className="rounded-circle"
              />
              <div className="fw-bold ms-2">Kent Ave</div>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <div className="fs-5 fw-bold">Property Location</div>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <div className="fs-5 fw-bold">Properties</div>
              <Row>
                {DetailData.properties.map((item, idx) => (
                  <TraitCard1 title={item.title} key={idx} value={item.value} />
                ))}
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between">
                <div className="fs-5 fw-bold">History</div>
                <div className="border border-1 rounded-1 py-1 px-3">
                  Highest bid : 520 USD
                </div>
              </div>
              <div className="d-flex my-2 history-price-option align-items-center justify-content-between">
                <div className="opacity-50 text-center">
                  <div>Current Price</div>
                  <div>550 USD</div>
                </div>
                <ButtonGroup aria-label="Basic example">
                  <Button className="bg-white text-black fw-bold border-0">
                    Price (ETH)
                  </Button>
                  <Button className="bg-white text-black fw-bold border-0">
                    Update Price
                  </Button>
                  <Button className="bg-white text-black fw-bold border-0">
                    Unlist
                  </Button>
                </ButtonGroup>
              </div>
              <div className="history-datatable">
                <div className="d-flex history-datatable-item border my-1 border-1 rounded-1 p-1 align-items-center justify-content-between">
                  <div className="opacity-50 me-2">550 ETH</div>
                  <div className="opacity-50 me-2">0x9203..3202jaFc</div>
                  <div className="opacity-50 me-2">
                    <SecondPrimaryBtn title="message" />
                  </div>
                  <div className="opacity-100">
                    <SecondPrimaryBtn title="Accept" />
                  </div>
                </div>
                <div className="d-flex history-datatable-item border my-1 border-1 rounded-1 p-1 align-items-center justify-content-between">
                  <div className="opacity-50 me-2">550 ETH</div>
                  <div className="opacity-50 me-2">0x9203..3202jaFc</div>
                  <div className="opacity-50 me-2">
                    <SecondPrimaryBtn title="message" />
                  </div>
                  <div className="opacity-100">
                    <SecondPrimaryBtn title="Accept" />
                  </div>
                </div>
                <div className="d-flex history-datatable-item border my-1 border-1 rounded-1 p-1 align-items-center justify-content-between">
                  <div className="opacity-50 me-2">550 ETH</div>
                  <div className="opacity-50 me-2">0x9203..3202jaFc</div>
                  <div className="opacity-50 me-2">
                    <SecondPrimaryBtn title="message" />
                  </div>
                  <div className="opacity-100">
                    <SecondPrimaryBtn title="Accept" />
                  </div>
                </div>
                <div className="d-flex history-datatable-item border my-1 border-1 rounded-1 p-1 align-items-center justify-content-between">
                  <div className="opacity-50 me-2">550 ETH</div>
                  <div className="opacity-50 me-2">0x9203..3202jaFc</div>
                  <div className="opacity-50 me-2">
                    <SecondPrimaryBtn title="message" />
                  </div>
                  <div className="opacity-100">
                    <SecondPrimaryBtn title="Accept" />
                  </div>
                </div>
                <div className="d-flex history-datatable-item border my-1 border-1 rounded-1 p-1 align-items-center justify-content-between">
                  <div className="opacity-50 me-2">550 ETH</div>
                  <div className="opacity-50 me-2">0x9203..3202jaFc</div>
                  <div className="opacity-50 me-2">
                    <SecondPrimaryBtn title="message" />
                  </div>
                  <div className="opacity-100">
                    <SecondPrimaryBtn title="Accept" />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={9}>
          <Card>
            <Card.Body>
              <Image
                src={BuildingImage}
                className="rounded-2"
                width="100%"
                height="500"
              />
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div>
                  <div className="fs-5 fw-bold">Kent Avenue #310</div>
                  <div className="d-flex align-items-center">
                    <FaMapMarkerAlt className="text-danger me-2 mt-2" />
                    <div>Brooklyn, NY 11201</div>
                  </div>
                </div>
                <div>
                  <div>Price range</div>
                  <div className="fs-5 fw-bold">34215 USD</div>
                </div>
              </div>
              <div className="badge-section mt-3">
                <Badge className="me-3 bg-white text-black border border-1 rounded-1">
                  <FaBed />
                  <span className="ms-2">3 Bedroom</span>
                </Badge>
                <Badge className="me-3 bg-white text-black border border-1 rounded-1">
                  <FaBath />
                  <span className="ms-2">3 Bathroon</span>
                </Badge>
              </div>
              <div className="mt-3 p-2 border border-1 rounded-1 d-flex aling-items-center justify-content-between">
                <InputGroup className="my-1">
                  <Form.Control
                    placeholder="Enter Price"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1">USD</InputGroup.Text>
                </InputGroup>
                <InputGroup className="my-1">
                  <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                  <Form.Control
                    placeholder="0"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    className="text-end"
                  />
                </InputGroup>
                <SecondPrimaryBtn title="Cancel" />
              </div>
              <hr />
              <div className="fs-5 fw-bold">Description</div>
              <div className="opacity-50">
                New to the market! Remarkably spacious corner loft with
                incredible light, offers amazing views of New York Harbor, Lady
                Liberty, Freedom Tower, Manhattan Skyline, Brooklyn Bridge and
                Cadman Park. This condo is smartly laid out and designed with
                the highest quality finishes. Throughout this beautiful space,
                you will find sustainable bamboo floors, walls of over-sized
                windows,11ft vaulted ceilings, and a sleek open kitchen
                outfitted with top-of-the-line stainless steel appliances,
                Subzero, Bosch, granite countertops and white custom shaker
                style cabinets. New to the market! Remarkably spacious corner
                loft with incredible light, offers amazing views of New York
                Harbor, Lady Liberty, Freedom Tower, Manhattan Skyline, Brooklyn
                Bridge and Cadman Park. This condo is smartly laid out and
                designed with the highest quality finishes.
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
