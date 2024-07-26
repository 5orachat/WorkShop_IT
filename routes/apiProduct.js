// const express = require('express');

// //limit section
// const rateLimit = require('express-rate-limit');
// const Limiter = rateLimit({
//     windowMs: 1000*60*0.3,   // 3 minutes
//     max: 3, //จำนวนครั้งที่เรียก
//     message: 'Too many requests, please try again after 3 minutes!'
// });
// //limit section

// const router = express.Router();
// const productController = require('../controllers/products');

// //apiLimiter การเพิ่ม limit for router
// router.post('/products',  productController.createProduct);
// router.put('/products',  productController.updateProduct);
// router.delete('/products/:id',  productController.deleteProduct);
// router.get('/products/:id', productController.getProduct);
// router.get('/products/q/:term', productController.getProductsByTerm);
// router.get('/products', Limiter, productController.getProducts);

// module.exports = router;
