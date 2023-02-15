import { Col, Row, Modal, Card, Button, Image } from "react-bootstrap";
import { MintCard, MintedPropertiesCard, StartCard, UploadCard, VerifyCard } from "../../../components/card/card";
import { MintedPropertiesChart } from "../../../components/chart/Charts";
import { ActivityTable } from "../../../components/table/tables";
import VerifyMode from "../../../components/modal/VerifyMode";
import { useState } from "react";
import VerifyIcon from '../../../assets/images/icons/verify.svg';

function OverviewPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div className="OverviewPage mt-2">
        <div className="fs-4 fw-bold">Dashboard</div>
        <div className="fs-6 opacity-50">Welcome to Coede Estate Property Admin</div>
       
        <Row>
          <Col sm={12} md={3}>
          <div className="my-2 fs-5 fw-bold">Verify Wallet</div>
            <div className="VerifyCard my-1 mb-3">
              <Card>
                  <Card.Body className="d-flex align-items-center justify-content-between">
                      <div>
                          <div className="fs-5 fw-bold mb-2">Verify Identify</div>
                          <Button className="fw-bold px-4 py-2 rounded-5" onClick={handleShow}>Start</Button>
                      </div>
                      <div className="border border-2 rounded-circle p-2">
                          <Image src={VerifyIcon}/>
                      </div>
                  </Card.Body>
              </Card>
          </div>
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
        <Modal 
          show={show} 
          onHide={handleClose}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Body>
            <VerifyMode/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
  
  export default OverviewPage;
  