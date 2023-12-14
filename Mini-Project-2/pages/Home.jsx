import Title from "../components/Title";
import Container from "../components/Container";
import ButtonAppBar from "../components/AppBar";
import { Box } from "@mui/material";

export default function Home() {
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
      }}
    >
      <ButtonAppBar />
      <Title>Home</Title>
      <Container type="text">
        <div>
          <h2>About My Webpage</h2>
          <p>
            Welcome to People Lists
            <br />
            your go-to platform for organizing and managing lists of individuals
            in a sleek and user-friendly manner.
          </p>

          <h3>Features</h3>
          <ul>
            <li>
              Create and Edit Cards: Effortlessly create cards for each
              individual, with the flexibility to edit and update information at
              any time.
            </li>
            <li>
              Customize Information: Add diverse details about individuals, from
              basic contact information to personalized notes or specific
              details relevant to your interactions.
            </li>
            <li>
              User-Friendly Interface: Enjoy a simple and intuitive interface
              that ensures a seamless user experience, making managing your list
              of individuals a breeze.
            </li>
          </ul>

          <h3>Get Started</h3>
          <p>
            To begin creating your own list of individuals,
            <br />
            click the menu button in the appbar and go to the "My List" page.
            <br />
            You can also check out other lists at the "Popular Lists" page.
            <br />
            Enjoy 😃
          </p>
        </div>
      </Container>
    </Box>
  );
}
