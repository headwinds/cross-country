import React, { useEffect } from "react";
import { Column, Paragraph, Row } from "../../";
import styles from "./registration.module.css";
import { CheckCircle } from "@phosphor-icons/react";

const RegistrationResponse = ({ response }) => {
  return (
    <Column>
      <Row>
        <CheckCircle size={32} color="green" />
        <Paragraph customStyle={{ marginLeft: 8 }}>
          {response.message}
        </Paragraph>
      </Row>
    </Column>
  );
};

export default RegistrationResponse;
