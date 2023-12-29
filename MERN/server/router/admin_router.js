const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin_controller');
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin_middleware");

router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllusers);
router.route('/users/:id').get(authMiddleware, adminMiddleware, adminController.getUserById);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts);

module.exports = router;