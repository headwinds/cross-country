import React from "react";
import { useMemo } from "react";
// components
import { Row, Column, Paragraph, Button, Label } from "../..";
import { PlusSquare } from "@phosphor-icons/react";
import styles from "./keywords.module.css";

export interface KeywordsProps {
  keywords?: string[];
}

const Keywords = ({ keywords = [] }) => {
  const keywordsList = useMemo(() => {
    return keywords.map((keyword, index) => {
      return <Button key={index}>{keyword}</Button>;
    });
  }, [keywords]);

  const addOption = () => {};

  return (
    <Column customClass={styles.metricsContainer}>
      <Row>
        <Paragraph>Keywords</Paragraph>
        <Column>
          <Row>{keywordsList}</Row>
        </Column>
        <Row>
          <Button onClick={addOption} customStyle={{ width: 50 }}>
            <PlusSquare size={20} />
          </Button>
          <Label>Add Option</Label>
        </Row>
      </Row>
    </Column>
  );
};

export default Keywords;
