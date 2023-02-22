import { Container, Tab, Tabs } from "react-bootstrap";
import { BidPropertyCard, ListPropertyCard, PropertyInfoCard } from "../../../components/card/card";


function PropertiesPage() {
    return (
      <div className="PropertiesPage my-2">
        <div className="fs-4 fw-bold">My Properties</div>
        <div className="fs-6 opacity-50">Welcome to Coede Estate Property Admin</div>
        <PropertyInfoCard/>
        <Tabs
          defaultActiveKey="properties"
          id="uncontrolled-tab-example"
          className="mt-5"
        >
          <Tab eventKey="properties" title="My Properties">
            <div className="PropertiesTabContent p-2 border row border-1 border-top-0">
              <ListPropertyCard/>
              <ListPropertyCard/>
              <ListPropertyCard/>
              <ListPropertyCard/>
              <ListPropertyCard/>
              <ListPropertyCard/>
            </div>
          </Tab>
          <Tab eventKey="listings" title="My Listings">
            <div className="PropertiesTabContent p-2 border border-1 border-top-0">
              sdfsdfsdff
            </div>
          </Tab>
          <Tab eventKey="bids" title="My Bids">
            <div className="PropertiesTabContent row p-2 border border-1 border-top-0">
              <BidPropertyCard/>
              <BidPropertyCard/>
              <BidPropertyCard/>
              <BidPropertyCard/>
              <BidPropertyCard/>
            </div>
          </Tab>
          <Tab eventKey="offers" title="My Offers">
            <div className="PropertiesTabContent p-2 border border-1 border-top-0">
              sdfsdfsdff
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
  
  export default PropertiesPage;
  