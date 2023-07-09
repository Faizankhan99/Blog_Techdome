import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "../AddBlog/addblog.module.css";
import axios from "axios";

const option = {
  weekdaty: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const blogdata = {
  heading: "",
  subheading: "",
  content: "",
  author: "",
  imgUrl: "",
};

export function ADDBLOGS() {
  const [blog, setBlog] = useState(blogdata);
  const [submit, setSubmit] = useState();
  const toast = useToast();

  function handleChange(e) {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  }

  function AddBlog({ heading, content, author, imgUrl }) {
    return axios.post(
      "https://blogtechdomebackend-production.up.railway.app/blogs/",
      {
        heading: heading,
        content: content,
        author: author,
        imgUrl: imgUrl,
      }
    );
  }

  function handlesubmit(e) {
    e.preventDefault();
    setSubmit(blog);
    AddBlog(blog)
      .then((res) => {
        console.log(res.data.message);
        // alert(res.data.message);
        toast({
          title: "Blog Created sucessfully👍",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setBlog("");
    e.target.reset();
  }

  console.log(blog);
  return (
    <Box className={style.main}>
      <Heading as="h1" size="lg" ml="45%">
        Add Your Blog
      </Heading>
      <Box w={["50%", "70%", "40%"]} m="auto">
        <form action="" className={style.form} onSubmit={handlesubmit}>
          {/* <label htmlFor="">Heading </label> */}
          <Input
            placeholder="title"
            name="heading"
            mt="10px"
            value={blog.heading}
            backgroundColor="white"
            onChange={handleChange}
          />

          <Textarea
            placeholder="Enter your Blog Here"
            mt="10px"
            name="content"
            value={blog.content}
            backgroundColor="white"
            onChange={handleChange}
          ></Textarea>
          <Input
            placeholder="Enter your Image Url"
            mt="10px"
            name="imgUrl"
            value={blog.imgUrl}
            backgroundColor="white"
            onChange={handleChange}
          ></Input>

          <Input
            placeholder="Author"
            value={blog.author}
            name="author"
            mt="10px"
            backgroundColor="white"
            onChange={handleChange}
          />

          <Input type="submit" mt="10px" bgColor="white" />
        </form>
      </Box>
    </Box>
  );
}
