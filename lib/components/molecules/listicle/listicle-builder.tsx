import React, { useState, useEffect, useMemo } from "react";
import styles from "./listicle.module.css";
import {
  Link,
  List,
  ListItem,
  Checkbox,
  Column,
  Button,
  SubHeadline,
  Label,
  Error,
  Loading,
  Listicle,
  HeadwindsLogo,
  HorizontalLine,
  EditTitleInput,
  Row,
  User,
} from "../..";
// add listicle items
import EditListicleItemList from "./edit-listicle-item-list";
// state machine
import { useMachine } from "@xstate/react";
import { buildListicleMachine } from "./build-listicle-machine";

const ListicleBuilder = () => {
  const [state, send] = useMachine(buildListicleMachine);

  const { error } = state.context;

  const titleData = {
    id: 0,
    question: "What is the name of this listicle?",
    questionType: "answerInput",
    isRequired: true,
    answer: state.context.title ?? "",
  };
  const onTitleChange = (changeEvent) => {
    // dispatch to state machine
    // send("ADD_LISTICLE_ITEM", { data: { title: e.target.value } });
    const {
      data: { answer },
    } = changeEvent;

    send({
      type: "UPDATE_LISTICLE_TITLE",
      data: { title: answer },
    });
  };

  // TODO: replace with actual data
  const data = { options: [], answer: "hello world" };
  const onChange = (changeEvent) => {
    console.log("EditOptionListStory changed event: ", changeEvent);
    const { event, data } = changeEvent;
    send({ type: event, data });
  };

  const isDisabled =
    state.context.title === null ||
    state.context.title === "" ||
    state.context.listicleItems?.length === 0;

  const saveListicleItem = () => {
    console.log("ListicleBuilder isDisabled ", isDisabled);
    console.log("ListicleBuilder saveListicleItem ", state.context);
    send({ type: "SAVE_LISTICLE" });
  };

  const onUserChange = (user) => {
    // could be anon or logged in user
    console.log("ListicleBuilder onUserChange ", user);
    if (user?.email === "anon@anon.com") {
      send({
        type: "UPDATE_ANON_USER_ACCOUNT_ID",
        data: { userAccountId: user?.id },
      });
    }
  };

  console.log("ListicleBuilder render state.context: ", state.context);

  return (
    <Column className={styles.container}>
      {error ? <Error /> : null}

      <Column>
        <SubHeadline text="Build" />
        <User isAnon={true} onChange={onUserChange} />
        {/* STEPS */}
        <Column>
          <List isOrdered>
            <ListItem>
              <Row>
                <Checkbox />
                <Label>Create your title and add at least one link</Label>
              </Row>
            </ListItem>
          </List>
        </Column>
        <EditTitleInput onChange={onTitleChange} />

        <EditListicleItemList data={data} onChange={onChange} />
        <Button isDisabled={isDisabled} onClick={saveListicleItem}>
          Save
        </Button>
      </Column>

      <HorizontalLine />
      <Column>
        <SubHeadline text="Preview" />
        <Listicle />
      </Column>

      <HeadwindsLogo />
    </Column>
  );
};

export default ListicleBuilder;
