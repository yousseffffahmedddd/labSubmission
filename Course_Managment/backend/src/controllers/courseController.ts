import { Request, Response } from "express";
import CourseModel, { ICourse } from "../models/courseModel";

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await CourseModel.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: courses });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching courses",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, instructor, price, duration, category, numberOfStudents } = req.body;

    if (!title || !description || !instructor || price == null || duration == null) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const created = await CourseModel.create({
      title,
      description,
      instructor,
      price,
      duration,
      category,
      numberOfStudents,
    } as Partial<ICourse>);

    return res.status(201).json({ success: true, data: created });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating course",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ success: false, message: "Course ID is required" });

    const course = await CourseModel.findById(id);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });

    return res.status(200).json({ success: true, data: course });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching course",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const update = req.body;
    if (!id) return res.status(400).json({ success: false, message: "Course ID is required" });

    const updated = await CourseModel.findByIdAndUpdate(id, update, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Course not found" });

    return res.status(200).json({ success: true, data: updated });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating course",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ success: false, message: "Course ID is required" });

    const deleted = await CourseModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: "Course not found" });

    return res.status(200).json({ success: true, data: { id: deleted._id } });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting course",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
