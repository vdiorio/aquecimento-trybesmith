import { Router } from 'express';
import { list, create } from '../controller/estudante.controller';
import validarEstudante from '../middlewares/validarEstudante';

const router = Router();

router.post('/estudantes', validarEstudante.validarEstudante, create)
router.get('/estudantes', list)

export default router;
