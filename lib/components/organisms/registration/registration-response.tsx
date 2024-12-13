import React, { useEffect } from "react";
import { Paragraph, Row, Link } from "../../";
import styles from "./registration.module.css";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";

const RegistrationResponse = ({ response, onLoginClick }) => {
  if (!response) {
    return null;
  }

  return (
    <Row customStyle={{ justifyContent: "flex-end" }}>
      {!onLoginClick && !response.hasError ? (
        <Link
          onClick={onLoginClick}
          customStyle={{ fontSize: 14, margin: 16, cursor: "pointer" }}
        >
          Login
        </Link>
      ) : null}
      <Paragraph customStyle={{ marginLeft: 8, maxWidth: 300, fontSize: 14 }}>
        {response.message}
      </Paragraph>
      {response.hasError ? (
        <WarningCircle size={32} color="red" />
      ) : (
        <CheckCircle size={32} color="green" />
      )}
    </Row>
  );
};

export default RegistrationResponse;
