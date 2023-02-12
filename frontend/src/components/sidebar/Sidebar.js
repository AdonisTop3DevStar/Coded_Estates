import { Container, Image, ButtonGroup, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashboardIcon from '../../assets/images/icons/dashboard.svg';
import PropertiesIcon from '../../assets/images/icons/properties.svg';
import MessageIcon from '../../assets/images/icons/messages.svg';
import FavoritesIcon from '../../assets/images/icons/heart.svg';
import ActivityIcon from '../../assets/images/icons/stopwatch.svg';
import OffersIcon from '../../assets/images/icons/dollar.svg';
import RewardsIcon from '../../assets/images/icons/gift.svg';
import HoldingIcon from '../../assets/images/icons/hand.svg';
import Logo from '../../assets/images/Logo-white.svg';
import { RoundedMainBtn } from "../button/Buttons";

const NavListItem = ({icon, title, link}) => {
  return (
    <Link to={link} className="nav-link my-4 d-flex align-items-center">
      <Image src={icon} width="25" height="25"/><span className="fs-5 fw-semibold ms-3">{title}</span>
    </Link>
  )
}

const NavListData = [
  {title : "Dashboard", link : "/dashboard/overview", icon : DashboardIcon},
  {title : "My Properties", link : "/dashboard/properties", icon : PropertiesIcon},
  {title : "Messages", link : "/dashboard/message", icon : MessageIcon},
  {title : "Favorites", link : "/dashboard/favorite", icon : FavoritesIcon},
  {title : "Activity", link : "/dashboard/activity", icon : ActivityIcon},
  {title : "My Rewards", link : "/dashboard/rewards", icon : RewardsIcon},
  {title : "My Holdings", link : "/dashboard/holding", icon : HoldingIcon},
  {title : "Transactions", link : "/dashboard/transactions", icon : OffersIcon},
];

const RentalNavListData = [
  {title : "Dashboard", link : "/dashboard/overview", icon : DashboardIcon},
  {title : "My Properties", link : "/dashboard/properties", icon : PropertiesIcon},
  {title : "Messages", link : "/dashboard/message", icon : MessageIcon},
  {title : "Favorites", link : "/dashboard/favorite", icon : FavoritesIcon},
  {title : "Activity", link : "/dashboard/activity", icon : ActivityIcon},
  {title : "My Rewards", link : "/dashboard/rewards", icon : RewardsIcon},
  {title : "My Holdings", link : "/dashboard/holding", icon : HoldingIcon},
  {title : "Transactions", link : "/dashboard/transactions", icon : OffersIcon},
  {title : "My Trips", link : "/dashboard/transactions", icon : OffersIcon},
  {title : "Reservations", link : "/dashboard/transactions", icon : OffersIcon},
  {title : "Reviews", link : "/dashboard/transactions", icon : OffersIcon},
];

export default function Sidebar() {
  

    return (
      <div className="Sidebar position-relative">
        <Container className="">
          <div className="Sidebar-Navlist">            
            {
              NavListData.map((item, idx) => (
                <NavListItem icon={item.icon} title={item.title} link={item.link} key={idx}/>
              ))
            }
          </div>
            {/* <Card className="position-absolute bottom-0 mb-3 bg-dark-purple text-white">
              <Card.Body>
                <Image src={Logo}/>
                <Button className="round-btn bg-light">Switch</Button>      
              </Card.Body>
            </Card> */}
        </Container>
      </div>
    );
  }