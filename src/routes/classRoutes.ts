import { Router } from 'express'
import ClassController from '../controllers/ClassController'

const router = Router()

router.get('/', ClassController.index)
router.post('/', ClassController.store)
router.delete('/:id', ClassController.delete)

export default router