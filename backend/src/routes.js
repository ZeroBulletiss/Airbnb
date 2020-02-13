import express from 'express'
import multer from 'multer'
import uploadConfig from '../src/config/upload'
import SessionController from './controller/SessionController'
import SpotController from './controller/SpotController'
import DashboardController from './controller/DashboardController'
import BookingController from './controller/BookingController'

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)
routes.get('/sessions', SessionController.show)
routes.get('/sessions/:id', SessionController.getOne)
routes.delete('/sessions/:id', SessionController.delete)
routes.put('/sessions/:id', SessionController.update)

routes.post('/spots',upload.single('thumbnail'), SpotController.store)
routes.get('/spots', SpotController.index)

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/booking', BookingController.store)


//routes.get('/teste', SessionController.teste)

export default routes