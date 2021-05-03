import { Router } from 'express'
const router = Router()

// import * as authCtrl from '../controllers/auth.controller'
// router.post('/login', authCtrl.login)
// router.post('/register', authCtrl.register)


import {Login, Register} from '../controllers/auth.controller'
import {checkDuplicateUsernameOrEmail, checkRolesExisted} from '../middlewares/verifyRegister'
 

router.post('/register', 
    [checkDuplicateUsernameOrEmail, checkRolesExisted], 
    Register 
);
router.post('/login', Login);

export default router;