import Typography from "@mui/material/Typography";

export default function Title(props) {
  return (
    <Typography
      variant="h1"
      sx={{
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      {props.children}
    </Typography>
  );
}
