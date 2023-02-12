import { Container, Tab, Tabs, Row, InputGroup, Form } from "react-bootstrap";
import { BidPropertyCard, ListPropertyCard, PropertyInfoCard } from "../../../components/card/card";
import { FaSearch } from "react-icons/fa";

function PropertiesPage() {
    return (
      <div className="PropertiesPage my-2">
        <div className="fs-4 fw-bold">My Properties</div>
        <div className="fs-6 opacity-50">Welcome to Coede Estate Property Admin</div>
        <PropertyInfoCard/>
        <Tabs
          defaultActiveKey="verified"
          id="uncontrolled-tab-example"
          className="mt-5"
        >
          <Tab eventKey="verified" title="Verified NFTs">
            <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
              <div className="SearchPropertiesBar position-absolute ">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch/></InputGroup.Text>
                <Form.Control
                  placeholder="Search for Property"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              </div>
              <Row>
                <ListPropertyCard/>
                <ListPropertyCard/>
                <ListPropertyCard/>
                <ListPropertyCard/>
                <ListPropertyCard/>
                <ListPropertyCard/>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="unverified" title="Unverified NFTs">
            <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
            <div className="SearchPropertiesBar position-absolute ">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch/></InputGroup.Text>
                <Form.Control
                  placeholder="Search for Property"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              </div>
            <Row>
                <ListPropertyCard/>
                <ListPropertyCard/>
                <ListPropertyCard/>
                <ListPropertyCard/>
                <ListPropertyCard/>
                <ListPropertyCard/>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="listing" title="My Listings">
            <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
            <div className="SearchPropertiesBar position-absolute ">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch/></InputGroup.Text>
                <Form.Control
                  placeholder="Search for Property"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              </div>
              <Row>
                <BidPropertyCard/>
                <BidPropertyCard/>
                <BidPropertyCard/>
                <BidPropertyCard/>
                <BidPropertyCard/>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="bookings" title="My Bookings">
            <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
            <div className="SearchPropertiesBar position-absolute ">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch/></InputGroup.Text>
                <Form.Control
                  placeholder="Search for Property"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              </div>
            <Row>
                <BidPropertyCard/>
                <BidPropertyCard/>
                <BidPropertyCard/>
                <BidPropertyCard/>
                <BidPropertyCard/>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="notlisted" title="Not listed">
            <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
            <div className="SearchPropertiesBar position-absolute ">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch/></InputGroup.Text>
                <Form.Control
                  placeholder="Search for Property"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              </div>
            <Row>
                <BidPropertyCard/>
                <BidPropertyCard/>
                <BidPropertyCard/>
                <BidPropertyCard/>
                <BidPropertyCard/>
              </Row>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
  
  export default PropertiesPage;
  