import React from "react";
import { useState } from "react";
import "./Signup.css";
import { supabase } from "../supabaseClient";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log("Signup Error:", error.message);
      alert(error.message);
      return;
    }

    console.log("Signup Success:", {
      data,
    });

    alert("Account Created! Check your email to confirm your account.");
  }

  return (
    <>
      <div className="signup-page-container">
        <div className="signup-container">
          <h1 className="signup-title">Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
