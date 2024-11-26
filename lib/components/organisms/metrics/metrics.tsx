import React from "react";
import { useMemo } from "react";
// components
import { Row, Column, AnimateNumber, Paragraph, Button } from "../..";
import styles from "./metrics.module.css";

export interface MetricsProps {
  keywords?: string[];
}

const Metrics = ({ keywords = [] }) => {
  const keywordsList = useMemo(() => {
    return keywords.map((keyword, index) => {
      return <Button key={index}>{keyword}</Button>;
    });
  }, [keywords]);

  return (
    <Column customClass={styles.metricsContainer}>
      {/*
            Phase 2 
            <Row>
                <Column>
                
                <Paragraph>Filters</Paragraph>
                </Column>
                <Column>
                    <AnimateNumber to={1000} from={0} />
                </Column>
            
            </Row>*/}
      <Row>
        <Paragraph>Keywords</Paragraph>
        <Column>
          <Row>{keywordsList}</Row>
        </Column>
      </Row>
    </Column>
  );
};

export default Metrics;
