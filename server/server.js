const express = require('express');
const cors = require('cors');
const compression = require('compression');
const csurf = require('csurf');
const path = require('path');

const connectDB = require('./db/db');

require('dotenv').config();

const app = express();

connectDB();

let secrets;

app.use(express.json({ extended: false }));
app.use(compression());
app.use(cors());
app.use((req, res, next) => {
  res.locals.secrets = secrets;
  next();
});
app.use(express.static(path.join(__dirname, '/')));

if (process.env.NODE_ENV === 'production') {
  app.use(csurf());
  app.use((req, res, next) => {
    res.set('x-frame-options', 'DENY');
    res.cookie('mytoken', req.csrfToken());
    next();
  });
}

app.get('/', (req, res) => res.send('API Running'));
app.use('/auth', require('./src/routes/auth'));
app.use('/user', require('./src/routes/user'));
app.use('/reservation', require('./src/routes/reservation'));
app.use('/bike', require('./src/routes/bike'));
app.use('/rating', require('./src/routes/rating'));

const PORT = process.env.PORT || 1910;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
