import Title from "../components/Title";
import Container from "../components/Container";
import ButtonAppBar from "../components/AppBar";
import { BackCard } from "../components/BackCard";
import { Box } from "@mui/material";

export default function PageNotFound() {
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
      <Title>Page Not Found</Title>
      <Container>
        <BackCard />
      </Container>
    </Box>
  );
}
