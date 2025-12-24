import { Router } from 'express';
import {
  getAllCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
} from '../controllers/courseController';

const router = Router();

// Course routes
router.get('/courses', getAllCourses);
router.post('/courses', createCourse);
router.get('/courses/:id', getCourseById);
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

export default router;
