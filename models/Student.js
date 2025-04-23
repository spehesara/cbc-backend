
import mongoose from "mongoose"



const studentSchema = mongoose.Schema({

     Name : String,
     Age : Number,
     Gender : String
    
    })

    const student = mongoose.model("students",studentSchema)

    export default student;