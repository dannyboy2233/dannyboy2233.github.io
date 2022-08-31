import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const Page = ({ title, subtitle, invisible, children, padding }) => {
  const titleNode = (
    <div className="p-5 border bg-white">
      <h1 className="m-0">{title}</h1>
      {subtitle ? <div className="mt-2">{subtitle}</div> : null}
    </div>
  );
  const showTitleNode = title || subtitle;
  const titleNodeClasses = [];
  if (!invisible) {
    titleNodeClasses.push('border bg-white');
    titleNodeClasses.push(padding ?? 'p-5');
    if (showTitleNode) {
      titleNodeClasses.push('border-top-0');
    }
  }

  return (
    <Container className="min-height-page">
      <Row>
        <Col>
          <div className="my-5">
            {showTitleNode ? titleNode : null}
            <div className={titleNodeClasses.join(' ')}>{children}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node,
  invisible: PropTypes.bool,
  children: PropTypes.node,
  padding: PropTypes.string,
};

Page.defaultProps = {
  subtitle: null,
  invisible: false,
  children: null,
  padding: undefined,
};

export default Page;
