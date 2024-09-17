// TODO type check
// @ts-nocheck
import React, { useState } from "react";
import {
  Column,
  Row,
  Button,
  SubHeadline,
  TextArea,
  Paragraph,
  Select,
} from "../../../";
import { Trash, CheckSquare, PencilSimple } from "@phosphor-icons/react";
import ListicleItem from "./listicle-item";

const selectStyle = {
  padding: 7,
  margin: 5,
  color: "#666",
  fontFamily: "Helvetica",
};

type ListicleItemInputProps = {
  id: number;
  updateListicleItem: any;
  url: string;
  category: string;
  removeListicleItem: any;
};

const ListicleItemInput = ({
  id = 0,
  url = "",
  category = "design",
  status = "unknown",
  removeListicleItem = null,
  onChange,
}: ListicleItemInputProps) => {
  const [displayUrl, setDisplayUrl] = useState(url);
  const [selectedCategory, setSelectedCategory] = useState(category);

  const [isEdit, toggleIsEdit] = useState(status === "unsaved" ? false : true);

  console.log("ListicleItemInput url: ", url);

  const saveListicleItem = () => {
    toggleIsEdit(true);
    const changedListicleItem = {
      id,
      url: displayUrl,
      category: selectedCategory,
      status,
    };
    onChange(changedListicleItem);
  };

  const editListicleItem = () => {
    toggleIsEdit(false);
  };

  const onTextChange = (text) => {
    setDisplayUrl(text);
  };

  const onSelectChange = (newSelectedCategory) => {
    setSelectedCategory(newSelectedCategory);
  };

  // did the url or category change?
  const isChange = displayUrl !== url || selectedCategory !== category;

  const isSaveDisabled =
    displayUrl === "" ||
    displayUrl === null ||
    !isChange || // no change
    selectedCategory === "" ||
    selectedCategory === "select" ||
    selectedCategory === null;

  const options = ["design", "programming", "gaming", "search"];

  if (isEdit) {
    return (
      <Column customStyle={{ padding: 0, margin: 0 }}>
        <Row>
          <ListicleItem
            data={{ url: displayUrl, id, category: selectedCategory }}
          />
          <Button
            onClick={() => removeListicleItem(id)}
            customStyle={{ width: 50 }}
          >
            <Trash size={20} />
          </Button>
          <Button
            onClick={() => editListicleItem()}
            customStyle={{ width: 50 }}
          >
            <PencilSimple size={20} />
          </Button>
        </Row>
      </Column>
    );
  }

  return (
    <Column customStyle={{ padding: 0, margin: 0 }}>
      <Row>
        <TextArea
          value={displayUrl}
          onTextChange={onTextChange}
          customStyle={{ minWidth: 400 }}
          rows={1}
          placeholder="Enter your link"
        />
        <Select
          options={options}
          value={selectedCategory}
          onChange={onSelectChange}
        />
        <Button
          onClick={() => removeListicleItem(id)}
          customStyle={{ width: 50 }}
        >
          <Trash size={20} />
        </Button>
        <Button
          onClick={() => saveListicleItem()}
          customStyle={{ width: 50 }}
          isDisabled={isSaveDisabled}
        >
          <CheckSquare size={20} />
        </Button>
      </Row>
    </Column>
  );
};

export default ListicleItemInput;
