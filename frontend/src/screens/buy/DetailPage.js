import { Accordion, Button, Col, Row, Table } from "react-bootstrap";
import { DetailCarousel } from "../../components/carousel/Carousel";
import { GoogleMapElement } from "../../components/map/map";
import { DetailData } from "../../utils/data";
import { FaHeart, FaShareAlt, FaExclamationCircle, FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";
import { TraitCard } from "../../components/card/card";

export function DetailPage () {
    return (
        <div className="DetailPage my-4">
            <Row className="align-items-center">
                <Col xs={12} sm={12} md={6}>
                    <DetailCarousel images={DetailData.images}/>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="fs-2 fw-bold">{DetailData.title}</div>
                        <div className="d-flex align-items-center justify-content-end">
                            <div className="opacity-50 ms-5"><FaHeart className="me-2"/>{DetailData.social.favorite}</div>
                            <div className="opacity-50 ms-5"><FaShareAlt className="me-2"/>{DetailData.social.share}</div>
                            <div className="opacity-50 ms-5"><FaExclamationCircle className="me-2"/>{DetailData.social.report}</div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-4">
                        <div>
                            <div className="fs-5"><FaMapMarkerAlt className="me-3"/><span>{DetailData.location}</span></div>
                            <div className="fs-5"><FaBed className="me-3"/><span>{DetailData.bedroom} Bedroom</span></div>
                            <div className="fs-5"><FaBath className="me-3"/><span>{DetailData.bathroom} Bathroon</span></div>
                            <div className="fs-4 fw-semibold mt-5">Current Price</div>
                            <div className="fs-3 fw-bold">{DetailData.price} {DetailData.network}</div>                            
                        </div>
                        <div></div>
                    </div>
                    <Row>
                        <Col md={6}><Button className="w-100 secondPrimaryBtn fs-4 fw-bold">Contact Seller</Button></Col>
                        <Col md={6}><Button className="w-100 fs-4 fw-bold">Make an Offer</Button></Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6}>
                    <div className="fs-5 fw-bold mb-3">Description of Property</div>
                    <div className="">{DetailData.description}</div>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <div className="fs-5 fw-bold mb-3">Description of Property</div>                    
                    <Accordion defaultActiveKey="0" className="mb-3">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><strong>Traits of Property</strong></Accordion.Header>
                            <Accordion.Body className="row">                                
                            {
                                DetailData.properties.map((item, idx) => (
                                    <TraitCard title={item.title} key={idx} value={item.value}/>
                                ))
                            }
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><strong>Details</strong></Accordion.Header>
                            <Accordion.Body>
                                {
                                    DetailData.details.map((item, idx) => (
                                        <div className="d-flex align-items-center justify-content-between my-2 opacity-75">
                                            <div>{item.title}</div>
                                            <div>{item.value}</div>
                                        </div>
                                    ))
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <div className="fs-5 fw-bold mt-3">History</div>
                <Table striped>
                    <thead>
                        <tr>
                        <th className="my-2 py-3">Type</th>
                        <th className="my-2 py-3">Price</th>
                        <th className="my-2 py-3">From</th>
                        <th className="my-2 py-3">To</th>
                        <th className="my-2 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DetailData.history.map((item, idx) => (
                                <tr>
                                <td className="my-2 py-3">{item.type}</td>
                                <td className="my-2 py-3">{item.price}</td>
                                <td className="my-2 py-3">{item.from}</td>
                                <td className="my-2 py-3">{item.to}</td>
                                <td className="my-2 py-3">{item.date}</td>
                                </tr> 
                            ))
                        }                        
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}