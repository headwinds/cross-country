import React, { useState } from "react";

const FolderComponent = ({ data, level = 0 }) => {
  // State to manage open/closed state of folders
  const [openFolders, setOpenFolders] = useState({});

  // Function to toggle folder open/close state
  const toggleFolder = (folderName) => {
    setOpenFolders((prevOpenFolders) => ({
      ...prevOpenFolders,
      [folderName]: !prevOpenFolders[folderName],
    }));
  };

  // Function to render file or folder
  const renderNode = (node) => {
    if (node.type === "file") {
      return (
        <div style={{ paddingLeft: `${20 * level}px` }}>
          {node.file_name} - {node.size}
        </div>
      );
    } else if (node.type === "folder") {
      const isOpen = openFolders[node.folder_name];
      return (
        <div>
          <div
            style={{ paddingLeft: `${20 * level}px`, cursor: "pointer" }}
            onClick={() => toggleFolder(node.folder_name)}
          >
            {isOpen ? "-" : "+"} {node.folder_name}
          </div>
          {isOpen && <FolderComponent data={node.contents} level={level + 1} />}
        </div>
      );
    }
  };

  return (
    <div>
      {data.map((node, index) => (
        <div key={index}>{renderNode(node)}</div>
      ))}
    </div>
  );
};

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

// Usage
const Folder = () => {
  return <FolderComponent data={[json]} />;
};

export default Folder;
