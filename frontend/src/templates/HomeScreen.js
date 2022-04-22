import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
// import products from "../products";

// aggiungiamo i prodotti come compoenent level-state
// L'oggetto state è il punto in cui vengono archiviati i valori delle proprietà che appartengono al componente. 
// Quando l'oggetto stato cambia, il componente esegue nuovamente il rendering.
// products sarà uno state globale, ma per adesso lo renderemo parte di un componente
// Axios ci servirà per effettuare le richieste HTTP da backend
import axios from "axios";

const HomeScreen = () => {
  // Tra gli import all'inizio del documento impostiamo un componente useState e un componente useEffect
  // { useState }
  // In queste parentesi quadre inseriamo due cose
  // il primo elemento è lo state (products)
  // il secondo elemento è la funzione che si occuperà di manipolare o modificare lo state
  // all'interno delle funzione useState possiamo definire un parametro [] per specificare che tipo di dato ci aspettiamo dalla nostra response
  // Le parentesi quadre quindi, senza definire la funzione, non restituiranno risultati, la pagina sarà priva di contenuti e non ci saranno errori, perché non abbiamo indicato alcun dato
  const [products, setProducts] = useState([])

  // { useEffect }
  // la funzione useEffect si avvia appena il componente viene caricato; qui dentro inseriremo la nostra HTTP Request
  // All'interno, la funzione asincrona viene eseguita solo 
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data)
    }
    fetchProducts();
  }, [])

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
