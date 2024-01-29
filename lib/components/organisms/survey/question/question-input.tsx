import React from "react";
import { Column, SubHeadline, Paragraph, TextInput } from "../../../";

const QuestionInput = ({
  data,
  onChange = null,
  //value = "",
  placeholder = "",
  register,
  name = "example",
  customClass = "border-2 border-gray-200 rounded-sm m-2", // to support Tailwind CSS or any css class
}) => {
  const { question } = data;
  console.log("QuestionInput data: ", data);
  return (
    <Column>
      <Paragraph customClass="m-2">{question}</Paragraph>
      <TextInput
        //value={value}
        placeholder={placeholder}
        onTextChange={onChange}
        customClass={customClass}
        customStyle={{ width: "100%" }}
        register={register}
        name={name}
      />
    </Column>
  );
};

export default QuestionInput;
