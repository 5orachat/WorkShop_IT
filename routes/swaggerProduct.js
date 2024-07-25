/**
 * @swagger
 * components:
 *    schemas:
 *      Product:
 *        type: object
 *        properties:
 *          product_id:
 *            type: integer
 *            description: The unique identifier of the product.
 *          name:
 *            type: string
 *            description: The name of the product.
 *          description:
 *            type: string
 *            description: The description of the product.
 *          price:
 *            type: number
 *            format: float
 *            description: The price of the product.
 *          category:
 *            type: string
 *            description: The category of the product.
 *          image_url:
 *            type: string
 *            description: The URL to the image of the product.
 *        required:
 *          - name
 *          - price
 */

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Get All Products
 *     tags: [Products]
 *     description: Returns a list of all products in the database.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 * 
 */

/**
 * @swagger
 * /api/v1/products/{product_id}:
 *   get:
 *     summary: Get Product by ID
 *     tags: [Products]
 *     description: Returns a single product object based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: product_id
 *         description: The unique identifier of the product.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Product object found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating product not found.
 *       500:
 *         description: Internal server error.
 *
 */

/**
 * @swagger
 * /api/v1/products:
 *   post:
 *     summary: Create a new Product 
 *     tags: [Products]
 *     description: Create a new product in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product object created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 *
 */

/**
 * @swagger
 * /api/v1/products/{product_id}:
 *   put:
 *     summary: Update Product by ID
 *     tags: [Products]
 *     description: Update an existing product in the database by ID.
 *     parameters:
 *       - name: product_id
 *         in: path
 *         required: true
 *         description: ID of the product to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/v1/products/{product_id}:
 *   delete:
 *     summary: Delete Product by ID
 *     tags: [Products]
 *     description: Delete an existing product from the database by ID.
 *     parameters:
 *       - name: product_id
 *         in: path
 *         required: true
 *         description: ID of the product to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/v1/products/q/{term}:
 *   get:
 *     summary: Search Products by term
 *     tags: [Products]
 *     description: Returns a list of products matching the search term.
 *     parameters:
 *       - in: path
 *         name: term
 *         description: The term to search for in product names and descriptions.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of products matching the search term.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating product not found.
 *       500:
 *         description: Internal server error.
 */