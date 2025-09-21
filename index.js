let express = require('express');
let ads = [];
let app = express();
let port = 3000;
app.use(express.static('static'));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {products: ads});
});

app.post('/add', (req, res) => {
    ads.push(req.body);
    res.send({status: 'success' });
});

app.use((req, res, next) => {
    res.status(404);
    res.render('notfound');
    next();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});