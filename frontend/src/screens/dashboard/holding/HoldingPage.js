import { Card, Image, Tabs, Tab, Form, InputGroup, Row, } from "react-bootstrap";
import SEIIcon from '../../../assets/images/crypto/sei.svg';
import SolanaIcon from '../../../assets/images/crypto/solana.svg';
import { MyNFTCard } from "../../../components/card/card";
import { FaSearch } from "react-icons/fa";

function HoldingPage() {
  return (
    <div className="HoldingPage mt-2">
      <div className="fs-4 fw-bold mb-3">Top Performing</div>
      <Card className="mb-3">
        <Card.Body className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image src={SEIIcon} className="me-3" width="50" />
            <div>
              <div className="fs-6 fw-bold">SEI Network</div>
              <div className="text-gray">SEI</div>
            </div>
          </div>
          <div className="">
            <div className="text-success"><small>+0.80%</small></div>
            <div className="">SEI 524.24</div>
          </div>
        </Card.Body>
      </Card>
      <Tabs
        defaultActiveKey="nfts"
        id="uncontrolled-tab-example"
        className="mt-5"
      >
        <Tab eventKey="nfts" title="My NFTs">
          <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
            <div className="SearchPropertiesBar position-absolute ">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                <Form.Control
                  placeholder="Search NFT"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <Row>
              <MyNFTCard />
              <MyNFTCard />
              <MyNFTCard />
              <MyNFTCard />
            </Row>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default HoldingPage;
