require('dotenv').config();
const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const student = require('./config/student');

const app = express();
app.set('trust proxy', 1); // bắt buộc khi chạy sau proxy của Render

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// [SESSION]

app.use((req, res, next) => {
  res.locals.student = student;
  next();
});

app.use('/', require('./routes/books'));

app.listen(process.env.PORT || 3000, () => console.log('Server running'));