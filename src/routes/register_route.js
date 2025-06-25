/**
 * @license Apache-2.0
 * @copyright 2025 Rupanjana Majhi
 */
'use strict';

const router = require('express').Router();
const { register_Controller } = require('../controllers/registerController');
// get router: render the registration page

router.get('/', register_Controller);

module.exports = router;