const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Crear cliente Redis
const client = redis.createClient({
    url: 'redis://127.0.0.1:6379'  
});

// Manejar errores de Redis
client.on('error', (err) => {
    console.log('Redis Client Error:', err);
});

// Conectar el cliente Redis
(async () => {
    await client.connect();
    console.log('Connected to Redis successfully!');
})();

app.use(bodyParser.json());
app.use(express.static('public'));

// Ruta para servir el archivo index.html (página principal)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para acortar el enlace
app.post('/shorten', async (req, res) => {
    const originalUrl = req.body.url;
    const shortId = uuidv4().slice(0, 8);
    const shortUrl = `http://localhost:4567/${shortId}`;

    await client.set(shortId, originalUrl);
    await client.lPush('recent_links', shortUrl);
    res.json({ shortUrl });
});

// Ruta para servir la página de All Links (index2.html)
app.get('/all-links-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));  // Ruta
});

// Ruta para obtener los enlaces acortados
app.get('/all-links', async (req, res) => {
    const links = await client.lRange('recent_links', 0, 4);
    res.json({ links });
});

// Redireccionar a la URL original
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const originalUrl = await client.get(shortId);

    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).send('Link not found');
    }
});

app.listen(4567, () => {
    console.log('Server running on http://localhost:4567');
});