const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let salida = {
        nombre: 'Manuel',
        edad: 23,
        url: req.url,
    };
    res.send(salida);
    res.end();
});

app.get('/data', (req, res) => {
    res.send('Hola data');
    res.end();
});

app.listen(3000, () => console.log('Escuchando peticiones en el puerto 3000.'));