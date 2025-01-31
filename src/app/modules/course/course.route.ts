import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.contoller';
import { CourseValidation } from './course.validation';

const router = express.Router();

router.get('/', CourseController.getAllFromDB);
router.get('/:id', CourseController.getByIdFromDB);

router.post(
  '/',
  validateRequest(CourseValidation.create),
  CourseController.insertIntoDB
);
router.patch(
  '/:id',
  validateRequest(CourseValidation.create),
  CourseController.updateOneInDB
);
router.delete('/:id', CourseController.deleteByIdFromDB);

router.post(
  '/:id/assign-faculties',
  validateRequest(CourseValidation.assignOrRemoveFaculty),
  CourseController.assignFaculties
);
router.delete(
  '/:id/remove-faculties',
  validateRequest(CourseValidation.assignOrRemoveFaculty),
  CourseController.removeFaculties
);

export const CourseRoutes = router;
