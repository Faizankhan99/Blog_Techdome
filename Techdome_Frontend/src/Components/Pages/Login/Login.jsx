import { Box, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";

import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../Store/Auth/auth.action";
function Login() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const token = useSelector((store) => store.auth.token);
  const navigate = useNavigate();
  const toast = useToast();

  const handleData = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthLogin(data, toast));
  };

  useEffect(() => {
    if (token) {
      toast({
        title: "Login Sucessfull",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      navigate("/");
    }
  }, [token]);

  console.log(data);
  return (
    <Box className={style.main}>
      <Box className={style.main}>
        S
        <form className={style.form_main} onSubmit={handleSubmit}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" className={style.box}>
              <Text position="absolute">Email</Text>
            </InputLeftElement>
            <Input
              name="email"
              value={data.email}
              onChange={handleData}
              type="text"
              h="50px"
              placeholder="Email"
              w="100%"
              mt="26px"
              padding="10px"
              textAlign="center"
              color="Black"
              bg="#FAFAFA"
              opacity="0.8"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" className={style.box}>
              <Text position="absolute">Password</Text>
            </InputLeftElement>
            <Input
              name="password"
              value={data.password}
              onChange={handleData}
              type="text"
              h="50px"
              placeholder="password"
              w="100%"
              mt="26px"
              padding="10px"
              textAlign="center"
              color="Black"
              bg="#FAFAFA"
              opacity="0.8"
            />
          </InputGroup>
          <Input
            type="submit"
            value="Login"
            h="40px"
            w="30%"
            mt="26px"
            color="white"
            bg="black"
            opacity="0.8"
            border="2px solid white"
            ml="30%"
          />
        </form>
      </Box>
    </Box>
  );
}

export default Login;
