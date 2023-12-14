import React, { useState, useRef, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { useMyList } from "../context/MyListContext";
import { Zoom } from "@mui/material";

export const BasicCard = ({ index, info }) => {
  const nameRef = useRef(null);
  const attributeRef = useRef(null);
  const attributeRef2 = useRef(null);
  const attributeRef3 = useRef(null);
  const colorRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isModified, setIsModified] = useState(false);

  const handleEditButtonClick = () => {
    setIsOverlayVisible(false);
    setIsModified(true);
  };

  const handleOverlayHover = (hover) => {
    if (isOverlayVisible) {
    setIsHovered(hover);
    }
  };

  const handleDeleteButtonClick = (e) => {
    e.preventDefault();
    updateMyList(
      "delete",
      index,
      nameRef.current.value,
      attributeRef.current.value,
      attributeRef2.current.value,
      attributeRef3.current.value,
      colorRef.current.value
    );
  };

  const handleInputChange = () => {
    if (
      nameRef.current.value !== info.name ||
      attributeRef.current.value !== info.attribute ||
      attributeRef2.current.value !== info.attribute2 ||
      attributeRef3.current.value !== info.attribute3 ||
      colorRef.current.value !== info.color
    ) {
      setIsModified(true);
    } else {
      setIsModified(false);
    }
  };

  const { updateMyList } = useMyList();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMyList(
      "edit",
      index,
      nameRef.current.value,
      attributeRef.current.value,
      attributeRef2.current.value,
      attributeRef3.current.value,
      colorRef.current.value
    );
    setIsModified(false);
    setIsOverlayVisible(true);
  };

  const handleReset = () => {
    nameRef.current.value = info.name;
    attributeRef.current.value = info.attribute;
    attributeRef2.current.value = info.attribute2;
    attributeRef3.current.value = info.attribute3;
    colorRef.current.value = info.color;
    setIsModified(false);
    setIsOverlayVisible(true);
  };

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.value = info.name;
    }
  });

  useEffect(() => {
    if (attributeRef.current) {
      attributeRef.current.value = info.attribute;
    }
  });

  useEffect(() => {
    if (attributeRef2.current) {
      attributeRef2.current.value = info.attribute2;
    }
  });

  useEffect(() => {
    if (attributeRef3.current) {
      attributeRef3.current.value = info.attribute3;
    }
  });

  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.value = info.color;
    }
  });

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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          ref={attributeRef2}
          onChange={handleInputChange}
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
          ref={attributeRef3}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
        Assigned Colour:
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
          right: "70px",
          display: "flex",
        }}
      >
        <Zoom in={isModified}>
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              display: "flex",
              padding: "1px",
              alignItems: "center",
              backgroundColor: "green",
              height: "20px",
              width: "20px",
            }}
          >
            ✓
          </button>
        </Zoom>
      </Box>
    );
  };

  const ResetButton = () => {
    return (
      <Box
        sx={{
          position: "absolute",
          bottom: "2px",
          left: "70px",
          display: "flex",
        }}
      >
        <Zoom in={isModified}>
          <button
            type="button"
            onClick={handleReset}
            style={{
              display: "flex",
              padding: "2px",
              alignItems: "center",
              backgroundColor: "red",
              height: "20px",
              width: "20px",
            }}
          >
            ✕
          </button>
        </Zoom>
      </Box>
    );
  };

  return (
    <Card
      onMouseEnter={() => handleOverlayHover(true)}
      onMouseLeave={() => handleOverlayHover(false)}
      sx={{
        width: "200px",
        height: "200px",
        marginTop: "20px",
        marginBottom: "20px",
        position: "relative",
      }}
    >
      {isOverlayVisible && isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <button onClick={handleEditButtonClick}>Edit</button>
          <button style={{ backgroundColor: "red" }} onClick={handleDeleteButtonClick}>Delete</button>
        </div>
      )}

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
