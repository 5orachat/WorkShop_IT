const express = require('express');
const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({
    windowMs: 1000*60*3,   // 3 minutes
    max: 10,
    message: 'Too many requests, please try again after 3 minutes!'
});
const router = express.Router();
const customerController = require('../controllers/customers');
const productController = require('../controllers/products');

//path auth
const authController = require('../controllers/auth');
//path user
const userController = require('../controllers/users');


router.post('/customers', apiLimiter, customerController.createCustomer);
router.put('/customers', apiLimiter, customerController.updateCustomer);
router.delete('/customers/:id', apiLimiter, customerController.deleteCustomer);
router.get('/customers/:id', customerController.getCustomer);
router.get('/customers/q/:term', apiLimiter, customerController.getCustomersByTerm);
router.get('/customers', customerController.getCustomers);



router.post('/products',  productController.createProduct);
router.put('/products',  productController.updateProduct);
router.delete('/products/:id',  productController.deleteProduct);
router.get('/products/:id', productController.getProduct);
router.get('/products/q/:term', productController.getProductsByTerm);
router.get('/products', productController.getProducts);

router.post('/users', userController.createUser);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;


