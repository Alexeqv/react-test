import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">Servicio Meteorologico•</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Inicio
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
          </Col>
          <Col md="3">
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
