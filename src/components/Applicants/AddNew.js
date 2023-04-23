import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddNew = () => {
  let navigate = useNavigate();
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
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users" ,text);
    navigate("/");
  }

  return (
    <div className='container-fluid'>
      <h1>Add New applicant</h1>
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
        <button className="btn btn-primary btn-block"> Add to list</button>
      </form>
    </div>
  )
}

export default AddNew
