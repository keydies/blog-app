import { Router } from 'express';
import UserController from '../controllers/User.controller';

const router = Router();

router.put('/update-data', UserController.updateData);
router.put('/update-password', UserController.updatePassword);

export default router;
