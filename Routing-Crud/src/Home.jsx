/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Home({data}) {
  return (
    <>
      <center>
        <h1>Home</h1> <br />
        <Link to={"/Create"} id="link">
          Create
        </Link>
        <Link to={"/Delete"} id="link">
          Delete
        </Link>
        <Link to={"/Update"} id="link">
          Update
        </Link>{" "}
        <br />
        <br />
        <table border="2" width="60%">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                  </tr>
                );
              })
              }
          </tbody>
        </table>
      </center>
    </>
  );
}