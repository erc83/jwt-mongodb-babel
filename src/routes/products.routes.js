import { Router } from 'express'
const router = Router()

// import * as productCtrl from '../controllers/products.controller'
import {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
} from '../controllers/products.controller'


router.post('/', createProduct)

router.get('/', getProducts)

router.get('/:productId', getProductById)

router.put('/:productId', updateProductById)

router.delete('/:productId', deleteProductById)





export default router;