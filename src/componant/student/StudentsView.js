import React, { useEffect, useState } from "react";
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentsView = () => {


 const[students,setStudents]=useState([]);

 useEffect(()=>{loadStudents();},[]);
//method create
const loadStudents = async () => {
  try {
    const result = await axios.get("http://localhost:8093/students", {
      validateStatus: () => true,
    });

    if (result.status === 302) {
      setStudents(result.data);
    }
  } catch (error) {
    console.error("Axios Error:", error);
  }
};

  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
            <tr className="text-center">
             <th>ID</th>
             <th>Roll No</th>
             <th>Name</th>
             <th>Percentage</th>
             <th>Branch</th>
             <th colSpan="3">Actions</th>
             


            </tr>
        </thead>
        <tbody className="text-center">
        {students.map((student,index)=>(
            <tr key={student.id}>
            <th scope="row" key={index}>
                {index+1}
            </th>
               <td>{student.rollNo}</td> 
               <td>{student.name}</td> 
               <td>{student.percentage}</td> 
               <td>{student.branch}</td> 
               <td className="mx-2">
               <Link to={`/student-profile/${student.id}`} className="btn btn-info">
               <FaEye/>
               </Link>
            </td> 
               <td className="mx-2">
               <Link to={`/edit-student/${student.id}`} className="btn btn-warning">
                 <FaEdit/>
                 </Link>

            </td> 
               <td className="mx-2">
               <button className="btn btn-Danger">
               <FaTrashAlt/>
               </button>
               </td> 
            </tr>
            
            
            ))}
            
        </tbody>



      </table>
    </section>
  )
}

export default StudentsView;
