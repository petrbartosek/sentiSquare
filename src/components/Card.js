import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = (props) => {
    return (
        <Container className='my-2 p-5 text-align-center bg-light shadow-sm rounded'>
            <Row>
                <Col className='d-flex justify-content-center align-items-center flex-column'>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
};

export default Card;