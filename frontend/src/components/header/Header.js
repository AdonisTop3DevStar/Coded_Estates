import { Badge, Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import { FaRegBell, FaRegMoon } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../configs/ThemeProvider";
import { THEME_TYPE } from "../../configs/Constants";

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
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
              <Link to="/buy" className="nav-link">
               Buy
              </Link>
              {/* <NavDropdown title="Buy" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link className="nav-item" to="/buy"/>Buy</NavDropdown.Item>
                <NavDropdown.Item>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              <NavDropdown title="Sell" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="" className="nav-link">
                Rent
              </Link>
              <Link to="/dashboard/overview" className="nav-link">
                Dashboard
              </Link>
              <Link to="" className="nav-link">
                <FaRegBell/><Badge pill bg="danger"></Badge>
              </Link>
              <Link className="nav-link" onClick={handleThemeChange}>
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
