import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import { Private } from "../Pages/private/private";
import { ADDBLOGS } from "../Pages/AddBlog/Addblog";

function Routing() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="addblog" element={<ADDBLOGS />} />
      </Routes>
    </div>
  );
}

export default Routing;
