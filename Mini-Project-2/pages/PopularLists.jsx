import Title from "../components/Title";
import Container from "../components/Container";
import ButtonAppBar from "../components/AppBar";
import { Box } from "@mui/material";
import { ListCard } from "../components/ListCard";
import { Outlet } from "react-router";
import { FriendsList, BillionairesList, ActorsList, BruceLeeList } from "../Arrays/PopularListsArrays";
import { InfoCard } from "../components/InfoCard";
import { BackCard } from "../components/BackCard";

const lists = [
  {
    title: "Friends",
    details: "This is a list with all the main cast from the tv show Friends™",
    link: "friends",
  },
  {
    title: "Billionares",
    details: "This is a list with all the richest people in the world",
    link: "billionares",
  },
  {
    title: "Actors",
    details: "This is a list with some of the biggest actors",
    link: "actors",
  },
  {
    title: "Bruce Lee",
    details: "This is a list with all the fights Bruce Lee has lost",
    link: "brucelee",
  },
];

export default function PopularLists() {
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
      <Title>Popular Lists</Title>
      <Container type="card">
        <Outlet />
      </Container>
    </Box>
  );
}

export function Lists(props) {
  return (
    <>
      {lists.map((item, index) => (
        <ListCard key={index} info={item} />
      ))}
    </>
  );
}

export function Friends(props) {
  return (
  <>
  {FriendsList.map((item, index) => (
        <InfoCard key={index} info={item} />
      ))}
      <BackCard />
  </>
  );
}

export function Billionares(props) {
  return (
  <>
  {BillionairesList.map((item, index) => (
        <InfoCard key={index} info={item} />
      ))}
      <BackCard />
  </>
  );
}

export function Actors(props) {
  return (
  <>
  {ActorsList.map((item, index) => (
        <InfoCard key={index} info={item} />
      ))}
      <BackCard />
  </>
  );
}

export function BruceLee(props) {
  return (
  <>
  {BruceLeeList.map((item, index) => (
        <InfoCard key={index} info={item} />
      ))}
      <BackCard />
  </>
  );
}
