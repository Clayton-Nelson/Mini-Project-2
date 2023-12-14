import Title from "../components/Title";
import Container from "../components/Container";
import ButtonAppBar from "../components/AppBar";
import { BasicCard } from "../components/Card";
import { useMyList } from "../context/MyListContext";
import { Box } from "@mui/material";
import { AddCard } from "../components/AddCard";

export default function MyList() {
  const { myList } = useMyList();

  return (
    <Box 
    sx={{
      height: "100vh",
      width: "100vw",
      maxWidth: "50vw",
      "@media (min-width: 1920px)": {
        width: "50vw",
      },
      "@media (max-width: 960px)": {
        width: "100vw",
        maxWidth: "100vw",
      },
    }}>
      <ButtonAppBar />
      <Title>My List</Title>
      <Container type="card">
        {myList.map((item, index) => (
          <BasicCard key={index} index={index} info={item} />
        ))}
        <AddCard />
      </Container>
    </Box>
  );
}
