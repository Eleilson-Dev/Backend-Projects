import { Router } from 'express';
import { usersControllers } from '../controllers/Users.controller';

export const router = Router();

router.post('/create', usersControllers.createUser);
router.get('/', usersControllers.getAll);
router.get('/user/:id', usersControllers.getById);
