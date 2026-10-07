const session = require('express-session');
const connectMongo = require('connect-mongo');

// Tương thích cả connect-mongo v5 và v6
const MongoStore = connectMongo.MongoStore || connectMongo.default || connectMongo;

if (!process.env.MONGO_WRITE_URI) {
  throw new Error('Thieu bien moi truong MONGO_WRITE_URI (kiem tra file .env)');
}

module.exports = session({
  secret: process.env.SESSION_SECRET || 'dev_secret_change_me',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_WRITE_URI,
    collectionName: 'sessions',
    ttl: 60 * 60 * 24
  }),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24
  }
});