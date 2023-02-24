import {
  Col,
  Image,
  Row,
  Button,
  Card,
  Form,
  Dropdown
} from "react-bootstrap";
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
import GalleryImg1 from '../../../assets/images/building/10.webp';
import GalleryImg2 from '../../../assets/images/building/3.webp';
import GalleryImg3 from '../../../assets/images/building/4.webp';
import GalleryImg4 from '../../../assets/images/building/5.webp';
import GalleryImg5 from '../../../assets/images/building/6.webp';
import SEI from '../../../assets/images/crypto/sei.svg';
import Star from '../../../assets/images/icons/star.svg';
import Check from '../../../assets/images/icons/check.svg';
import Logo from '../../../assets/images/Logo.svg';
import { FaAngleLeft } from "react-icons/fa";
import { store } from "../../../configs/Store";

export default function PropertiesDetail() {

  const [type, setType, updateType] = store.useState("DetailType");

  return (
    <div className="PropertiesDetail">
      <Link to="/dashboard/buy/properties" className="nav-link text-purple fw-bold fs-6 my-2"><FaAngleLeft className="me-2"/>Back</Link>
      <div className="fs-4 fw-bold">Properties Detail</div>
      <div className="fs-6 opacity-50 mb-3">
        Welcome to Coede Estate Property Admin
      </div>
      <div className="fs-5 fw-bold mb-2">70 Washington Street #9G</div>
      <div className="d-flex align-items-center justify-content-between">
        <div className=""><u>70 Washington Street #9G</u></div>
        <div className="d-flex align-items-center">
          <Link className="nav-link opacity-50"><AiOutlineUpload className="me-2" />Share</Link>
          <Link className="nav-link ms-4 opacity-50"><AiOutlineHeart className="me-2" />Save</Link>
        </div>
      </div>
      <div className="NFTGallary my-3 border-bottom pb-3">
        <div className="d-flex align-items-center justify-content-between gap-2 rounded overflow-hidden">
          <div className="w-50 overflow-hidden" style={{height:'500px'}}><Image src={GalleryImg4} width="100%" style={{objectFit:"cover", cursor: 'pointer'}}/></div>
          <div className="w-50 overflow-hidden" style={{height:'500px'}}>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
              <div className="w-50 overflow-hidden" style={{height:'250px'}}><Image src={GalleryImg2} width="100%"  style={{objectFit:"cover", cursor: 'pointer'}}/></div>
              <div className="w-50 overflow-hidden" style={{height:'250px'}}><Image src={GalleryImg3} width="100%"  style={{objectFit:"cover", cursor: 'pointer'}}/></div>              
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
              <div className="w-50 overflow-hidden" style={{height:'250px'}}><Image src={GalleryImg1} width="100%"  style={{objectFit:"cover", cursor: 'pointer'}}/></div>
              <div className="w-50 overflow-hidden" style={{height:'250px'}}><Image src={GalleryImg5} width="100%"  style={{objectFit:"cover", cursor: 'pointer'}}/></div>              
            </div>
          </div>
        </div>
      </div>
      <Row className="my-2">
        <Col sm={12} md={8}>
         <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
          <div className="">
            <div className="fw-semibold fs-5 mb-3">Entire villa hosted by Bookiply</div>
            <div className="d-flex align-items-center text-gray">
              <small className="me-2">5 guests</small>
              <small className="me-2">3 bedrooms</small>
              <small className="me-2">3 beds</small>
              <small className="me-2">3 baths</small>
            </div>
          </div>
          <Image src={GalleryImg3} width="80" height="80" className="rounded-circle"/>
         </div>
         <div className="border-bottom pb-3">
          <div className="d-flex my-2">
            <Image src={Star} width="25" height="25"/>
            <div className="">
              <div className="fw-semibold fs-6 mb-2">Dive right in</div>
              <div className="text-gray">this is one of the few places in the area with a pool.</div>
            </div>
          </div>
          <div className="d-flex my-2">
            <Image src={Star} width="25" height="25"/>
            <div className="">
              <div className="fw-semibold fs-6 mb-2">Experienced host</div>
              <div className="text-gray">Bookiply has 1429 reviews for other places</div>
            </div>
          </div>
          <div className="d-flex my-2">
            <Image src={Star} width="25" height="25"/>
            <div className="">
              <div className="fw-semibold fs-6 mb-2">Dive right in</div>
              <div className="text-gray">Booliply has revieved 5-star ratings from 100% of recent guest.</div>
            </div>
          </div>
         </div>
         <div className="border-bottom pb-3">
          <Image src={Logo} className="mt-3"/>
          <div className="my-3 text-gray">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</div>
          <div className="text-dark-purple">Learn more</div>
         </div>
         <div className="border-bottom py-3">
            <div className="text-gray">The new Villa Goyen - The View House impresses with its exclusive location and the unique panoramic views of the surrounding mountain panorama and the Merano valley basin. The large window areas, the elegant sun terraces with glass balustrade and the modern Desgin make the mansion Goyen an exclusive vacation domicile, which fulfills highest requirements at cosiness, comfort and situation. 200m² living space, 400m² garden, sun terrace and roof terrace with floating bed. 3 suites all with terrace.</div>
            <div className="text-dark-purple"><u>Show more</u></div>
          </div>
          <div className="border-bottom py-3">
            <div className="fw-semibold fs-5 mb-3">What this place offers</div>
            <Row>
              <Col sm={12} md={10} className="row">
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1"/><span className="text-gray">Garden view</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1"/><span className="text-gray">City skyline view</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1"/><span className="text-gray">Kitchen</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1"/><span className="text-gray">Wifi</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1"/><span className="text-gray">Dedicated workspace</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1"/><span className="text-gray">Free parking on premiese</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1"/><span className="text-gray">Pool</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1"/><span className="text-gray">Carbon monoxide alarm</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1"/><span className="text-gray">Smoke alarm</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1"/><span className="text-gray">TV</span></Col>         
              </Col>
            </Row>
            <Button className="text-dark-purple bg-white border-gray fw-bold mt-3">Show all 41 amenities</Button>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <Card className="shadow">
          {type == "verify" && (
            <Card.Body>
              <div className="fs-6 fw-semibold mb-2">Highest Bid : <span className="fw-bold fs-5">520 SEI</span></div>
              <div className="fs-6 fw-semibold mb-2">Bid Price</div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder="Enter your Bid Price" />
              </Form.Group>              
              <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Make an Offer</Button>
              <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Send Message</Button>
              <Button className="text-dark-purple bg-white border-dark-purple fs-5 fw-bold w-100 my-2">Unlist</Button>
              <div className="my-3 text-gray text-center">You will not be charged yet. You will be required to sign a message from your wallet to confirm the reservation</div>
            </Card.Body>
          )}
          {type == "listing" && (
            <Card.Body>
              <div className="fs-6 fw-semibold mb-2">Property Listing Details</div>
              <div className="border rounded">
                <Dropdown>
                  <label className="ms-2 fw-middle">CURRENCY</label>
                  <Dropdown.Toggle className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple" id="dropdown-basic">
                    <div className="d-flex align-items-center">
                      <Image src={SEI} width="30" className="me-2"/><span>SEI</span>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100">
                    <Dropdown.Item className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple">
                    <div className="d-flex align-items-center">
                      <Image src={SEI} width="30" className="me-2"/><span>SEI</span>
                    </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple">
                    <div className="d-flex align-items-center">
                      <Image src={SEI} width="30" className="me-2"/><span>SEI</span>
                    </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="border-top">
                  <label className="ms-2 fw-middle" muted>PRICE</label>  
                  <Form.Control
                    type="number"
                    id="inputPassword5"
                    placeholder="125,000,000"
                    className="border-0"
                  />
                </div>
              </div>            
              <div className="d-flex align-items-center justify-content-between my-3">
                <div className="f-semibold">Allow Bids</div>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between my-3">
                <div className="f-semibold">Min. Price</div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>
              <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Edit Price</Button>
              <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Unlist Property</Button>
            </Card.Body>
          )}
          {type == "bid" && (
            <Card.Body>
              <div className="fs-6 fw-semibold mb-2">Highest Bid : <span className="fw-bold fs-5">520 SEI</span></div>
              <div className="fs-6 fw-semibold mb-2">Bid Price</div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder="Enter your Bid Price" />
              </Form.Group>              
              <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Update Bid Price</Button>
              <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Send Message</Button>
              <Button className="text-dark-purple bg-white border-dark-purple fs-5 fw-bold w-100 my-2">Cancel</Button>
              <Button className="text-dark-purple bg-white border-dark-purple fs-5 fw-bold w-100 my-2">Unlist</Button>
              <div className="my-3 text-gray text-center">You will not be charged yet. You will be required to sign a message from your wallet to confirm the reservation</div>
            </Card.Body>
          )}
          </Card>
        </Col>
      </Row>
      <Row className="my-2 border-bottom pb-3">
        <Col sm={12} md={12}>
          <div className="fs-5 fw-bold">Bid</div>
          <div className="opacity-50 mb-2">Highest Bid : <strong>520 SEI</strong></div>
          <div className="BidTable mx-2">
            <Row className="table-header border py-3 rounded mb-2">
              <Col sm={3} md={3}><strong>Bid Price</strong></Col>
              <Col sm={4} md={4}><strong>From</strong></Col>
              <Col sm={3} md={3}><strong>Bid Date</strong></Col>
              <Col sm={2} md={2}><strong> </strong></Col>
            </Row>
            <div className="table-body">
              <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                <Col sm={3} md={3}>
                  <div className="d-flex align-items-center">
                    <Image src={SEI}/>
                    <div className="ms-3">
                      <div className="fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} md={4}>Ox20jsd...900b</Col>
                <Col sm={3} md={3}><small>2 days ago</small></Col>
                <Col sm={2} md={2} className="text-end">
                  <Button className="bg-white border-gray text-gray">Message</Button>
                  <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                </Col>
              </Row>
              <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                <Col sm={3} md={3}>
                  <div className="d-flex align-items-center">
                    <Image src={SEI}/>
                    <div className="ms-3">
                      <div className="fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} md={4}>Ox20jsd...900b</Col>
                <Col sm={3} md={3}><small>2 days ago</small></Col>
                <Col sm={2} md={2} className="text-end">
                  <Button className="bg-white border-gray text-gray">Message</Button>
                  <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                </Col>
              </Row>
              <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                <Col sm={3} md={3}>
                  <div className="d-flex align-items-center">
                    <Image src={SEI}/>
                    <div className="ms-3">
                      <div className="fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} md={4}>Ox20jsd...900b</Col>
                <Col sm={3} md={3}><small>2 days ago</small></Col>
                <Col sm={2} md={2} className="text-end">
                  <Button className="bg-white border-gray text-gray">Message</Button>
                  <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                </Col>
              </Row>
              <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                <Col sm={3} md={3}>
                  <div className="d-flex align-items-center">
                    <Image src={SEI}/>
                    <div className="ms-3">
                      <div className="fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} md={4}>Ox20jsd...900b</Col>
                <Col sm={3} md={3}><small>2 days ago</small></Col>
                <Col sm={2} md={2} className="text-end">
                  <Button className="bg-white border-gray text-gray">Message</Button>
                  <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                </Col>
              </Row>
              <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                <Col sm={3} md={3}>
                  <div className="d-flex align-items-center">
                    <Image src={SEI}/>
                    <div className="ms-3">
                      <div className="fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} md={4}>Ox20jsd...900b</Col>
                <Col sm={3} md={3}><small>2 days ago</small></Col>
                <Col sm={2} md={2} className="text-end">
                  <Button className="bg-white border-gray text-gray">Message</Button>
                  <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                </Col>
              </Row>
              <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                <Col sm={3} md={3}>
                  <div className="d-flex align-items-center">
                    <Image src={SEI}/>
                    <div className="ms-3">
                      <div className="fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} md={4}>Ox20jsd...900b</Col>
                <Col sm={3} md={3}><small>2 days ago</small></Col>
                <Col sm={2} md={2} className="text-end">
                  <Button className="bg-white border-gray text-gray">Message</Button>
                  <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                </Col>
              </Row>
              <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                <Col sm={3} md={3}>
                  <div className="d-flex align-items-center">
                    <Image src={SEI}/>
                    <div className="ms-3">
                      <div className="fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} md={4}>Ox20jsd...900b</Col>
                <Col sm={3} md={3}><small>2 days ago</small></Col>
                <Col sm={2} md={2} className="text-end">
                  <Button className="bg-white border-gray text-gray">Message</Button>
                  <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                </Col>
              </Row>
              <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                <Col sm={3} md={3}>
                  <div className="d-flex align-items-center">
                    <Image src={SEI}/>
                    <div className="ms-3">
                      <div className="fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} md={4}>Ox20jsd...900b</Col>
                <Col sm={3} md={3}><small>2 days ago</small></Col>
                <Col sm={2} md={2} className="text-end">
                  <Button className="bg-white border-gray text-gray">Message</Button>
                  <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                </Col>
              </Row>
              <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                <Col sm={3} md={3}>
                  <div className="d-flex align-items-center">
                    <Image src={SEI}/>
                    <div className="ms-3">
                      <div className="fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} md={4}>Ox20jsd...900b</Col>
                <Col sm={3} md={3}><small>2 days ago</small></Col>
                <Col sm={2} md={2} className="text-end">
                  <Button className="bg-white border-gray text-gray">Message</Button>
                  <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                </Col>
              </Row>
              <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                <Col sm={3} md={3}>
                  <div className="d-flex align-items-center">
                    <Image src={SEI}/>
                    <div className="ms-3">
                      <div className="fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </Col>
                <Col sm={4} md={4}>Ox20jsd...900b</Col>
                <Col sm={3} md={3}><small>2 days ago</small></Col>
                <Col sm={2} md={2} className="text-end">
                  <Button className="bg-white border-gray text-gray">Message</Button>
                  <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                </Col>
              </Row>
            </div>
          </div>          
        </Col>
      </Row>
      <Row className="my-2 border-bottom pb-3">
        <Col sm={12} md={12}>
          <div className="fs-5 fw-bold mb-3">No reviews (yet)</div>
          <div className="d-flex">
            <AiOutlineHeart className="mt-1"/>
            <div className="opacity-50 ms-2">This host has 1,429 reviews for other places<br/>to stay. <strong className=""><u>Show other reviews</u></strong></div>
          </div>
        </Col>
      </Row>
      <Row className="my-2 border-bottom pb-3">
        <Col sm={12} md={12}>
          <div className="fs-5 fw-bold">Where you'll be</div>
          <div className="opacity-50 mb-2">Schenna, Italy</div>
          <iframe className="w-100 rounded" style={{height:"600px"}} src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"></iframe>
        </Col>
      </Row>
      <div className="">
        <Row className="my-2 border-bottom pb-3 pt-3">
            <div className="d-flex align-items-center">
              <Image src={GalleryImg1} width="80" height="80" className="rounded-circle"/>
              <div className="ms-3">
                <div className="fw-semibold fs-5 mb-2">Hosted by Bookiply</div>
                <div className="text-gray">Joined in April 2018</div>
              </div>
            </div>
          <Col sm={12} md={6} className="my-2">
            <div className="d-flex align-items-center">
              <div className="text-dark-purple d-flex align-items-center me-5">
                <Image src={Star} className="me-3" width="25" height="25"/>
                <div>1,429 Reviews</div>
              </div>
              <div className="text-dark-purple d-flex align-items-center">
                <Image src={Check} className="me-3" width="25" height="25"/>
                <span>Identify verified</span>
              </div>
            </div>
            <div className="text-gray mt-3">DE<br/>Mit Bookiply finden Sie ganz einfach Ihre perfekte Ferienunterkunft. Eine schöne Villa mit Meerblick auf Sardinien? Ein gemütliches Apartment am Gardasee oder ein Chalet in…<span className="ms-2 text-dark-purple"><u>read me</u></span></div>
          </Col>
          <Col sm={12} md={6}>
            <div className="text-gray mb-2">Languages: Nederlands, English, Français, Deutsch, Ελληνικά, Italiano, Português, Español</div>
            <div className="text-gray mb-2">Response rate : 100%</div>
            <div className="text-gray mb-2">Response time : within an hour</div>
            <Button className="border-gray bg-white text-dark-purple">
              Contact Host
            </Button>
          </Col>
        </Row>        
      </div>
    </div>
  );
}
