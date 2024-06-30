import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './Faculty.controller';
import { FacultyValidation } from './Faculty.validation';

const router = express.Router();

router.get('/', FacultyController.getAllFromDB);
router.get('/:id', FacultyController.getDataById);
router.post(
  '/',
  validateRequest(FacultyValidation.create),
  FacultyController.insertIntoDB
);

export const FacultyRoutes = router;