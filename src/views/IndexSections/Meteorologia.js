import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getWeatherData } from '../../actions/wheaterActions'
import { getWeather } from '../../reducers/index'

// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  FormGroup,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Spinner,
  Button,
  Label,
} from "reactstrap";


export default function Meteorologia() {
  const dispatch = useDispatch();
  const WeatherData = useSelector(getWeather); // Aqui vas a obtener la data
  React.useEffect(() => {
    console.log('WeatherData', WeatherData)
  }, [WeatherData]);
  const { t } = useTranslation();
  const [select, setSelect] = useState({ label: t('select') });
  const cities = [
    {
      label: "Londres",
      lat: '51.507351',
      lon: '-0.127758'
    },
    {
      label: "Toronto",
      lat: '43.653225',
      lon: '-79.383186'
    },
    {
      label: "Singapur",
      lat: '1.352083',
      lon: '103.819839'
    }
  ];
  const check = (city) => {
    console.log('Check', city);
    const { lat, lon } = city
    dispatch(getWeatherData({
      lat,
      lon,
      units: 'metric',
      lang: localStorage.getItem("i18nextLng") || "en"
    })) // esto es un ejemplo de como deberias enviar la latitud y longitud
    // e.preventDefault()
  }
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">{t('check_your_city')}</h1>
          <Row className="mb-5">
            <Col className="d-flex justify-content-center justify-center">
              <UncontrolledDropdown group>
                <DropdownToggle caret color="badge-neutral">
                  {select.label}
                </DropdownToggle>
                <DropdownMenu>
                  {Object.keys(cities)?.map(item => (
                    <DropdownItem key={item} href={cities[item].label} onClick={e => { setSelect(cities[item]); check(cities[item]); e.preventDefault(); }}>
                      {cities[item].label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          </Row>
          {WeatherData.main &&
            <Card>
              <Row className="mt-5">
                <Col xs="12" className="mb-4">
                  <CardHeader bg={"primary"}>
                    <h3>{WeatherData.weather[0].description.toLowerCase()}</h3>
                  </CardHeader>
                </Col>
                <Col lg="6">
                  <Nav className="nav-pills-info nav-pills-icons" pills>
                    <NavItem>
                      <NavLink
                        className="active"
                      >
                        <i className="tim-icons icon-world" />
                        <h1>
                          <span className="mr-2">{WeatherData.main.temp}</span>
                          ºC
                        </h1>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col lg="6" className="d-flex flex-column justify-content-center align-items-start">
                  <CardBody className="d-flex flex-column justify-content-center align-items-start">
                    <h4>{t('humidity')}: {WeatherData.main.humidity} %</h4>
                    <h4>{t('presure')}: {WeatherData.main.pressure} hPa</h4>
                    <h4>{t('wind')}: {WeatherData.wind.speed} km/h</h4>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          }
        </div>
      </Container>
    </div>
  );
}
