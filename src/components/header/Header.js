import { Badge, Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import { FaRegBell, FaRegMoon } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../configs/ThemeProvider";
import { THEME_TYPE } from "../../configs/Constants";
import { DefaultBtn, PrimaryBtn, SecondPrimaryBtn } from "../button/Buttons";

export default function Header() {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    const handleThemeChange = (e) => {
        if(themeMode.theme === THEME_TYPE.LIGHT) {
            setThemeMode({theme : THEME_TYPE.DARK});
        }
        else {
            setThemeMode({theme : THEME_TYPE.LIGHT});
        }
    }
  return (
    <div className="Header">
      <Navbar collapseOnSelect expand="lg">
        <Container fluid className="py-2">
          <Navbar.Brand>
            <Link to="/">
              <Image src={Logo} width="120" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link  fw-bold">
                Home
              </Link>              
              <Link to="/buy" className="nav-link fw-bold">
               Buy
              </Link>
              <Link to="" className="nav-link fw-bold">
                Rent
              </Link>
              <Link to="/dashboard/overview" className="nav-link fw-bold">
                Dashboard
              </Link>
              <Link to="/about" className="nav-link fw-bold">
                About Us
              </Link>
              <Link to="" className="nav-link fw-bold">
                <FaRegBell/><Badge pill bg="danger"></Badge>
              </Link>
              <Link className="nav-link fw-bold" onClick={handleThemeChange}>
                <FaRegMoon/>
              </Link>
              <Button className="rounded-pill">Connect Wallet</Button>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
