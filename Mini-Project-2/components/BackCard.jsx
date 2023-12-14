import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";

export const BackCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        width: "200px",
        height: "200px",
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span>Click me to go back</span>
      </Box>
    </Button>
  );
};
