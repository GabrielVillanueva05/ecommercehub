import React from "react";

const Home = ({ user }) => {
  return (
    <div>
      <h1>EcommerceHub</h1>

      {user ? <p>Logged in as {user.email}</p> : <p>Not logged in</p>}
    </div>
  );
};

export default Home;
