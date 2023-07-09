import { Box, Button } from "@chakra-ui/react";
import React from "react";
import style from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../Store/Auth/auth.action";

function Navbar() {
  const token = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  console.log(token);
  const Links = [
    { id: 1, title: "Blog", to: "/" },
    { id: 2, title: "Sign up", to: "signup" },
    {
      id: 3,
      title: `${token ? "Add BLog" : "Login"}`,
      to: `${token ? "addblog" : "login"}`,
    },
  ];

  const Logout = () => {
    dispatch(LogoutUser());
  };

  return (
    <Box className={style.b}>
      {Links?.map((elem) => (
        <NavLink
          to={elem.to}
          key={elem.id}
          className={({ isActive }) =>
            !isActive ? style.active : style.default
          }
        >
          <Box textAlign="center" ml="30px">
            {" "}
            {elem.title}
          </Box>
        </NavLink>
      ))}
      {token && (
        <Box>
          <Button onClick={Logout}>Logout</Button>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
