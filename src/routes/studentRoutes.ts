import { Router } from 'express'
import StudentController from '../controllers/StudentController'

const router = Router()

router.get('/', StudentController.index)
router.post('/', StudentController.store)
router.post('/show', StudentController.findByname)
router.delete('/:id', StudentController.delete)

export default router