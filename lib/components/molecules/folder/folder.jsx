import React, { useState } from "react";
import Column from "../../atoms/column/column";
import styles from "./folder.module.css";
import clsx from "clsx";

const json = {
  folder_name: "RootFolder",
  type: "folder",
  isOpen: true,
  contents: [
    { file_name: "file1.txt", type: "file", size: "1024KB" },
    { file_name: "file2.jpg", type: "file", size: "2048KB" },
    {
      folder_name: "SubFolder1",
      type: "folder",
      isOpen: true,
      contents: [
        { file_name: "subfile1.txt", type: "file", size: "512KB" },
        { file_name: "subfile2.jpg", type: "file", size: "1024KB" },
        {
          folder_name: "SubSubFolder1",
          type: "folder",
          isOpen: false,
          contents: [
            { file_name: "subsubfile1.txt", type: "file", size: "256KB" },
            { file_name: "subsubfile2.jpg", type: "file", size: "512KB" },
          ],
        },
      ],
    },
    {
      folder_name: "SubFolder2",
      type: "folder",
      isOpen: true,
      contents: [
        { file_name: "subfile3.txt", type: "file", size: "768KB" },
        { file_name: "subfile4.jpg", type: "file", size: "1536KB" },
      ],
    },
  ],
};

const FolderItem = ({ file_name, size }) => {
  const text = `${file_name} (${size})`;
  return <div>{text}</div>;
};

const Folder = () => {
  const [state, setState] = useState({ ...json });

  const toggleFolder = (folder_name) => {
    //const findFolder =
    const recurse = (obj) => {
      //console.log("json: ", obj);

      if (obj.type === "folder" && obj.folder_name === folder_name) {
        obj.isOpen = !obj.isOpen;
      }
    };
    recurse(state);
  };

  const renderTree = () => {
    let content = [];

    const recurse = (obj) => {
      console.log("json: ", obj);

      if (obj.type === "folder") {
        const folderNameItem = (
          <>
          <div>{obj.isOpen ? + : -}</div>
          <div onClick={() => toggleFolder(obj.folder_name)}>
            {obj.folder_name}
          </div>
          </>
        );
        content.push(folderNameItem);
        obj.contents.map((item) => recurse(item));
      } else if (obj.file_name) {
        const fileNameItem = <div>{obj.file_name}</div>;
        content.push(fileNameItem);
      }
    };
    recurse(json);

    console.log(content);

    return content;
  };

  return <>{renderTree()}</>;
};

export default Folder;


