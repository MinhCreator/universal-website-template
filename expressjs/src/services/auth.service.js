const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const config = require('../config/env');
const ApiError = require('../utils/ApiError');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  });
};

const register = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) {
    throw new ApiError(409, 'Email already registered');
  }
  const user = await User.create({ name, email, password });
  const token = generateToken(user._id);
  return { user: { id: user._id, name: user.name, email: user.email }, token };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    throw new ApiError(401, 'Invalid email or password');
  }
  const token = generateToken(user._id);
  return { user: { id: user._id, name: user.name, email: user.email }, token };
};

module.exports = { register, login };
