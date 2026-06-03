import React, { useEffect, useState } from "react";
// import './Header.js'
import Header from "./Header.js";

function Apicalling() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <Header />
    
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>

      {/* width: "100%" से टेबल पूरी स्क्रीन पर फैल जाएगी */}
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              <td>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  width="80"
                  height="80"
                  style={{ objectFit: "cover" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Apicalling;
