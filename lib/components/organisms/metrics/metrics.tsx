import React from 'react';
import {useMemo}  from 'react';  
// components
import { Row, Column, AnimateNumber, Paragraph, PillButton } from '../..';
import styles from "./metrics.module.css";

const Metrics = ({keywords = []}) => {

    const keywordsList = useMemo(() => {
        return keywords.map((keyword, index) => {
            return <PillButton key={index} label={keyword} />;
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
                <Row>
                {keywordsList}
                </Row>
                </Column>
            </Row>
        </Column>
    );
};

export default Metrics;
