let express = require('express');
const multer = require('multer');
const path = require('path');

let ads = [];
let app = express();
let port = 3000;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
    }
});
const upload = multer({storage});
app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {products: ads});
});

app.post('/add', upload.fields([{name:"image"}]), (req, res) => {
    let data = req.body;
    data.image = req.files.image.map((file) => file.filename);
    data.id = ads.length;
    ads.push(data);
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