import React, { useState } from "react";
import {
  Column,
  Row,
  Radio,
  Label,
  TextInput,
  Paragraph,
} from "../../../../../";
import EditOptionList from "./edit-option-list";
import { PlusSquare } from "@phosphor-icons/react";

const AddMedia = () => {
  const data = { options: [] };

  const onChange = () => {};
  const getSelected = () => {};
  const getTabIndex = () => {};

  return (
    <Column>
      <Paragraph>
        You can add up to 5 media urls but usually adding a single image or
        video url looks the best.
      </Paragraph>
      <EditOptionList data={data} />
    </Column>
  );
};

export default AddMedia;
