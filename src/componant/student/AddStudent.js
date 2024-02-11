import axios from "axios";
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const AddStudent = () => {

    let navigate =useNavigate();
    const[student,setStudents] =useState({
        rollNo : '',
        name : '',
        percentage : '',
        branch : '',
    })
    //object of students
    const{rollNo,name,percentage,branch} = student;

    const handleInputChange =(e)=>{
        setStudents({...student,[e.target.name] : e.target.value});
    };

    //save method
    const saveStudent = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8093/students", student);
        navigate("/view-students");
      };


  return (
    <div className='col-sm-8 py-2 px-5'>
      <form onSubmit={(e)=> saveStudent(e)}>
        <div className='input-group mb-5'>
            <label className="input-group-text"
            htmlFor="rollNo">Roll No</label>
            <input className="form-control col-sm-6"
            type="text"
            name="rollNo"
            id="rollNo"
            required
            value={rollNo}
            onChange={(e)=> handleInputChange(e)}/>
        </div>
        <div className='input-group mb-5'>
            <label className="input-group-text"
            htmlFor="name">Name</label>
            <input className="form-control col-sm-6"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e)=> handleInputChange(e)}
            />
        </div>
        <div className='input-group mb-5'>
            <label className="input-group-text"
            htmlFor="percentage">Percentage</label>
            <input className="form-control col-sm-6"
            type="text"
            name="percentage"
            id="percentage"
            required
            value={percentage}
            onChange={(e)=> handleInputChange(e)}
            />

           
        </div>
        <div className='input-group mb-5'>
            <label className="input-group-text"
            htmlFor="branch">Branch</label>
            <input className="form-control col-sm-6"
            type="text"
            name="branch"
            id="branch"
            required
            value={branch}
            onChange={(e)=> handleInputChange(e)}
            />
        </div>

        <div className="row mb-5">
            <div className="col-sm-2">
                <button type="submit"
                className="btn btn-outline-success btn-lg">Save</button>
            </div>
         
            
            <div className="col-sm-2">
                <Link  to={"/view-students"} type="submit"
                className="btn btn-outline-success btn-lg">Cancel</Link>
            </div>

        </div>
      </form>
    </div>
  );
};

export default AddStudent;
