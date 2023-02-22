import { Container, Image, ButtonGroup, Button, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
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
import { useState } from "react";
import {store} from '../../configs/Store';
import createSwitch,{ deleteSwitch } from 'switch-button'
import 'switch-button/dist/index.css'

const NavListItem = ({icon, title, link}) => {
  return (
    <NavLink to={link} className="nav-link my-4 d-flex align-items-center">
      <Image src={icon} width="25" height="25"/><span className="fs-5 fw-semibold ms-3">{title}</span>
    </NavLink>
  )
}

const NavListData = [
  {title : "Dashboard", link : "/dashboard/overview", icon : DashboardIcon},
  {title : "My Properties", link : "/dashboard/buy/properties", icon : PropertiesIcon},
  {title : "Messages", link : "/dashboard/buy/message", icon : MessageIcon},
  {title : "Favorites", link : "/dashboard/buy/favorite", icon : FavoritesIcon},
  {title : "My Rewards", link : "/dashboard/buy/rewards", icon : RewardsIcon},
  {title : "My Holdings", link : "/dashboard/buy/holding", icon : HoldingIcon},
  {title : "Transactions", link : "/dashboard/buy/transactions", icon : OffersIcon},
];

const RentalNavListData = [
  {title : "Dashboard", link : "/dashboard/overview", icon : DashboardIcon},
  {title : "My Properties", link : "/dashboard/rent/properties", icon : PropertiesIcon},
  {title : "Messages", link : "/dashboard/rent/message", icon : MessageIcon},
  {title : "Favorites", link : "/dashboard/rent/favorite", icon : FavoritesIcon},
  {title : "My Rewards", link : "/dashboard/rent/rewards", icon : RewardsIcon},
  {title : "My Holdings", link : "/dashboard/rent/holding", icon : HoldingIcon},
  {title : "Transactions", link : "/dashboard/rent/transactions", icon : OffersIcon},
  {title : "My Trips", link : "/dashboard/rent/trips", icon : OffersIcon},
  // {title : "Reservations", link : "/dashboard/rent/reservations", icon : OffersIcon},
  {title : "Reviews", link : "/dashboard/rent/reviews", icon : OffersIcon},
];


export default function Sidebar() {
   
  const [mode, setMode, updateMode] = store.useState('Mode');
  const [buyMode, setBuyMode] = useState(true);  
  const toggleValue = () => {
    setBuyMode((prevState) => !prevState);
    setMode(mode => {
      mode = !mode;
      return mode;
    });
  }
  

    return (
      <div className="Sidebar">
        <Container className="">
        
          <div className="Sidebar-Navlist">            
            {mode ? (
              NavListData.map((item, idx) => (
                <NavListItem icon={item.icon} title={item.title} link={item.link} key={idx}/>
              ))
            ) : (
              RentalNavListData.map((item, idx) => (
                <NavListItem icon={item.icon} title={item.title} link={item.link} key={idx}/>
              ))
            )             
            }
          </div>
        </Container>
      </div>
    );
  }