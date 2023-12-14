import React, { createContext, useState, useContext } from "react";

const MyListContext = createContext();

export const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);

  const updateMyList = (
    action,
    index,
    newName,
    newAttribute,
    newAttribute2,
    newAttribute3,
    newColor
  ) => {
    if (action === "add") {
      const validColor = /^#[0-9A-Fa-f]{6}$/;
      if (!validColor.test(newColor)) {
        console.error(
          `Invalid color format. Please use #RRGGBB format: ${newColor}`
        );
        return;
      }

      const newUser = {
        name: newName,
        attribute: newAttribute,
        attribute2: newAttribute2,
        attribute3: newAttribute3,
        color: newColor,
      };

      setMyList([...myList, newUser]);
    }

    if (action === "edit") {
      const validColor = /^#[0-9A-Fa-f]{6}$/;
      if (!validColor.test(newColor)) {
        console.error(
          `Invalid color format. Please use #RRGGBB format: ${newColor}`
        );
        return;
      }

      if (index < 0 || index >= myList.length) {
        console.error(`Invalid index provided for updateMyList: ${index}`);
        return;
      }

      const updatedList = [...myList];
      updatedList[index] = {
        name: newName,
        attribute: newAttribute,
        attribute2: newAttribute2,
        attribute3: newAttribute3,
        color: newColor,
      };
      setMyList(updatedList);
    }

    if (action === "delete") {
      const updatedList = myList.filter((_, i) => i !== index);
      setMyList(updatedList);
    }
  };

  return (
    <MyListContext.Provider value={{ myList, updateMyList }}>
      {children}
    </MyListContext.Provider>
  );
};

export const useMyList = () => {
  return useContext(MyListContext);
};
