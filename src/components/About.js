const About = () => {
  return(
    <div className="container">
    <h1>About Page</h1>
    <p className="lead">
      This is a simple react application with CRUD operations using JSON server & Axios.
    </p>
    <p className="lead">
       JSON Server is a node package manager that helps you to setup a REST API with CRUD operations very fast.
    (REST APIs communicate via HTTP requests to perform standard database functions 
    like creating, reading, updating, and deleting records within a resource.)
    JSON Server will take JSON file and turn it into a RESTful database with all the right routes.
    </p>
    <p className="lead">
      Aixos is a popular libray used to communicate with the backend.It is used to make API requests.
    </p>
    <p className="lead">
      In this application we can Add,edit,view,Delete the applicant details.
    </p>
    </div>
  )
}
export default About;