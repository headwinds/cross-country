import * as React from "react";
import { useState, useMemo } from "react";
import EditOptionList from "../edit-option-list";
import { Form, Row, Paragraph, TextInput, RadioGroup } from "../../../../";


const EditOptionListStory = ({data}) => {


  return (

      <Question
        register={register}
        handleQuestionChange={handleQuestionChange}
        data={data}
      />

  );
};

export default EditOptionListStory;
