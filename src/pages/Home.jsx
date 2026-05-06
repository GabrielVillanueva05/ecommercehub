import React from "react";
import CardGrid from "../components/CardGrid";

const Home = ({ user }) => {
  return (
    <div>
      {user ? <p>Logged in as {user.email}</p> : <p>Not logged in</p>}
      <h1>EcommerceHub</h1>
      Our Products:
      <CardGrid />
    </div>
  );
};

export default Home;
