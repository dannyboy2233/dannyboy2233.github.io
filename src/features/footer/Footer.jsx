import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col>
          <div className="border-top py-4">
            <div>© Daniel Cohen</div>
            <div className="small text-muted">
              This website&apos;s design is inspired by{' '}
              <a href="https://davidcharatan.com/">
                David Charatan&apos;s website
              </a>
              , which is inspired by{' '}
              <a href="https://mldangelo.com/">
                Michael D&apos;Angelo&apos;s website
              </a>
              .
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
