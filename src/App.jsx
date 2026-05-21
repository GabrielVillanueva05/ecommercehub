import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { supabase } from "./supabaseClient";
import { useState, useEffect } from "react";
import { products } from "./data/cartProducts";

function App() {
  const [user, setUser] = useState(null);

  const [cartProducts, setCartProducts] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : products;
  });

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
    };

    getUser();
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              user={user}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
