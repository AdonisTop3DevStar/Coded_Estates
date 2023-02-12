import { Accordion, Button, Col, Image, Row, Table } from "react-bootstrap";
import { DetailCarousel } from "../../components/carousel/Carousel";
import { GoogleMapElement } from "../../components/map/map";
import { DetailData } from "../../utils/data";
import { FaHeart, FaShareAlt, FaExclamationCircle, FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";
import { TraitCard } from "../../components/card/card";
import { useState } from "react";
import Img1 from '../../assets/images/building/4.webp';
import Icon1 from '../../assets/images/icons/swimming-pool.svg';
import Icon2 from '../../assets/images/icons/star-border.svg';
import Icon3 from '../../assets/images/icons/heart-outline.svg';

import Icon4 from '../../assets/images/icons/majesticons_flower-2-line.svg';
import Icon5 from '../../assets/images/icons/tools-kitchen.svg';
import Icon6 from '../../assets/images/icons/iconoir_desk.svg';
import Icon7 from '../../assets/images/icons/la_swimming-pool.svg';
import Icon8 from '../../assets/images/icons/mdi_smoke-detector-variant-off.svg';
import Icon9 from '../../assets/images/icons/healthicons_city-outline.svg';
import Icon10 from '../../assets/images/icons/wifi-high-bold.svg';
import Icon11 from '../../assets/images/icons/ph_car.svg';
import Icon12 from '../../assets/images/icons/mdi_smoke-detector-off-outline.svg';
import Icon13 from '../../assets/images/icons/ic_round-live-tv.svg';
import { Calendar, DateObject } from "react-multi-date-picker";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";



export function DetailPage () {
    const [minDate, setMinDate] = useState(new Date());
    return (
        <div className="DetailPage my-4 container">
           <div className="fs-5 fw-bold" >70 Wahington Street #9G</div>
           <div className="d-flex align-items-center justify-content-between my-2">
            <div className="">70 Wahington Street #9G</div>
            <div className="d-flex align-items-center">
                <span className="ms-5">Share</span>
                <span className="ms-5">Save</span>
            </div>
           </div>
           <Row>
            <DetailCarousel images={DetailData.images}/>
           </Row>
           <Row>
            <Col sm={12} md={7}>
                <div className="d-flex align-items-center justify-content-between my-2 border-bottom pb-2">
                    <div className="">
                        <div className="text-dark-purple fs-5 fw-semibold">Entire villa hosted by Bookiply</div>
                        <div className="text-gray mt-2"><small className="text-gray">5 guests • 3 bedrooms • 3beds • 2baths</small></div>
                    </div>
                    <Image src={Img1} width="50" height="50" className="rounded-circle"/>
                </div>
                <div className="my-2 border-bottom pb-2">
                    <div className="d-flex my-3">
                        <Image src={Icon1} className="me-3"/>
                        <div className="">
                            <div className="text-dark-purple fw-bold fs-5">Dive right in</div>
                            <small className="text-gray">This is one of the few place in the area with a pool.</small>
                        </div>
                    </div>
                    <div className="d-flex my-3">
                        <Image src={Icon2} className="me-3"/>
                        <div className="">
                            <div className="text-dark-purple fw-bold fs-5">Experienced host</div>
                            <small className="text-gray">Bookiply has 1429 reviews for other places</small>
                        </div>
                    </div>
                    <div className="d-flex my-3">
                        <Image src={Icon3} className="me-3"/>
                        <div className="">
                            <div className="text-dark-purple fw-bold fs-5">Highly rated Host</div>
                            <small className="text-gray">Bookily has recieved 5-star ratings from 100% of recent guests.</small>
                        </div>
                    </div>
                </div>
                <div className="my-2 border-bottom pb-2">
                    <Image src="" />
                    <p className="text-gray">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                    <p className="text-dark-purple fw-semibold">Learn more</p>
                </div>
                <div className="my-2 border-bottom pb-2">
                    <p className="text-gray">The new Villa Goyen - The View House impresses with its exclusive location and the unique panoramic views of the surrounding mountain panorama and the Merano valley basin. The large window areas, the elegant sun terraces with glass balustrade and the modern Desgin make the mansion Goyen an exclusive vacation domicile, which fulfills highest requirements at cosiness, comfort and situation.
                    200m² living space, 400m² garden, sun terrace and roof terrace with floating bed.
                    3 suites all with terrace.</p>
                    <p className="text-dark-purple fw-semibold">how more > </p>
                </div>
                <div className="my-2 border-bottom pb-2">
                    <div className="text-dark-purple fs-5 fw-semibold mb-3">What this place offers</div>
                    <Col sm={12} md={10} className="row">
                        <Col sm={12} md={6}>  
                            <div className="d-flex align-items-center my-2">
                                <Image src={Icon4} width="25" className="me-2"/>
                                <div className="text-gray">Garden view</div>
                            </div>
                            <div className="d-flex align-items-center my-2">
                                <Image src={Icon5} width="25" className="me-2"/>
                                <div className="text-gray">Kitchen</div>
                            </div>
                            <div className="d-flex align-items-center my-2">
                                <Image src={Icon6} width="25" className="me-2"/>
                                <div className="text-gray">Dedicated workspace</div>
                            </div>
                            <div className="d-flex align-items-center my-2">
                                <Image src={Icon7} width="25" className="me-2"/>
                                <div className="text-gray">Pool</div>
                            </div>
                            <div className="d-flex align-items-center my-2">
                                <Image src={Icon8} width="25" className="me-2"/>
                                <div className="text-gray">Smoke alarm</div>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>  
                            <div className="d-flex align-items-center my-2">
                                <Image src={Icon9} width="25" className="me-2"/>
                                <div className="text-gray">City skyline view</div>
                            </div>
                            <div className="d-flex align-items-center my-2">
                                <Image src={Icon10} width="25" className="me-2"/>
                                <div className="text-gray">Wifi</div>
                            </div>
                            <div className="d-flex align-items-center my-2">
                                <Image src={Icon11} width="25" className="me-2"/>
                                <div className="text-gray">Free parking on premiese</div>
                            </div>
                            <div className="d-flex align-items-center my-2">
                                <Image src={Icon12} width="25" className="me-2"/>
                                <div className="text-gray">Carbon monoxide alarm</div>
                            </div>
                            <div className="d-flex align-items-center my-2">
                                <Image src={Icon13} width="25" className="me-2"/>
                                <div className="text-gray">TV</div>
                            </div>
                        </Col>
                    </Col>
                </div>
                <div className="my-2 border-bottom pb-2">
                    <div className="text-dark-purple fs-5 fw-semibold mb-3">27 night in Schenna</div>
                    <Calendar
                    range
                    numberOfMonths={2}
                    minDate={minDate}
                    plugins={[
                        <Footer
                          position="top"
                          format="MMM DD"
                          names={{
                            selectedDates: "",
                            from: "Departure date:",
                            to: "Return date:",
                            selectDate: "select",
                            close: "Close",
                            separator: ",",
                          }}
                        />,
                      ]}
                  />
                </div>
            </Col>
            <Col sm={12} md={5}></Col>
           </Row>
           <Row className="my-2 border-bottom py-2">
                <div className="text-dark-purple fs-5 fw-semibold mb-3">No review (yet  )</div>
                <div className="d-flex align-items-center my-2">
                    <Image src={Icon3} width="25" className="me-2 opacity-50"/>
                    <div className="text-gray">This host has 1,429 reviews for other places to stay. Show other reviews</div>
                </div>
           </Row>
           <Row className="my-2 border-bottom py-2">
                <div className="text-dark-purple fs-5 fw-semibold mb-3">Where you'll be</div>
           </Row>
           <Row className="my-2 border-bottom py-2">

           </Row>
        </div>
    )
}