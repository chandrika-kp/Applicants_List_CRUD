import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Home = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    LoadJsonData();
    console.log('hello')

  }, [])

  const LoadJsonData = async () => {
    const getData = await axios.get("http://localhost:3003/users");
    setApplicants(getData.data.reverse())
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`)
    LoadJsonData();
  }

  return (
    <div className='container'>
      <h1>List of all applicants:</h1>
      <table className="table table-responsive border shadow">
        <thead className='thead-dark'>
          <tr>
            <th scope="col">SNo</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            applicants.map((eachApplicant, index)=>(
              <tr>
                <th scope='row'> {index +1} </th>
                <td>{eachApplicant.name}</td>
                <td>{eachApplicant.username}</td>
                <td>{eachApplicant.email}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/applicants/${eachApplicant.id}`}>View</Link>
                  <Link className="btn btn-outline-primary" to={`/applicants/edit/${eachApplicant.id}`}>Edit</Link>
                  <Link className="btn btn-danger mx-2"  onClick={() => deleteUser(eachApplicant.id)}>Delete</Link>
                  </td>
            
             </tr>

            ))
          }
          
          
        </tbody>
      </table>
    </div>
  )
}

export default Home
