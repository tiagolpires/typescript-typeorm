import { Router } from 'express'
import NotebookController from '../controllers/NotebookController'

const router = Router()

router.get('/', NotebookController.index)
router.post('/', NotebookController.store)
router.delete('/:id', NotebookController.delete)

export default router