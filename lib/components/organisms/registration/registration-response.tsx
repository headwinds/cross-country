import React, { useEffect } from "react";
import { Column, Paragraph, Row, Link } from "../../";
import styles from "./registration.module.css";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";

const RegistrationResponse = ({ response, onLoginClick }) => {
  const isFail = response?.message?.includes("fail");

  const customStyle = { marginTop: 46 };

  if (isFail) {
    return (
      <Column customStyle={customStyle}>
        <Row>
          <WarningCircle size={32} color="red" />
          <Paragraph
            customStyle={{ marginLeft: 8, maxWidth: 300, fontSize: 14 }}
          >
            {response.message}
          </Paragraph>
        </Row>
      </Column>
    );
  }
  return (
    <Column customStyle={customStyle}>
      <Row>
        <CheckCircle size={32} color="green" />
        <Paragraph customStyle={{ marginLeft: 8, maxWidth: 300, fontSize: 14 }}>
          {response.message}
        </Paragraph>
      </Row>
      <Row>
        <Link
          onClick={onLoginClick}
          customStyle={{ fontSize: 14, margin: 16, cursor: "pointer" }}
        >
          Login
        </Link>
      </Row>
    </Column>
  );
};

export default RegistrationResponse;
