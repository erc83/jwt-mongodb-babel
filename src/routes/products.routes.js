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

import {verifyToken, isModerator} from '../middlewares/index'


router.post('/', [verifyToken, isModerator], createProduct)

router.get('/', getProducts)

router.get('/:productId', getProductById)

router.put('/:productId', [verifyToken, isModerator], updateProductById)

router.delete('/:productId', [verifyToken, isModerator], deleteProductById)


export default router;