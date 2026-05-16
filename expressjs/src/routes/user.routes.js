const { Router } = require('express');
const userController = require('../controllers/user.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validate.middleware');
const { updateUserSchema } = require('../validators/user.validator');

const router = Router();

router.use(authenticate);
router.get('/profile', userController.getProfile);
router.patch('/profile', validate(updateUserSchema), userController.updateProfile);

module.exports = router;
