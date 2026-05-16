const User = require('../models/user.model');
const ApiError = require('../utils/ApiError');

const getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  return user;
};

const updateUser = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  return user;
};

module.exports = { getUserById, updateUser };
