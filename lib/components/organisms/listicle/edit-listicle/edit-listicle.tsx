// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React, { useState, useEffect } from "react";
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
} from "../../../";
import ListicleItemInput from "./listicle-item-input";
import { PlusSquare } from "@phosphor-icons/react";
import { editListicleItemListMachine } from "./edit-listicle-item-list-machine";
import EditListicleItemList from "../edit-listicle-item-list";
import { useMachine } from "@xstate/react";

const EditListicle = ({ data, onChange }) => {
  const onTitleChange = (changeEvent) => {};

  const onListicleItemChange = (changeEvent) => {};

  return (
    <Column>
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

      <EditListicleItemList data={data} onChange={onListicleItemChange} />
      {/*<Button isDisabled={isDisabled} onClick={saveListicleItem}>
        Save
      </Button>*/}
    </Column>
  );
};

export default EditListicle;
