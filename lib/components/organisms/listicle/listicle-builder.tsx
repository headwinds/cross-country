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
  TextInput,
  Paragraph,
} from "../..";
// add listicle items
import EditListicleItemList from "./edit-listicle-item-list";
// state machine
import { useMachine } from "@xstate/react";
import buildListicleMachine from "./build-listicle-machine";

const ListicleBuilder = ({ apiDomain = "localhost:5000" }) => {
  const [state, send] = useMachine(buildListicleMachine);

  const {
    error,
    isExistingListicle,
    title,
    enteringTitle,
    listicleItems,
    loadFeedback,
  } = state.context;

  useEffect(() => {
    console.log("ListicleBuilder useEffect state: ", state);
  }, [state]);

  useEffect(() => {
    const savedTitle = localStorage.getItem("lastSavedListicleTitle");
    if (savedTitle && savedTitle !== "" && savedTitle !== "undefined") {
      send({
        type: "ENTERING_TITLE",
        data: { enteringTitle: savedTitle },
      });
    }
    // configure the domain
    send({
      type: "SET_DOMAIN",
      data: { domain: apiDomain },
    });
  }, []);

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

  const data = {
    title: state.context.title,
    listicleItems: state.context.listicleItems,
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
    } else {
      send({
        type: "UPDATE_USER_ACCOUNT_ID",
        data: { userAccountId: user?.id },
      });
    }
  };

  console.log("ListicleBuilder render state.context: ", state.context);

  const onDecideLoadOrCreate = (isExistingListicle) => {
    send({
      type: "UPDATE_LISTICLE_TITLE",
      data: { title: enteringTitle },
    });
    send({
      type: "DECIDE_LOAD_OR_CREATE",
      data: isExistingListicle,
    });

    const hasEitherAnonOrUserAccountId =
      state.context.anonUserAccountId !== null ||
      state.context.userAccountId !== null;

    if (isExistingListicle && hasEitherAnonOrUserAccountId) {
      send({
        type: "SET_LAST_SAVED_LISTICLE_TITLE",
      });
      send({
        type: "LOAD_LISTICLE",
      });
    }
  };

  const onEnteringTitleChange = (enteringTitle) => {
    console.log("ListicleBuilder onLoadTextChange ", enteringTitle);
    if (enteringTitle?.length >= 3) {
      send({
        type: "ENTERING_TITLE",
        data: { enteringTitle },
      });
    }
  };

  const isLoadDisabled =
    enteringTitle === null || enteringTitle === "" || enteringTitle.length < 3;

  // build a new listicle or edit an existing one
  if (isExistingListicle === null) {
    return (
      <Column customClass={styles.container}>
        {error ? <Error /> : null}
        <User isAnon={true} onChange={onUserChange} />
        <Column customClass={styles.container} customStyle={{ width: 400 }}>
          <SubHeadline text="Load Existing or Create New Listicle" />
          <Row>
            <TextInput
              onTextChange={onEnteringTitleChange}
              placeholder="Enter the existing listicle name"
              customStyle={{ flex: 1 }}
              defaultValue={enteringTitle}
            />
            <Button
              onClick={() => onDecideLoadOrCreate(true)}
              isDisabled={isLoadDisabled}
            >
              Load
            </Button>
          </Row>
          <HorizontalLine />
          <Row>
            <TextInput
              onTextChange={onEnteringTitleChange}
              placeholder="Enter a new listicle name"
              customStyle={{ flex: 1 }}
            />

            <Button
              onClick={() => onDecideLoadOrCreate(false)}
              customStyle={{ backgroundColor: "pink" }}
            >
              Create
            </Button>
          </Row>
        </Column>
        {loadFeedback ? (
          <Row>
            <Error message={loadFeedback} />
          </Row>
        ) : null}
      </Column>
    );
  }

  console.log("ListicleBuilder isExistingListicle ", isExistingListicle);
  // existing listicle
  if (isExistingListicle) {
    return (
      <Column customClass={styles.container}>
        {error ? <Error /> : null}

        <Column customClass={styles.container}>
          <SubHeadline text={title} />
        </Column>

        <EditListicleItemList data={data} send={send} />
        {/*
        <Button isDisabled={isDisabled} onClick={saveListicleItem}>
          Save
    </Button>*/}
        <Paragraph>
          Need to make it more clear save happens automatically
        </Paragraph>

        <HorizontalLine />
        <Column customClass={styles.container}>
          <SubHeadline text="Preview" />
          <Listicle data={data} />
        </Column>

        <HeadwindsLogo />
      </Column>
    );
  }
  // new listicle
  return (
    <Column customClass={styles.container}>
      {error ? <Error /> : null}

      <Column customClass={styles.container}>
        <SubHeadline text="Build" />
        <User isAnon={true} onChange={onUserChange} />
        {/* STEPS */}
        <Column customClass={styles.container}>
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

        <EditListicleItemList data={data} send={send} />
        <Button isDisabled={isDisabled} onClick={saveListicleItem}>
          Save
        </Button>
      </Column>

      <HorizontalLine />
      <Column customClass={styles.container}>
        <SubHeadline text="Preview" />
        <Listicle data={data} />
      </Column>

      <HeadwindsLogo />
    </Column>
  );
};

export default ListicleBuilder;
