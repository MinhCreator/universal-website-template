const userService = require('../services/user.service');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');

const getProfile = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.user.id);
  res.status(200).json(new ApiResponse(200, user));
});

const updateProfile = asyncHandler(async (req, res) => {
  const user = await userService.updateUser(req.user.id, req.body);
  res.status(200).json(new ApiResponse(200, user, 'Profile updated'));
});

module.exports = { getProfile, updateProfile };
