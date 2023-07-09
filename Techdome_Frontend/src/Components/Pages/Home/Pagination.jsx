import { Box, Button } from "@chakra-ui/react";

function createArrayOfSize(n) {
  console.log("n", n);
  return new Array(n).fill(0);
}
function Pagination({ totalPages, currentPage, postperPage, onClick }) {
  const pages = createArrayOfSize(Math.ceil(totalPages / postperPage)).map(
    (a, i) => (
      <>
        {console.log(currentPage, totalPages, postperPage)}
        <Button
          onClick={() => onClick(i + 1)}
          disabled={currentPage == i + 1}
          bg={"brown"}
          ml="10px"
        >
          {i + 1}
        </Button>
      </>
    )
  );

  return (
    <Box ml="40%" mt="3%">
      {pages}
    </Box>
  );
}

export default Pagination;
