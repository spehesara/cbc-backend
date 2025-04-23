import student from "../models/Student.js"

export function getStudent(req,res){

    student.find().then(
    (studentList)=>{[
    
    res.json({
    list : studentList
    
    })
    
    
    ]}
    
    )}

    export function createStudent(req,res){

        const Student = new student(req.body)
        Student.save().then(()=>{
        
            res.json({
                message:"Student Created successfully"
            })
        
        
        }).catch(()=>{
        
            res.json({
        
                 message: "Student not created"
            
                })
            
        })
        
        
        
        }

export function  deleteStudent(req,res){
student.deleteOne({Name:req.body.Name}).then(
    ()=>{

res.json({

message:"Student deleted successfully"

})


    }
 )


}

