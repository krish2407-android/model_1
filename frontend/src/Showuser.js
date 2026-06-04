import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import "./Showuser.css";

function Showuser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2407/api/register")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="showuser-container">
        <h1 className="showuser-title">MongoDB Users Data</h1>

        <div className="table-container">
          <table className="user-table">
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
      </div>
    </>
  );
}

export default Showuser;