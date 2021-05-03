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

import {verifyToken, isModerator, isAdmin} from '../middlewares/index'


router.post('/', [verifyToken, isModerator], createProduct)

router.get('/', getProducts)

router.get('/:productId', getProductById)

router.put('/:productId', [verifyToken, isAdmin], updateProductById)

router.delete('/:productId', [verifyToken, isAdmin], deleteProductById)


export default router;