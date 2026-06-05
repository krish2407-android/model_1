import React from "react";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "100vh",
          background: "#f4f6f9",
          padding: "30px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            background: "#fff",
            borderRadius: "15px",
            padding: "30px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              width="120"
            />
            <h1>Krish Joshi</h1>
            <h3>B.Tech Information Technology Student</h3>
          </div>

          <hr />

          <h2>Personal Information</h2>

          <p><b>Name :</b> Krish Joshi</p>
          <p><b>Enrollment No :</b> 2502031030102</p>
          <p><b>Education :</b> B.Tech IT</p>
          <p><b>College :</b> Aditya Silver Oak Institute of Technology</p>
          <p><b>Email :</b> krishjoshi2407@gmail.com</p>

          <hr />

          <h2>Skills</h2>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
          </ul>

          <hr />

          <h2>Projects</h2>

          <div>
            <h3>Wear Share</h3>
            <p>
              Full Stack MERN E-Commerce Website with Authentication,
              Product Management, Cart, Orders and Admin Panel.
            </p>

            <h3>eFashion</h3>
            <p>
              Online Fashion Shopping Website developed using React,
              Node.js and MongoDB.
            </p>
          </div>

          <hr />

          <h2>Career Objective</h2>

          <p>
            To obtain a challenging position in the IT industry where I can
            apply my technical skills, learn new technologies and contribute
            to organizational growth.
          </p>

          <hr />

          <h2>Contact</h2>

          <p><b>Email:</b> krishjoshi2407@gmail.com</p>
          <p><b>Location:</b> Nadiad, Gujarat</p>
        </div>
      </div>
    </>
  );
}

export default Home;