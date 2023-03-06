import { Row, Col, Button, Image, Modal, Container, Nav, Tab, ButtonGroup } from "react-bootstrap";
import { NormalRentCard } from "../../components/card/card";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { buyPageData } from "../../utils/data";
import { FaMap } from "react-icons/fa";
import { GoogleMapElement } from "../../components/map/map";
import { rentSampleData, sampleData } from "../../utils/sampledata";
import {useState, useEffect} from 'react';
import EmptyImg from '../../assets/images/empty.png';
import { Calendar, DateObject } from "react-multi-date-picker";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";
import LocationImg1 from '../../assets/images/location/world.jpg';
import LocationImg2 from '../../assets/images/location/europe.jpg';
import LocationImg3 from '../../assets/images/location/turkey.jpg';
import LocationImg4 from '../../assets/images/location/southeast_asia.jpg';
import LocationImg5 from '../../assets/images/location/thailand.jpg';
import LocationImg6 from '../../assets/images/location/south_america.jpg';
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import FilterIcon from '../../assets/images/icons/filter.svg';


function RentPage() {
  const [data, setData] = useState([]);
  const [locationShow, setLocationShow] = useState(false);
  const [timeShow, setTimeShow] = useState(false);
  const [guestShow, setGuestShow] = useState(false);
  const [dates, setDates] = useState([])

  const [location, setLocation] = useState('');
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const locationData = [
    { value: "World", image: LocationImg1, title: "I'm flexible" },
    { value: "Europe", image: LocationImg2, title: "Europe" },
    { value: "Turkey", image: LocationImg3, title: "Turkey" },
    { value: "Asia", image: LocationImg4, title: "Southeast Asia" },
    { value: "Thailand", image: LocationImg5, title: "Thailand" },
    { value: "America", image: LocationImg6, title: "South America" },
  ];

  const findProperties = (location, minDate, maxDat, adult, children, infants, pets) => {
    if (location === '' && minDate === '' && maxDate === '' && adult === 0 && children === 0 && infants === 0 && pets === 0) {
      let tempData = [];
      for(let i = 0; i < sampleData.length; i++) {
        const _data = {
          "zpid": sampleData[i].zpid,
          "address": sampleData[i].address,
          "bedrooms": sampleData[i].bedrooms,
          "bathrooms": sampleData[i].bathrooms,
          "price": sampleData[i].price,
          "homeStatus": "RENT",
          "livingArea": 1123,
          "size" : sampleData[i].livingArea,
          "currency": "SEI",
          "homeType": "CONDO",
          "photos": sampleData[i].photos,  
        };
        tempData.push(_data);
      }
      setData(tempData)
    }
    else {
      let result = sampleData;
      if (location !== "") {
        if(location === "world") {
          result = result.filter( obj => obj.address.area !== '');
        }
        else {
          result = result.filter( obj => obj.address.area == location.toUpperCase());
        }
      }
      
      if (minDate !== "" && maxDate !== "") {
          result =  result.filter( obj => minDate >= obj.livingArea <= maxDate);
          console.log("result1",result)
      }
      
      if (adult !== 0) {
        result = result.filter( obj => obj.guest.adults == adult);
        console.log("result2",result)
      }
      
      if (children !== 0) {
        result = result.filter( obj => obj.guest.childrens == children);
        console.log("result3",result)
      }
      
      if (infants !== 0) {
        result = result.filter( obj => obj.guest.infants == infants);
        console.log("result4",result)
      }
      
      if (pets !== 0) {
        result = result.filter( obj => obj.guest.pets == pets);
        console.log("result5",result)
      }
      console.log("resultt",result)
      setData(result);
      return
    }
  };


  useEffect(() => {
    findProperties(location, minDate, maxDate, adult, children, infants, pets);
  }, [location, minDate, maxDate, dates, adult, children, infants, pets])
  
  useEffect(() => {
    findProperties(location, minDate, maxDate, adult, children, infants, pets);
  }, []);
 
    return (
      <div className="BuyPage position-relative" style={{marginTop:"81px"}}>
        <div className="SearchBar border-bottom">
          <Container className="d-flex justify-content-center">
            <div className="my-3 p-2 border rounded-5 d-flex align-items-center">
              <div className="py-1 px-3 fw-bold border-end cursor-pointer" onClick={() => (setLocationShow(true))}>Anywhere</div>
              <div className="py-1 px-3 fw-bold border-end cursor-pointer" onClick={() => (setTimeShow(true))}>Any Week</div>
              <div className="py-1 px-3 fw-semibold cursor-pointer" onClick={() => (setGuestShow(true))}>Add Guests</div>
              <Button className="round-btn d-flex p-2" onClick={() => ( findProperties(location, minDate, maxDate, adult, children, infants, pets))}><FaSearch /></Button>
            </div>
          </Container>

          <Modal show={locationShow} onHide={() => setLocationShow(false)} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body className="p-3">
              <Modal.Title>Search by region</Modal.Title>
              <Row>
                <Col xs={4} sm={4} md={4} className="my-2">
                  <Image src={LocationImg1} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("world");  setLocationShow(false) }} />
                  <div className="">I'm flexible</div>
                </Col>
                <Col xs={4} sm={4} md={4} className="my-2">
                  <Image src={LocationImg2} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("Europe");  setLocationShow(false) }} />
                  <div className="">Europe</div>
                </Col>
                <Col xs={4} sm={4} md={4} className="my-2">
                  <Image src={LocationImg3} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("Turkey");  setLocationShow(false) }} />
                  <div className="">Turkey</div>
                </Col>
                <Col xs={4} sm={4} md={4} className="my-2">
                  <Image src={LocationImg4} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("Asia");  setLocationShow(false) }} />
                  <div className="">Southeast Asia</div>
                </Col>
                <Col xs={4} sm={4} md={4} className="my-2">
                  <Image src={LocationImg5} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("Thailand");  setLocationShow(false) }} />
                  <div className="">Thailand</div>
                </Col>
                <Col xs={4} sm={4} md={4} className="my-2">
                  <Image src={LocationImg6} className="rounded w-100 border cursor-pointer" onClick={() => { setLocation("America");  setLocationShow(false) }} />
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
                        rangeHover
                        numberOfMonths={2}
                        minDate={minDate}
                      />
                    </Tab.Pane>
                  </Tab.Content>              
                </Row>
              </Tab.Container>
              <div className="text-end">
                <Button className="border-dark-purple bg-white text-dark-purple px-3 me-2" onClick={()=> setTimeShow(false)}>Cancel</Button>
                <Button className="bg-dark-purple border-dark-purple text-white px-3" onClick={()=> setTimeShow(false)}>Search</Button>
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={guestShow} onHide={() => setGuestShow(false)} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>
              <div className="d-flex justify-content-end"><Button className="btn-close" onClick={()=> setGuestShow(false)}></Button></div>
              <div className="d-flex align-items-center justify-content-between my-2 guest-stepper border-bottom">
                <div className="guest-content">
                  <div className="guest-title">Adults</div>
                  <p className="guest-condition">Ages 13 or above</p>  
                </div>
                <div className="stepper">
                  <ButtonGroup className="align-items-center ">
                    <Button onClick={() => setAdult(adult - 1)}><FaMinus/></Button>
                    <span className="px-3">{adult}</span>
                    <Button onClick={() => setAdult(adult + 1)}><FaPlus/></Button>
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
                    <Button onClick={() => setChildren(children - 1)}><FaMinus/></Button>
                    <span className="px-3">{children}</span>
                    <Button onClick={() => setChildren(children + 1)}><FaPlus/></Button>
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
                    <Button onClick={() => setInfants(infants - 1)}><FaMinus/></Button>
                    <span className="px-3">{infants}</span>
                    <Button onClick={() => setInfants(infants + 1)}><FaPlus/></Button>
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
                    <Button onClick={() => setPets(pets - 1)}><FaMinus/></Button>
                    <span className="px-3">{pets}</span>
                    <Button onClick={() => setPets(pets + 1)}><FaPlus/></Button>
                  </ButtonGroup>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        {/* <SearchBar/> */}
        <small className="my-5 pt-2">Over {data.length} homes within map area</small>
        {data.length > 0 ? (
          <Row className="Search-result mt-2" style={{minHeight:"81.5vh"}}>
          {     
            data.map((item, idx) => (
              <Col xs={12} sm={12} md={2}>
                <NormalRentCard key={item.idx} title={item?.address?.city + " , " + item?.address?.state} network={item?.currency} price={item?.price} bed={item?.bedrooms} bath={item?.bathrooms} size={item?.size} images={item?.photos} />
              </Col>
            ))
          }
        </Row>
        ) : (
          <Row style={{minHeight:"81.5vh"}} className="d-flex align-items-center justify-content-center w-25 mx-auto">
            
            <div className="fs-5 fw-bold text-center">
            <Image src={EmptyImg} className="w-100 mb-2"/>
            <div>Don't have Result!</div>
            </div>
          </Row>
        )}
        <Button className="round-btn position-ablsolute show-map-btn px-4">Show Map<FaMap className="ms-2"/></Button>
      </div>
    );
  }
  
  export default RentPage;
  