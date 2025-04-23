import express from "express";
import student from "../models/Student.js"

import { getStudent , createStudent, deleteStudent } from "../Controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/",getStudent)


studentRouter.post("/",createStudent)

studentRouter.delete("/",    deleteStudent)





export default studentRouter;

