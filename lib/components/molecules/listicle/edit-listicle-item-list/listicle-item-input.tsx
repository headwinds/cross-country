import React, { useState } from "react";
import {
  Column,
  Row,
  Button,
  SubHeadline,
  TextArea,
  Paragraph,
} from "../../../";
import { Trash, CheckSquare, PencilSimple } from "@phosphor-icons/react";
import ListicleItem from "./listicle-item";

const selectStyle = {
  padding: 7,
  margin: 5,
  color: "#666",
  fontFamily: "Helvetica",
};

const ListicleItemInput = ({
  id = 0,
  updateListicleItem,
  value = "",
  category = "design",
  removeListicleItem = null,
  answer,
}) => {
  const [option, setListicleItem] = useState(value);
  const [selectedCategorgy, setSelectedCategory] = useState(category);
  const [isEdit, toggleIsEdit] = useState(false);

  const saveListicleItem = () => {
    toggleIsEdit(true);
    updateListicleItem(id, option, selectedCategorgy);
  };

  const editListicleItem = () => {
    toggleIsEdit(false);
  };

  if (isEdit) {
    return (
      <Column customStyle={{ padding: 0, margin: 0 }}>
        <Row>
          <ListicleItem
            data={{ value: option, id, category: selectedCategorgy }}
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

  if (answer && answer === option) {
    const data = { id, value: answer };
    return (
      <Column customStyle={{ padding: 0, margin: 0 }}>
        <ListicleItem data={data} />
      </Column>
    );
  }

  const checkTextAgainstAnswer = (text) => {
    if (text !== answer) {
      setListicleItem(text);
    }
  };

  const onSelectChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
  };

  const isSaveDisabled =
    option === "" ||
    option === null ||
    selectedCategorgy === "" ||
    selectedCategorgy === "select" ||
    selectedCategorgy === null;

  return (
    <Column customStyle={{ padding: 0, margin: 0 }}>
      <Row>
        <TextArea
          value={option}
          onTextChange={checkTextAgainstAnswer}
          customStyle={{ width: "60%" }}
          rows={1}
          placeholder="Enter your link"
        />
        <select
          onChange={onSelectChange}
          style={selectStyle}
          value={selectedCategorgy}
        >
          <option value="select">select...</option>
          <option value="design">design</option>
          <option value="programming">programming</option>
          <option value="gaming">gaming</option>
        </select>
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
