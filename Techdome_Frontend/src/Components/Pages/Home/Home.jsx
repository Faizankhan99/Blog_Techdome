import { Box, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Style from "../Home/Home.module.css";
import axios from "axios";
import Post from "./Post";
import Pagination from "./Pagination";
function blogdata() {
  return axios.get("http://127.0.0.1:8080/blogs");
}

function deleteBlog(id) {
  return axios.delete(`http://localhost:8080/blogs/${id}`);
}

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostperpage] = useState(4);
  const toast = useToast();

  useEffect(() => {
    handle();
  }, []);

  function handle() {
    setLoading(true);
    blogdata().then((res) => {
      console.log(res.data);
      setLoading(false);
      setData(res.data);
      // settotalPages(res.totalPages);
    });
  }

  function DeleteData(id) {
    console.log("new ID====>", id);
    deleteBlog(id).then((res) => {
      console.log(res);
      toast({
        title: "BLog Deleted Sucessfull",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      handle();
    });
  }

  const lastPostIindex = currentPage * postperpage;
  const firstPostIndex = lastPostIindex - postperpage;
  const newData = data.slice(firstPostIndex, lastPostIindex);

  console.log("m", postperpage, newData);

  return (
    <Box className={Style.main}>
      <Heading ml="40%" color="black" as="u">
        {" "}
        ALL BLOGS
      </Heading>
      {loading && <p>It's loading</p>}
      {!loading &&
        newData?.map((elem, index) => (
          <>
            {console.log(elem)}
            <Post
              key={index}
              index={index}
              {...elem}
              DeleteData={(id) => DeleteData(id)}
            />
          </>
        ))}

      <Box mt="30%" ml="25%">
        {newData.length == 0 && (
          <Heading color="yellow" as="u" fontSize={"30px"}>
            No Blog Available Please create
          </Heading>
        )}
      </Box>
      <Pagination
        totalPages={data.length}
        currentPage={currentPage}
        postperPage={postperpage}
        onClick={(value) => setCurrentPage(value)}
      />
    </Box>
  );
}

export default Home;
