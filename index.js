const express = require('express');
const app = express();
const Contenedor = require('./contenedor');

const PORT = process.env.PORT || 8080;

const contenedor = new Contenedor;

app.get('/productos', async (req, res) => {
    res.send(await contenedor.getAll())
})

app.get('/productoRandom', async (req, res) => {
    res.send(await contenedor.getRandom())
})

app.listen(PORT, () => {
    console.log('servidor activo y escuchando en el puerto 8080')
})