import { Row, Col, Button, Image, Form } from "react-bootstrap";
import { NormalCard } from "../../components/card/card";
import { BuySearchBar } from "../../components/searchbar/SearchBar";
import { buyPageData } from "../../utils/data";
import { FaMap } from "react-icons/fa";
import { GoogleMapElement } from "../../components/map/map";
import FilterIcon from '../../assets/images/icons/filter.svg';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { sampleData } from "../../utils/sampledata";
import EmptyImg from '../../assets/images/empty.png';
import {store} from '../../configs/Store';


function BuyPage() {

  const [keyWord, setKeyWord] = useState('');
  const [type, setType] = useState('');
  const [bed, setBed] = useState('');
  const [bath, setBath] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [data, setData] = useState([]);
  const findProperties = (type, keyWord, bed, size, price, bath) => {
    
    if (type === '' && keyWord === '' && bed === '' && size === '' && price === '' && bath === "") {
      let tempData = [];
      for(let i = 0; i < sampleData.length; i++) {
        const _data = {
          "zpid": sampleData[i].zpid,
          "address": sampleData[i].address,
          "bedrooms": sampleData[i].bedrooms,
          "bathrooms": sampleData[i].bathrooms,
          "price": sampleData[i].price,
          "homeStatus": "FOR_SALE",
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
      if (keyWord !== "") {
        result = result.filter( obj => obj.address.state == keyWord.toUpperCase());
      }
      
      if (type !== "") {
        if(type === "all") {
          result = result.filter( obj => obj.homeType !== "");
        } else {
          result = result.filter( obj => obj.homeType == type.toUpperCase());
        }
      }
      
      if (bed !== "") {
        if (bed == 4) {
          result = result.filter( obj => obj.bedrooms >= bed);
        }
        else {
          if (bed == 0) {
            result = result.filter( obj => obj.bedrooms != "");
          }
          else {
            result = result.filter( obj => obj.bedrooms == bed);
          }
        }
      }

      if (bath !== "") {
        if (bath === 4) {
          result = result.filter( obj => obj.bathrooms >= bath);
        }
        else {
          if (bath == 0) {
            result = result.filter( obj => obj.bathrooms != "");
            console.log("bath",result)
          }
          else {
            result = result.filter( obj => obj.bathrooms == bath);
            console.log("bath1",result)
          }
        }
      }
      
      if (size !== "") {

        if(size === "s1") {
          result = result.filter( obj => obj.livingArea <= 500);
        } else if (size === "s2") {
          result = result.filter( obj => obj.livingArea <= 1000);
        } else if (size === "s3") {
          result = result.filter( obj => obj.livingArea <= 1500);
        } else if (size === "s4") {
          result = result.filter( obj => obj.livingArea <= 5000);
        } else if (size === 0){
          result = result.filter( obj => obj.livingArea != "");
        }

      }
      
      if (price !== "") {
        if(price === "p1") {
          result = result.filter( obj => obj.price <= 20000);
        } else if (price === "p2") {
          result = result.filter( obj => obj.price <= 50000);
        } else if (price === "p3") {
          result = result.filter( obj => obj.price <= 100000);
        } else if (price === "p4") {
          result = result.filter( obj => obj.price <= 1000000);
        } else if (price === 0){
          result = result.filter( obj => obj.price != "");
        }
      }
      setData(result);
      return;
    }
  };


  useEffect(() => {
    findProperties(type, keyWord, bed, size, price, bath);
  }, [type, bed, size, price, bath])
  
  useEffect(() => {
    findProperties(type, keyWord, bed, size, price, bath);
  }, [])

  console.log(type, keyWord, bed, size, price, bath);
  

  return (
    <div className="BuyPage position-relative" style={{ marginTop: "81px" }}>
      <div className="BuySearchBar  border-bottom py-2">
        <div className="w-75 mx-auto rounded-5 border d-flex align-items-center justify-content-between p-1">
          <Button className="bg-purple rounded-circle border-purple p-2 d-flex align-items-center"><Image src={FilterIcon} width="25" height="25" /></Button>
          <div className="fs-6 fw-bold">House Type :</div>
          <div className="">
            <Form.Select aria-label="Default select example" className="border-0 fw-bold text-end" value={type} onChange={(e) => setType(e.target.value)}>
              <option>Select Type</option>
              <option value="all">All</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="tea">Tea</option>
              <option value="boat">Boat</option>
              <option value="cabin">Cabin</option>
              <option value="camper">Camper</option>
              <option value="casa">Casa</option>
              <option value="castle">Castle</option> 
              <option value="cave">Cave</option>
              <option value="container">Container</option>
              <option value="cycladic">Cycladic</option>
              <option value="dammuso">Dammuso</option>              
            </Form.Select>
          </div>|
          <div className="">
            <Form.Select aria-label="Default select example" className="border-0 fw-bold text-end" value={bed} onChange={(e) => setBed(e.target.value)}>
              <option value="0">Select Bedroom</option>
              <option value="1">1 bedroom</option>
              <option value="2">2 bedrooms</option>
              <option value="3">3 bedrooms</option>
              <option value="4">4+ bedrooms</option>
            </Form.Select>
          </div>|
          <div className="">
            <Form.Select aria-label="Default select example" className="border-0 fw-bold text-end" value={bath} onChange={(e) => setBath(e.target.value)}>
              <option value="0">Select Bathroom</option>
              <option value="1">1 bathroom</option>
              <option value="2">2 bathrooms</option>
              <option value="3">3 bathrooms</option>
              <option value="4">4+ bathrooms</option>
            </Form.Select>
          </div>|
          <div className="">
            <Form.Select aria-label="Default select example" className="border-0 fw-bold text-end" value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="0">Select size</option>
              <option value="s1">300 - 500 sq ft</option>
              <option value="s2">500 - 1000 sq ft</option>
              <option value="s3">1000 - 1500 sq ft</option>
              <option value="s4">1500 - 5000 sq ft</option>
            </Form.Select>
          </div>|
          <div className="">
            <Form.Select aria-label="Default select example" className="border-0 fw-bold text-end" value={price} onChange={(e) => setPrice(e.target.value)}>
              <option value="0">Select price</option>
              <option value="p1">$10K ~ $20K</option>
              <option value="p2">$30K ~ $50K</option>
              <option value="p3">$60K ~ $100K</option>
              <option value="p4">$120K ~ $1000K</option>
            </Form.Select>
          </div>|
          <div className="">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter address or city" className="border-0" onChange={(e) => setKeyWord(e.target.value)} value={keyWord} />
            </Form.Group>
          </div>
          <Button className="bg-purple rounded-circle border-purple p-2 d-flex align-items-center fs-4" onClick={() => findProperties(type, keyWord, bed, size, price, bath)}><FaSearch /></Button>
        </div>
      </div>
      <small className="my-5 pt-2">Over {data.length} homes within map area</small>
      {data.length > 0 ? (
        <Row className="Search-result mt-2" style={{minHeight:"81.5vh"}}>
        {     
          data.map((item, idx) => (
            <Col xs={12} sm={12} md={2}>
              <NormalCard key={item.idx} title={item?.address?.city + " , " + item?.address?.state} network={item?.currency} price={item?.price} bed={item?.bedrooms} bath={item?.bathrooms} size={item?.size} images={item?.photos} />
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
      
      <Button className="round-btn position-ablsolute show-map-btn px-4">Show Map<FaMap className="ms-2" /></Button>
    </div>
  );
}

export default BuyPage;
