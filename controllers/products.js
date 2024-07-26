const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

// insert one product
const createProduct = async (req, res) => {
    const { product_id, name, description, price,category,image_url } = req.body;
    try {
        const cust = await prisma.products.create({
            data: {
                product_id,
                name,
                description,
                price,
                category,
                image_url
            }
        });
        res.status(200).json(cust);
    } catch (err) {
        res.status(500).json(err);
    }
};
// update one product
const updateProduct =  async (req, res) => {
    const { product_id, name, description, price, category, image_url } = req.body;
    try {
        const cust = await prisma.products.update({
            data: {
                name,
                description,
                price,
                category,
                image_url
            },
            where: { product_id: Number(product_id) }
        });
        res.status(200).json(cust);
    } catch (err) {
        res.status(500).json(err);
    }
};
// delete customer by product_id
const deleteProduct =  async (req, res) => {
    const id = req.params.id;
    try {
        const cust = await prisma.products.delete({
            where: {
                product_id: Number(id),
            },
        })
        res.status(200).json(cust)
    } catch (err) {
        res.status(500).json(err);
    }
};
// get all Products 
const getProducts =  async (req, res) => {
    const custs = await prisma.products.findMany()
    res.json(custs)
};
// get only one product by product_id
const getProduct =  async (req, res) => {
    const id = req.params.id;
    try {
        const cust = await prisma.products.findUnique({
            where: { product_id: Number(id) },
        });
        if (!cust) {
            res.status(404).json({ 'message': 'product not found!' });
        } else {
            res.status(200).json(cust);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
// search any product by name
const getProductsByTerm = async (req, res) => {
    const  searchString  = req.params.term;
    try {
        const custs = await prisma.products.findMany({
            where: { 
                OR: [
                    {
                        name: {
                            contains: searchString
                        }
                    }
                ]
            },
        });
        if (!custs || custs.length == 0) {
            res.status(404).json({ 'message': 'Product not found!' });
        } else {
            res.status(200).json(custs);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
module.exports = {
    createProduct, getProduct, getProducts,
    updateProduct, deleteProduct, getProductsByTerm
};