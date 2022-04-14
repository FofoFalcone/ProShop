import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <h1 className="my-4">Latest Products</h1>
      <Row>
        {products.map(
          (product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          )
          // Il risultato del map qui sopra è l'equivalente di una arrow function che esegue il return del component card
          // Il component card restituito utilizza le informazioni passate dal parametro product
          // (product) => {
          //     return (
          //     <Col sm={12} md={6} lg={4} xl={3}>
          //         <ProductCard product={product} />
          //     </Col>
          //     )
          // }
        )}
      </Row>
    </>
  );
};

export default HomeScreen;
