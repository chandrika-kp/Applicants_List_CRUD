import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ApplicantDetail = () => {
  const [text, setText] = useState({
    name: "",
    username: "",
    email: ""
  });
  const { id } = useParams();

  useEffect(() => {
    onLoadApplicantData()
  }, []);

  const onLoadApplicantData = async () => {
    const loadApplicantDetails = await axios.get("http://localhost:3003/users/" + id);
    setText(loadApplicantDetails.data)
  };
  return (
    <div className='container'>
      <Link className='btn btn-primary my-2' to ="/">Back to Home</Link>
      <h6>name : {text.name} </h6>
      <h6>Username : {text.username} </h6>
      <h6>Email : {text.email} </h6>
    </div>
  )
}

export default ApplicantDetail
