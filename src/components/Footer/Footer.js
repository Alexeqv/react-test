import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">{t('weather_service')}•</h1>
          </Col>
          <Col md="3">
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
