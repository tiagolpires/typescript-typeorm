import { Router } from 'express'
import studentRouter from './studentRoutes'
import seatRouter from './seatRoutes'
import classRouter from './classRoutes'
import notebookRouter from './notebookRoutes'

const router = Router()

router.use('/students', studentRouter)
router.use('/seats', seatRouter)
router.use('/classes', classRouter)
router.use('/notebooks', notebookRouter)

export default router