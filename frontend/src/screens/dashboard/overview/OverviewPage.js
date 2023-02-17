import { Col, Row, Modal, Card, Button, Image } from "react-bootstrap";
import { MintCard, MintedPropertiesCard, StartCard, UploadCard, VerifyCard } from "../../../components/card/card";
import { MintedPropertiesChart } from "../../../components/chart/Charts";
import { ActivityTable } from "../../../components/table/tables";
import VerifyMode from "../../../components/modal/VerifyMode";
import { useState } from "react";
import VerifyIcon from '../../../assets/images/icons/verify.svg';
import SwitchIcon from '../../../assets/images/icons/switch.svg';
import CheckIcon from '../../../assets/images/icons/check-circle.svg';
import MintIcon from '../../../assets/images/icons/mint.svg';
import Logo from '../../../assets/images/Logo.svg';
import {store} from '../../../configs/Store';


function OverviewPage() {
  const [show, setShow] = useState(false);
  const [mode, setMode, updateMode] = store.useState('Mode');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleValue = () => {
    setMode(mode => {
      mode = !mode;
      return mode;
    });
  }
  return (
    <div className="OverviewPage mt-2">
      <div className="fs-4 fw-bold">Dashboard</div>
      <div className="fs-6 opacity-50">Welcome to Coede Estate Property Admin</div>

      <Row>
        <Col sm={12} md={3}>
          <div className="my-2 fs-5 fw-bold">Choose Dashboard</div>
          <Card className="shadow">
            <Card.Body className="text-center">
              <Image src={SwitchIcon} width="100" height="100" className="my-5" />
              <div className="text-center">
                <Button className='border border-gray rounded-5 bg-white fw-bold fs-6 text-dark-purple py-2 px-4' onClick={toggleValue}>Switch</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3}>
          <div className="my-2 fs-5 fw-bold">Verify Wallet</div>
          <Card className="shadow">
            <Card.Body className="text-center">
              <Image src={CheckIcon} width="100" height="100" className="my-5" />
              <div className="text-center">
                <Button className='border border-gray rounded-5 bg-white fw-bold fs-6 text-dark-purple py-2 px-4'>Confirm ID</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <div className="my-2 fs-5 fw-bold">Minted Properties</div>
          <MintedPropertiesCard />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <div className="my-2 fs-5 fw-bold mt-5">Minted New Real Estate</div>
          <Card className="shadow">
            <Card.Body className="text-center">
              <Image src={MintIcon} width="100" height="100" className="my-5" />
              <div className="text-center">
                <Button className='border border-gray rounded-5 bg-white fw-bold fs-6 text-dark-purple py-2 px-5 mt-5'>Mint</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <div className="my-2 fs-5 fw-bold mt-5">Verify NFTS</div>
          <Card className="shadow">
            <Card.Body className="text-center">
              <Image src={CheckIcon} width="100" height="100" className="my-5" />
              <div className="text-center">
                <Button className='border border-gray rounded-5 bg-white fw-bold fs-6 text-dark-purple py-2 px-5 mt-5' onClick={handleShow}>Verify</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header className="d-flex align-items-center justify-content-between">
          <Image src={Logo} height="50" />
          <Button className="border-gray rounded-5 border bg-white text-dark-purple" onClick={handleClose}>Save & exit</Button>
        </Modal.Header>
        <Modal.Body>
          <VerifyMode />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default OverviewPage;
