import { SubHeadline, Column, Bolt, Row, Image } from "../../";
import { UserProps } from "./user.types";
import brandon from "./brandon_square.png";
import styles from "./user.module.css";
import AnonUser from "./anon-user";

import * as React from "react";

const User = ({ data, isAnon = false }: UserProps) => {
  if (isAnon) {
    return <AnonUser />;
  }

  return (
    <Column dataTestId="user" customClass={styles.user}>
      <Row>
        <Column customStyle={{ padding: 0 }}>
          <Row>
            <Image
              a11y="brandon flowers"
              url={brandon}
              width={80}
              height={80}
              customStyle={{ borderRadius: "50%", margin: 8 }}
            />
            <SubHeadline size="medium">Brandon Flowers</SubHeadline>
            <Bolt />
          </Row>
        </Column>
      </Row>
    </Column>
  );
};

export default User;
