import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashboardIcon from '../../assets/images/icons/dashboard.svg';
import PropertiesIcon from '../../assets/images/icons/properties.svg';
import MessageIcon from '../../assets/images/icons/messages.svg';
import FavoritesIcon from '../../assets/images/icons/heart.svg';
import ActivityIcon from '../../assets/images/icons/stopwatch.svg';
import OffersIcon from '../../assets/images/icons/dollar.svg';
import RewardsIcon from '../../assets/images/icons/gift.svg';
import HoldingIcon from '../../assets/images/icons/hand.svg';

const NavListItem = ({icon, title, link}) => {
  return (
    <Link to={link} className="nav-link my-4 d-flex align-items-center">
      <Image src={icon}/><span className="fs-5 fw-semibold ms-3">{title}</span>
    </Link>
  )
}

const NavListData = [
  {title : "Dashboard", link : "/dashboard/overview", icon : DashboardIcon},
  {title : "My Properties", link : "/dashboard/properties", icon : PropertiesIcon},
  {title : "Messages", link : "/dashboard/message", icon : MessageIcon},
  {title : "Favorites", link : "/dashboard/favorite", icon : FavoritesIcon},
  {title : "Activity", link : "/dashboard/activity", icon : ActivityIcon},
  {title : "Offers", link : "/dashboard/offers", icon : OffersIcon},
  {title : "My Rewards", link : "/dashboard/rewards", icon : RewardsIcon},
  {title : "My Holdings", link : "/dashboard/holding", icon : HoldingIcon},
];

export default function Sidebar() {
    return (
      <div className="Sidebar">
        <Container>
          <div className="Sidebar-Navlist">
            {
              NavListData.map((item, idx) => (
                <NavListItem icon={item.icon} title={item.title} link={item.link} key={idx}/>
              ))
            }
          </div>
        </Container>
      </div>
    );
  }