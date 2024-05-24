import express from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/:id', getProductById);
router.post('/product/new', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;

