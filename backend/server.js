// Creiamo il server per gestire le routes con cui restituiremo i contenuti sul sito
const express = require('express')
const products = require('./data/products')
const app = express()

app.listen(5000, console.log("Server running..."))

// req si riferische alla richiesta fatta sulla base dell'URL
// res è la risposta alla richiesta(req) che viene stampata nel browser
app.get('/', (req, res) => {
    res.send('API is running...');
})

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    // Mostra in console l'id del prodotto
    console.log(req.params);
    const product = products.find((prod) => prod._id === req.params.id);
    res.json(product);
})

// Multiparametro
app.get('/api/products/:id&:category', (req, res) => {
    // Mostra in console l'id del prodotto
    console.log(req.params);
    const product = products.find((prod) => prod._id === req.params.id && prod.category === req.params.category);
    res.json(product);
})
