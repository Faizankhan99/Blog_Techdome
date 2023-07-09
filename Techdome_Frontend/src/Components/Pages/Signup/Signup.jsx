import React, { useEffect, useState } from "react";
import style from "../Signup/Signup.module.css";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function addDate(payload) {
  return axios
    .post("http://localhost:8080/users/signup", payload)
    .then((res) => res.data);
}

function Signup() {
  const [data, setData] = useState({});
  const [api, setAPi] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const handleData = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDate(data)
      .then((res) => {
        console.log("res", res);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        // alert("done");
        setAPi(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (api.status == true) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [api]);

  return (
    <Box className={style.main}>
      .
      <form className={style.form_main} onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" className={style.box}>
            <Text position="absolute">Name</Text>
          </InputLeftElement>
          <Input
            name="name"
            value={data.name}
            onChange={handleData}
            type="text"
            h="50px"
            placeholder="Name"
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
            <Text position="absolute">Email</Text>
          </InputLeftElement>
          <Input
            type="text"
            name="email"
            value={data.email}
            onChange={handleData}
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
          value="Sign up"
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
  );
}

export default Signup;
