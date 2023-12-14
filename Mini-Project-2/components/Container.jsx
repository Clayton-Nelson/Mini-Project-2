import { Box } from "@mui/material";

export default function Container({ children, type }) {
  let alignItemsValue = "flex-start";

  if (type === "text") {
    alignItemsValue = "center";
  } else if (type === "card") {
    alignItemsValue = "flex-start";
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        direction: "row",
        justifyContent: "space-evenly",
        alignItems: alignItemsValue,
        width: "95%",
        height: "60vh",
        overflowY: "auto",
        border: "5px solid gray",
        borderRadius: "10px",
        boxShadow: "5px 5px 5px 9px #1a1a1a",
      }}
    >
      {children}
    </Box>
  );
}
