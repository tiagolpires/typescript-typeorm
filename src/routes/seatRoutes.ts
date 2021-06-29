import { Router } from 'express'
import SeatController from '../controllers/SeatController'

const router = Router()

router.get('/', SeatController.index)
router.post('/', SeatController.store)
router.delete('/:id', SeatController.delete)

export default router