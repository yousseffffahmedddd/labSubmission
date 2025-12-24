import mongoose, { Document, Model } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  instructor: string;
  price: number;
  duration: number;
  category?: string;
  numberOfStudents?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    category: { type: String },
    numberOfStudents: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const CourseModel: Model<ICourse> = mongoose.models.Course || mongoose.model<ICourse>("Course", courseSchema);

export default CourseModel;
