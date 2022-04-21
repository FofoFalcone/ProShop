import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = () => {
  let { id } = useParams();
  const product = products.find((prod) => prod._id === id);
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="my-4">
        <Col md={2}>
          <Button className="btn btn-light p-0" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </Col>
      </Row>
      <Row fluid>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={
                  product.numReviews > 1
                    ? `${product.numReviews} reviews`
                    : `${product.numReviews} review`
                }
              ></Rating>
            </ListGroupItem>
            <ListGroupItem>Price: $ {product.price}</ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>$ {product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className="col-12" type="button" disabled={product.countInStock === 0}>
                  {product.countInStock > 0 ? 'Add To Cart' : 'Not Available'}
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
