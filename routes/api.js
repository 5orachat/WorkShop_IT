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

router.post('/customers', apiLimiter, customerController.createCustomer);
router.put('/customers', apiLimiter, customerController.updateCustomer);
router.delete('/customers/:id', apiLimiter, customerController.deleteCustomer);
router.get('/customers/:id', customerController.getCustomer);
router.get('/customers/q/:term', apiLimiter, customerController.getCustomersByTerm);
router.get('/customers', apiLimiter, customerController.getCustomers);



//apiLimiter การเพิ่ม limit for router
router.post('/products',  productController.createProduct);
router.put('/products',  productController.updateProduct);
router.delete('/products/:id',  productController.deleteProduct);
router.get('/products/:id', productController.getProduct);
router.get('/products/q/:term', productController.getProductsByTerm);
router.get('/products', Limiter, productController.getProducts);

module.exports = router;


/**
 * @swagger
 * components:
 *    schemas:
 *      Customer:
 *        type: object
 *        properties:
 *          customer_id:
 *            type: integer
 *            description: The unique identifier of the customer.
 *          first_name:
 *            type: string
 *            description: The customer's firstname.
 *          last_name:
 *            type: string
 *            description: The customer's lastname.
 *          address:
 *            type: string
 *            description: The customer's address.
 *          email:
 *            type: string
 *            description: The customer's email (unique).
 *          phone_number:
 *            type: string
 *            description: The customer's phone number.
 *        required:
 *          - none
 */

/**
 * @swagger
 * /api/v1/customers:
 *   get:
 *     summary: Get All Customers
 *     tags: [Customers]
 *     description: Returns a list of all customers in the database.
 *     responses:
 *       200:
 *         description: A list of customers.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Customer'
 *       500:
 *         description: Internal server error.
 * 
 */

/**
 * @swagger
 * /api/v1/customers/{id}:
 *   get:
 *     summary: Get Customer by ID
 *     tags: [Customers]
 *     description: Returns a single customer object based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The unique identifier of the customer.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Customer object found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Customer not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating customer not found.
 *       500:
 *         description: Internal server error.
 *
 */

/**
 * @swagger
 * /api/v1/customers:
 *   post:
 *     summary: Create a new Customer 
 *     tags: [Customers]
 *     description: create a new customer on database 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: Customer object created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       500:
 *         description: Internal server error.
 *
 */