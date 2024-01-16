import React from "react";

const ListEmployeeComponent = () => {
  const exampleData = [
    {
      id: 1,
      firstName: "Eleri",
      lastName: "Mets",
      email: "eleri@gmail.com",
    },
    {
      id: 2,
      firstName: "Lis",
      lastName: "Landen",
      email: "lis@gmail.com",
    },
    {
      id: 3,
      firstName: "Alexander",
      lastName: "Strong",
      email: "alexander@gmail.com",
    },
  ];

  return (
    <div classname="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee email</th>
          </tr>
        </thead>
        <tbody>
          {exampleData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
