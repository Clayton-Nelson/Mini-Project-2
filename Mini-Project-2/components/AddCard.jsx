import React, { useRef, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMyList } from "../context/MyListContext";
import { Zoom } from "@mui/material";

export const AddCard = () => {
  const nameRef = useRef(null);
  const attributeRef = useRef(null);
  const attribute2Ref = useRef(null);
  const attribute3Ref = useRef(null);
  const colorRef = useRef(null);

  useEffect(() => {
    nameRef.current.value = "Add Name";
    attributeRef.current.value = "Add Attribute 1";
    attribute2Ref.current.value = "Add Attribute 2";
    attribute3Ref.current.value = "Add Attribute 3";
    colorRef.current.value = "#000000";
  });

  const { updateMyList } = useMyList();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMyList(
      "add",
      "0",
      nameRef.current.value,
      attributeRef.current.value,
      attribute2Ref.current.value,
      attribute3Ref.current.value,
      colorRef.current.value
    );
  };

  const handleReset = () => {
    nameRef.current.value = "Add Name";
    attributeRef.current.value = "Add Attribute 1";
    attribute2Ref.current.value = "Add Attribute 2";
    attribute3Ref.current.value = "Add Attribute 3";
    colorRef.current.value = "#000000";
  };

  const Name = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          name="name"
          ref={nameRef}
          autoComplete="off"
          style={{
            border: "none",
            background: "none",
            outline: "none",
            textAlign: "center",
            color: "black",
            fontSize: "25px",
            width: "100%",
          }}
        />
      </Box>
    );
  };

  const Attribute = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          name="attribute"
          ref={attributeRef}
          autoComplete="off"
          style={{
            border: "none",
            background: "none",
            outline: "none",
            textAlign: "center",
            color: "black",
            fontSize: "15px",
            width: "100%",
          }}
        />
      </Box>
    );
  };

  const Attribute2 = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          name="attribute"
          ref={attribute2Ref}
          autoComplete="off"
          style={{
            border: "none",
            background: "none",
            outline: "none",
            textAlign: "center",
            color: "black",
            fontSize: "15px",
            width: "100%",
          }}
        />
      </Box>
    );
  };

  const Attribute3 = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          name="attribute"
          ref={attribute3Ref}
          autoComplete="off"
          style={{
            border: "none",
            background: "none",
            outline: "none",
            textAlign: "center",
            color: "black",
            fontSize: "15px",
            width: "100%",
          }}
        />
      </Box>
    );
  };

  const ColorBox = () => {
    return (
      <Box>
        <input
          type="color"
          name="color"
          ref={colorRef}
          autoComplete="off"
          style={{
            padding: "0px",
            border: "none",
            width: "30px",
            height: "30px",
            background: "transparent",
            marginLeft: "5px",
          }}
        />
      </Box>
    );
  };

  const Color = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingBottom: "10px",
        }}
      >
        Assign A Colour:
        <ColorBox />
      </Box>
    );
  };

  const SubmitButton = () => {
    return (
      <Box
        sx={{
          position: "absolute",
          bottom: "2px",
          right: "50px",
          display: "flex",
        }}
      >
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              display: "flex",
              padding: "1px",
              alignItems: "center",
              backgroundColor: "green",
              height: "20px",
              width: "35px",
            }}
          >
            Add
          </button>
      </Box>
    );
  };

  const ResetButton = () => {
    return (
      <Box
        sx={{
          position: "absolute",
          bottom: "2px",
          left: "50px",
          display: "flex",
        }}
      >
          <button
            type="button"
            onClick={handleReset}
            style={{
              display: "flex",
              padding: "2px",
              alignItems: "center",
              backgroundColor: "red",
              height: "20px",
              width: "50px",
            }}
          >
            Reset
          </button>
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
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          height: "100%",
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
          <Name />
          <Attribute />
          <Attribute2 />
          <Attribute3 />
          <Color />
        </CardContent>
      </form>
      <SubmitButton />
      <ResetButton />
    </Card>
  );
};
