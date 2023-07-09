import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import style from "../Home/Home.module.css";

const Post = ({
  author,
  content,
  heading,
  imgUrl,
  createdAt,
  _id,
  DeleteData,
}) => {
  const [count, setCount] = useState(1);
  const [date, setDate] = useState([]);

  const DeletBLog = () => {
    console.log("id=====>", _id);
    DeleteData(_id);
  };

  useEffect(() => {
    // const time = new Date(createdAt);
    const time = new Date(createdAt);
    setDate(time.toDateString("en-US"));
  }, [createdAt]);

  return (
    <Box
      w="90%"
      m="auto"
      mt="70px"
      className={style.blog_main}
      bgColor="whitesmoke"
      borderRadius="30px"
    >
      <Box>
        <Button onClick={DeletBLog} bg="black">
          ❌
        </Button>
        <Text
          fontSize={["20px", "20px", "30px"]}
          as="b"
          ml={["20%", "20%", "35%"]}
          mt="50%"
        >
          {heading}
        </Text>
      </Box>

      <Box gap="25px">
        <Box ml="10%">
          <Image w="80%" h="300px" className="image" src={imgUrl} alt="post" />
        </Box>
        <Box>
          <Text size="xl" w="80%" ml="6%" mt="10px">
            {content}
          </Text>
          <Text
            as="b"
            size="20px"
            fontSize={["15px", "15px", "30px"]}
            ml={["10%", "10%", "30%"]}
            mt="10px"
          >
            Written by: {author}
          </Text>
        </Box>
        <Text
          as="b"
          size="20px"
          fontSize={["15px", "15px", "25px"]}
          ml={["10%", "10%", "30%"]}
          mt="10px"
        >
          Created At: {date}
        </Text>
      </Box>
    </Box>
  );
};

export default Post;

// author
// :
// "Faizan"
// content
// :
// "kshdfkjhdkfjhkjhfkhdskjfhkjshfkaslkf"
// createdAt
// :
// "2023-07-08T09:38:51.135Z"
// heading
// :
// "New Techology"
// imgUrl
// :
// "https://picsum.photos/200/300.jpg"
// subheading
// :
// "AI Technolog"
// updatedAt
// :
// "2023-07-08T09:38:51.135Z"
// __v
// :
// 0
// _id
// :
// "64a92eabf23e38b5e8972f68"
