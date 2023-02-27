import { Row, Col, Button, Image, Form } from "react-bootstrap";
import { NormalCard } from "../../components/card/card";
import { BuySearchBar } from "../../components/searchbar/SearchBar";
import { buyPageData } from "../../utils/data";
import { FaMap } from "react-icons/fa";
import { GoogleMapElement } from "../../components/map/map";
import FilterIcon from '../../assets/images/icons/filter.svg';
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { sampleData } from "../../utils/sampledata";


function BuyPage() {
  const [keyWord, setKeyWord] = useState('');
  return (
    <div className="BuyPage position-relative" style={{ marginTop: "81px" }}>
      <div className="BuySearchBar  border-bottom py-2">
        <div className="w-75 mx-auto rounded-5 border d-flex align-items-center justify-content-between p-1">
          <Button className="bg-purple rounded-circle border-purple p-2 d-flex align-items-center"><Image src={FilterIcon} width="25" height="25" /></Button>
          <div className="fs-6 fw-bold">House Type :</div>
          <div className="">
            <Form.Select aria-label="Default select example" className="border-0 fw-bold text-end">
              <option value="1">All</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>|
          <div className="">
            <Form.Select aria-label="Default select example" className="border-0 fw-bold text-end">
              <option value="1">1 bedroom, 1 bedroom</option>
              <option value="2">2 bedrooms, 2 bedrooms</option>
              <option value="3">3 bedrooms, 3 bedrooms</option>
              <option value="4">4 bedrooms, 4 bedrooms</option>
            </Form.Select>
          </div>|
          <div className="">
            <Form.Select aria-label="Default select example" className="border-0 fw-bold text-end">
              <option value="1">300 - 500 sq ft</option>
              <option value="1">500 - 1000 sq ft</option>
              <option value="1">1000 - 1500 sq ft</option>
              <option value="1">1500 - 5000 sq ft</option>
            </Form.Select>
          </div>|
          <div className="">
            <Form.Select aria-label="Default select example" className="border-0 fw-bold text-end">
              <option value="1">$10K ~ $20K</option>
              <option value="1">$30K ~ $50K</option>
              <option value="1">$60K ~ $100K</option>
              <option value="1">$120K ~ $1000K</option>
            </Form.Select>
          </div>|
          <div className="">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter address or city or pin code" className="border-0" onChange={(e) => setKeyWord(e.target.value)} value={keyWord} />
            </Form.Group>
          </div>
          <Button className="bg-purple rounded-circle border-purple p-2 d-flex align-items-center fs-4" onClick={()=>alert(keyWord)}><FaSearch /></Button>
        </div>
      </div>
      <small className="my-5 pt-2">Over {sampleData.length} homes within map area</small>
      {/* <Row className="Search-result mt-2">
        {
          buyPageData.map((item, idx) => (
            <Col xs={12} sm={12} md={2}>
              <NormalCard key={idx} title={item.title} network={item.network} price={item.price} images={item.images} />
            </Col>
          ))
        }
      </Row> */}
      <Row className="Search-result mt-2">
        {          
          sampleData.map((item, idx) => (
            <Col xs={12} sm={12} md={2}>
              <NormalCard key={item.idx} title={item.address.city + " , " + item.address.state} network={item.currency} price={item.price} bed={item.bedrooms} bath={item.bathrooms} size={item.livingArea} images={item.photos} />
            </Col>
          ))
        }
      </Row>
      <Button className="round-btn position-ablsolute show-map-btn px-4">Show Map<FaMap className="ms-2" /></Button>
    </div>
  );
}

export default BuyPage;
