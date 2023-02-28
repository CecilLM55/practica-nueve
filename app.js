const express = require ('express');
const app = express();

// funcion callback, lo que se hace cuando se pide un recurso.
app.get('/', (req, res) => {
    res.send('Hello, World. This is the root route');
});

// '/uno' es la ruta que se toma.
app.get('/uno', (req, res) => {
    res.send('Hello, World. From route One');
});

app.get('/prueba', (req, res) => {
    res.send('Hello World, Frome route Prueba');
});
app.listen(3000);

app.get('/html', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Holaaaaaa</h1>
            <p>Hola amigos del internet :)</p>
        </body>
        </html>`
    );
});
