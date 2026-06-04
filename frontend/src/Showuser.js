import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
// import register from "../../backend/db/register";

function Showuser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2407/api/register")
.then((res) => {
  setUsers(res.data.data);
});
  }, []);

  return (
    <>
      <Header />

      <div style={{ padding: "20px" }}>
        <h1>MongoDB Users Data</h1>

        <table border="1" cellPadding="10" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>

          <tbody>
           {users.map((register) => (
  <tr key={register._id}>
    <td>{register.name}</td>
    <td>{register.email}</td>
    <td>{register.password}</td>
  </tr>
))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Showuser;