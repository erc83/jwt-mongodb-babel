import { Router } from 'express'
const router = Router()

// import * as authCtrl from '../controllers/auth.controller'
// router.post('/login', authCtrl.login)
// router.post('/register', authCtrl.register)


import {Login, Register} from '../controllers/auth.controller'

router.post('/login', Login)
router.post('/register', Register)

export default router;