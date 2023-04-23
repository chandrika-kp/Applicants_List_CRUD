import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUsers = () => {
  let navigate = useNavigate();
  const {id} = useParams();

  const [text, setText] = useState({
    name: "",
    username: "",
    email: ""
  })

  // const {name,username,email} = text; insdead of write 
  // text.name,text.username..etc for values we can use destructor

  const onChangeFunct = (e) => {
    setText({...text,[e.target.name]: e.target.value})
    console.log(e.target.value)
  };

  useEffect(() => {
   onLoadApplicantData();

  },[]);

  const onLoadApplicantData = async () => {
    const loadApplicantDetails = await axios.get("http://localhost:3003/users/"+ id);
    setText(loadApplicantDetails.data) 
    console.log(loadApplicantDetails.data) 
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}` ,text);
    navigate("/");
  }

  return (
    <div>
      <h1>Edit Applicant Details</h1>
      <form onSubmit={e => onSubmitForm(e)}>
        <div className="form-group mb-3">
          <input className="form-control form-control-lg"
            type="text"
            name="name"
            id=""
            placeholder='Enter full name'
            onChange={e => onChangeFunct(e)}
            value={text.name} />
        </div>
        <div className="form-group mb-3">
          <input className="form-control form-control-lg"
            type="text"
            name="username"
            id=""
            placeholder='Enter User name'
            onChange={onChangeFunct}
            value={text.username} />
        </div>
        <div className="form-group mb-3">
          <input className="form-control form-control-lg"
            type="email"
            name='email'
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={onChangeFunct}
            value={text.email} />
        </div>
        <button className="btn btn-warning btn-block"> Update</button>
      </form>
    </div>
  )
}

export default EditUsers
