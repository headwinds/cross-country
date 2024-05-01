import { SubHeadline, Column, Bolt, Row, Image } from "../../";
import { UserProps } from "./user.types";
//import brandon from "./brandon_square.png";
import jane from "./jane.png";
import styles from "./user.module.css";
import AnonUser from "./anon-user";

import * as React from "react";

const defaultUser = {
  name: "Jane Seymour",
  email: "jane@seymour.go",
  url: jane,
};

interface UserProps {
  data?: typeof defaultUser;
  isAnon?: boolean;
  onChange?: () => void;
}

const User = ({
  data = defaultUser,
  isAnon = false,
  onChange = null,
}: UserProps) => {
  if (isAnon) {
    return <AnonUser onChange={onChange} />;
  }

  const { name, email, url } = data;

  return (
    <Column dataTestId="user" customClass={styles.user}>
      <Row>
        <Column customStyle={{ padding: 0 }}>
          <Row>
            <Image
              a11y={name}
              url={url}
              width={80}
              height={80}
              customStyle={{ borderRadius: "50%", margin: 8 }}
            />
            <SubHeadline size="medium">{name}</SubHeadline>
            <Bolt />
          </Row>
        </Column>
      </Row>
    </Column>
  );
};

export default User;
