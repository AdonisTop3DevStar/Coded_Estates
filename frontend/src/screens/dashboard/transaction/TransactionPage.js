import { Image, Table } from "react-bootstrap";
import BuildingImage from '../../../assets/images/building/1.webp';
import SEIIcon from '../../../assets/images/crypto/sei.svg';
import TypeIcon from '../../../assets/images/icons/type.svg';


function TransactionPage() {
    return (
      <div className="ActivityPage mt-2">
        <div className="fs-4 fw-bold">Activity</div>
        <div className="fs-6 opacity-50">Welcome to Coede Estate Property Admin</div>
        <div className="activity-datatable mt-5">
          <Table stripe>
            <thead>
              <tr className="opacity-50">
                <th className="py-3 align-middle">Property</th>
                <th className="py-3 align-middle">Type</th>
                <th className="py-3 align-middle">Price (SEI)</th>
                <th className="py-3 align-middle">From</th>
                <th className="py-3 align-middle">To</th>
                <th className="py-3 align-middle">Date</th>
                <th className="py-3 align-middle">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="rounded-2 align-middle">
                <td className="border-bottom-0 ">
                  <Image src={BuildingImage} width="90" height="50" className="rounded-1 me-3 border-bottom-0"/>
                  <span className="fw-bold">Kent Avenue #310</span>
                </td>
                <td className="text-start border-bottom-0 py-3">
                  <div className="d-flex align-items-center">
                    <Image src={TypeIcon} className="me-3"/>
                    <div>
                      <div className="fs-6 fw-bold text-purple">Buy</div>
                      <div className="text-gray">01:39 PM</div>
                    </div>
                  </div>
                </td>
                <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                    <Image src={SEIIcon} className="me-3"/>
                    <div>
                      <div className="fs-6 fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </td>
                <td className="text-start border-bottom-0 py-3">Ox20jsd...90b</td>
                <td className="text-start border-bottom-0 py-3">Oxa0jsd...as9</td>
                <td className="text-start border-bottom-0 py-3 text-gray">3 mins ago</td>
                <td className="text-start border-bottom-0 py-3 fs-6 fw-bold">Pending</td>
              </tr>
              <tr className="rounded-2 align-middle">
                <td className="border-bottom-0 ">
                  <Image src={BuildingImage} width="90" height="50" className="rounded-1 me-3 border-bottom-0"/>
                  <span className="fw-bold">Kent Avenue #310</span>
                </td>
                <td className="text-start border-bottom-0 py-3">
                  <div className="d-flex align-items-center">
                    <Image src={TypeIcon} className="me-3"/>
                    <div>
                      <div className="fs-6 fw-bold text-purple">Buy</div>
                      <div className="text-gray">01:39 PM</div>
                    </div>
                  </div>
                </td>
                <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                    <Image src={SEIIcon} className="me-3"/>
                    <div>
                      <div className="fs-6 fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </td>
                <td className="text-start border-bottom-0 py-3">Ox20jsd...90b</td>
                <td className="text-start border-bottom-0 py-3">Oxa0jsd...as9</td>
                <td className="text-start border-bottom-0 py-3 text-gray">3 mins ago</td>
                <td className="text-start border-bottom-0 py-3 fs-6 fw-bold">Pending</td>
              </tr>
              <tr className="rounded-2 align-middle">
                <td className="border-bottom-0 ">
                  <Image src={BuildingImage} width="90" height="50" className="rounded-1 me-3 border-bottom-0"/>
                  <span className="fw-bold">Kent Avenue #310</span>
                </td>
                <td className="text-start border-bottom-0 py-3">
                  <div className="d-flex align-items-center">
                    <Image src={TypeIcon} className="me-3"/>
                    <div>
                      <div className="fs-6 fw-bold text-purple">Buy</div>
                      <div className="text-gray">01:39 PM</div>
                    </div>
                  </div>
                </td>
                <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                    <Image src={SEIIcon} className="me-3"/>
                    <div>
                      <div className="fs-6 fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </td>
                <td className="text-start border-bottom-0 py-3">Ox20jsd...90b</td>
                <td className="text-start border-bottom-0 py-3">Oxa0jsd...as9</td>
                <td className="text-start border-bottom-0 py-3 text-gray">3 mins ago</td>
                <td className="text-start border-bottom-0 py-3 fs-6 fw-bold">Pending</td>
              </tr>
              <tr className="rounded-2 align-middle">
                <td className="border-bottom-0 ">
                  <Image src={BuildingImage} width="90" height="50" className="rounded-1 me-3 border-bottom-0"/>
                  <span className="fw-bold">Kent Avenue #310</span>
                </td>
                <td className="text-start border-bottom-0 py-3">
                  <div className="d-flex align-items-center">
                    <Image src={TypeIcon} className="me-3"/>
                    <div>
                      <div className="fs-6 fw-bold text-purple">Buy</div>
                      <div className="text-gray">01:39 PM</div>
                    </div>
                  </div>
                </td>
                <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                    <Image src={SEIIcon} className="me-3"/>
                    <div>
                      <div className="fs-6 fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </td>
                <td className="text-start border-bottom-0 py-3">Ox20jsd...90b</td>
                <td className="text-start border-bottom-0 py-3">Oxa0jsd...as9</td>
                <td className="text-start border-bottom-0 py-3 text-gray">3 mins ago</td>
                <td className="text-start border-bottom-0 py-3 fs-6 fw-bold">Pending</td>
              </tr>
              <tr className="rounded-2 align-middle">
                <td className="border-bottom-0 ">
                  <Image src={BuildingImage} width="90" height="50" className="rounded-1 me-3 border-bottom-0"/>
                  <span className="fw-bold">Kent Avenue #310</span>
                </td>
                <td className="text-start border-bottom-0 py-3">
                  <div className="d-flex align-items-center">
                    <Image src={TypeIcon} className="me-3"/>
                    <div>
                      <div className="fs-6 fw-bold text-purple">Buy</div>
                      <div className="text-gray">01:39 PM</div>
                    </div>
                  </div>
                </td>
                <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                    <Image src={SEIIcon} className="me-3"/>
                    <div>
                      <div className="fs-6 fw-bold">100</div>
                      <div className="text-gray">SEI</div>
                    </div>
                  </div>
                </td>
                <td className="text-start border-bottom-0 py-3">Ox20jsd...90b</td>
                <td className="text-start border-bottom-0 py-3">Oxa0jsd...as9</td>
                <td className="text-start border-bottom-0 py-3 text-gray">3 mins ago</td>
                <td className="text-start border-bottom-0 py-3 fs-6 fw-bold">Completed</td>
              </tr>
            </tbody>
          </Table>  
        </div>
      </div>
    );
  }
  
  export default TransactionPage;
  