import React, { useState, useEffect } from "react";
import styles from "./listicle.module.css";
import { useForm } from "react-hook-form";
import {
  Form,
  TextInput,
  Paragraph,
  Link,
  List,
  ListItem,
  Column,
  SubHeadline,
  Error,
} from "../..";
import Keywords from "../keywords";

const PostLink = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("PostLink onSubmit data: ", data);

    submitForm(data);
  };

  const isDisabled = errors.length > 0;

  const keywords = ["cabin", "carbon", "climate", "emissions", "greenhouse"];

  return (
    <Column className={styles.container}>
      <Paragraph>Post your link!</Paragraph>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput />
        <Paragraph>Add an optional description</Paragraph>
        <TextInput />
        <Keywords keywords={keywords} />
        <TextInput type="submit" isDisabled={isDisabled} />
      </Form>
    </Column>
  );
};

export default PostLink;
