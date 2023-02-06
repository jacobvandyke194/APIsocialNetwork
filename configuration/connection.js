const { connectAPI, connection } = require('mongoose');

const connect = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB';

connectAPI(connect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;