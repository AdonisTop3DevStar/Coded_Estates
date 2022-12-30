import { Col, Row } from "react-bootstrap";
import { MintCard, MintedPropertiesCard, StartCard, UploadCard, VerifyCard } from "../../../components/card/card";
import { MintedPropertiesChart } from "../../../components/chart/Charts";
import { ActivityTable } from "../../../components/table/tables";

function OverviewPage() {
    return (
      <div className="OverviewPage mt-2">
        <div className="fs-4 fw-bold">Dashboard</div>
        <div className="fs-6 opacity-50">Welcome to Coede Estate Property Admin</div>
       
        <Row>
          <Col sm={12} md={3}>
          <div className="my-2 fs-5 fw-bold">Verify Wallet</div>
            <VerifyCard/>
            <UploadCard/>
          </Col>
          <Col sm={12} md={3}>
          <div className="my-2 fs-5 fw-bold">Mint New Real Estate</div>
            <MintCard/>
          </Col>
          <Col sm={12} md={6}>
          <div className="my-2 fs-5 fw-bold">Minted Properties</div>
            <MintedPropertiesCard/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <div className="my-2 fs-5 fw-bold">Minted Properties</div>
            <MintedPropertiesChart/>
          </Col>
          <Col sm={12} md={6}>
            <div className="my-2 fs-5 fw-bold">Activity</div>
            <ActivityTable/>
          </Col>
        </Row>
      </div>
    );
  }
  
  export default OverviewPage;
  