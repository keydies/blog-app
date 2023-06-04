import { Router } from 'express';
import AuthController from '../controllers/Auth.controller';
const router = Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

export default router;
