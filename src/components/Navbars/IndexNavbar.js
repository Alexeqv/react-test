import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const selected = localStorage.getItem("i18nextLng") || "en";
  const { t } = useTranslation();
  const languageMap = {
    en: { label: "English", dir: "ltr", short: "EN", active: true },
    es: { label: "Español", dir: "rtl", short: "ES", active: false },
  };
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="xs">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>Dominion• </span>
            {t('weather_service')}
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Prueba Técnica
          </UncontrolledTooltip>
          <button className="navbar-toggler" aria-expanded={false}>
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
      </Container>

      <Collapse
        className={"justify-content-end " + collapseOut}
        navbar
        isOpen={collapseOpen}
        onExiting={onCollapseExiting}
        onExited={onCollapseExited}
      >
        <div className="navbar-collapse-header navbar-transparent">
          <Row>
            <Col className="collapse-brand" xs="6">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Dominion•{t('weather_service')}
              </a>
            </Col>
            <Col className="collapse-close text-right" xs="6">
              <button
                aria-expanded={collapseOpen}
                className="navbar-toggler"
                onClick={toggleCollapse}
              >
                <i className="tim-icons icon-simple-remove" />
              </button>
            </Col>
          </Row>
        </div>
        <Nav navbar expand="lg">
          <UncontrolledDropdown nav>
            <DropdownToggle
              caret
              color="default"
              data-toggle="dropdown"
              href="#es"
              id="navbarDropdownMenuLink"
              nav
              // onClick={(e) => e.preventDefault()}
            >
              {/* <i
                aria-hidden={true}
                className="tim-icons icon-settings-gear-63"
              />{languageMap[selected].short} */}
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbarDropdownMenuLink"
              right
            >
              <DropdownItem header>Idiomas</DropdownItem>
              {Object.keys(languageMap)?.map(item => (
              <DropdownItem
                key={item}
                onClick={() => { i18next.changeLanguage(item); }}
              >
                {languageMap[item].label}
              </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
