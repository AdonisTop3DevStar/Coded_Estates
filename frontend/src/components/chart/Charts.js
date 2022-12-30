import { Card, Col, Image, Row } from "react-bootstrap";
import BuildingIcon from "../../assets/images/icons/building.svg";
import Chart from "react-apexcharts";
import { ChartData } from "../../utils/data";

export const MintedPropertiesChart = () => {
  return (
    <div className="MintedPropertiesChart">
      <Card>
        <Card.Body>
          <div className="fs-6 fw-bold mb-2">Overview</div>
          <Row>
            <Col sm={12} md={6} className="d-flex align-items-center">
              <div className="p-2 border border-1 rounded-1 me-3">
                <Image src={BuildingIcon} />
              </div>
              <div>
                <div className="opacity-75">Total Sell</div>
                <div className="fw-bold">3452 Unit</div>
              </div>
            </Col>
            <Col sm={12} md={6} className="d-flex align-items-center">
              <div className="p-2 border border-1 rounded-1 me-3">
                <Image src={BuildingIcon} />
              </div>
              <div>
                <div className="opacity-75">Total Sell</div>
                <div className="fw-bold">3452 Unit</div>
              </div>
            </Col>
            <Chart
              options={ChartData.options}
              series={ChartData.series}
              type="area"
              height="260"
            />
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
