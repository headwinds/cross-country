import React from 'react';
import LineChart from '../line/line-chart';
import BottomAxis from '../axis/bottom-axis';
import styles from './chart.module.css';


interface ChartProps {
    data: number[];
    labels: string[];
    variant: "line" | "bar";
}

const defaultLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const Chart: React.FC<ChartProps> = ({ data, labels = defaultLabels, variant = "line" }) => {
    return (
        <div className={styles.container}>
            <LineChart data={data} />
            <BottomAxis labels={labels} />
        </div>
    );
};

export default Chart;
