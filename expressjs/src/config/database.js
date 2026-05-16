const mongoose = require('mongoose');
const config = require('./env');

const connectDatabase = async () => {
  const conn = await mongoose.connect(config.mongodbUri);
  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDatabase;
