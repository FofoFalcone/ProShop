import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col className='col-md-12 text-center'>
                <div>Footer</div>
                </Col>
            </Row>
        </Container>
    </footer>
  );
};

export default Footer;
