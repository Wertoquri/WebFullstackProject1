let express = require('express');
let ads = [];
let app = express();
let port = 3000;
app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/add', (req, res) => {
    ads.push(req.body);
    res.send({status: 'success' });
});

app.get('/ads', (req, res) => {
    res.json(ads);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});