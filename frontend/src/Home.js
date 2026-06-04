import React from "react";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
        }}
      >
        <h1>Welcome To Home Page ....</h1>
      </div>
    </>
  );
}

export default Home;