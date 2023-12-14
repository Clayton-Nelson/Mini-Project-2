import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ListCard = ({ info }) => {

  const Title = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h5" sx={{
            border: "none",
            background: "none",
            outline: "none",
            textAlign: "center",
            color: "black",
            width: "100%",
          }}>
          {info.title}
        </Typography>
      </Box>
    );
  };

  const Details = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="body" sx={{
            border: "none",
            background: "none",
            outline: "none",
            textAlign: "center",
            color: "black",
            width: "100%",
            textWrap: "wrap",
          }}>
          {info.details}
        </Typography>
      </Box>
    );
  };

  const Link = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button><NavLink to={info.link}>See List</NavLink></Button>
      </Box>
    );
  };


  return (
    <Card
      sx={{
        width: "200px",
        height: "200px",
        marginTop: "20px",
        marginBottom: "20px",
        position: "relative",
      }}
    >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "0",
            }}
          >
          <Title />
          <Details />  
            <Link />
          </CardContent>
    </Card>
  );
};
