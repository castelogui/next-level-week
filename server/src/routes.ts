import express from 'express';
import multer from  'multer';
import { celebrate, Joi } from 'celebrate';
import multerConfig from  './config/multer';

import PointController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointController = new PointController();
const itemsController = new ItemsController();

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/items', itemsController.index);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

routes.post(
  '/points', 
  upload.single('image'),
  // celebrate server para fazer a validação
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false
  }), 
  pointController.create
);

export default routes;