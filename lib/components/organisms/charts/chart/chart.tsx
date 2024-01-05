import React, { useState } from 'react';
import LineChart from '../line/line-chart';
import Scatterplot from '../scatterplot/scatterplot';
import BottomAxis from '../axis/bottom-axis';
import styles from './chart.module.css';
import ChartGoldLeaf from './chart-gold-leaf';


type ChartVariants = "line" | "bar" | "scatterplot";

interface ChartProps {
    data: number[];
    variant?: ChartVariants;
}

type ChartState = {
    isGolfLeafVisible?: boolean;
    goldLeafModel: any;
    x: number;
    y: number;
    goldLeafCustomStyle?: any;
}

type ChartClickType = {
    pointEvent?: any;
    model: any;
    x: number;
    y: number;
}

const Chart = ({ data, variant = "scatterplot" }: ChartProps) => {

    if (!data) return null;

    const [state, setState] = useState<ChartState>({isGolfLeafVisible: false, goldLeafModel: null, goldLeafCustomStyle: null, x: 0, y: 0});

    const onClick = ({model, x, y}: ChartClickType) => {
        console.log("Chart clicked model: ", model);
        // let's get the model for the gold leaf
        const CARD_WIDTH = 370;
        const CARD_HEIGHT = 400;

        const left = Math.floor(x - (CARD_WIDTH / 2));
        //const top = Math.floor(y - (CARD_HEIGHT / 2));
        // need to sort out the top position based on available space
        const top = y;

        const goldLeafCustomStyle = { top, left, position: "absolute", width: CARD_WIDTH, height: CARD_HEIGHT, background: "whitesmoke" }

       //setState({isGolfLeafVisible: true, goldLeafModel: model, x, y, goldLeafCustomStyle});
    }

    const RenderChart = () => {
        switch (variant) {
            case "line":
                return <LineChart data={data} onClick={onClick} />;
            case "scatterplot":
                return <Scatterplot data={data} onClick={onClick} />;
            default:
                return null;
        }
    }

    const bottomAxisData = data ? data.map( d => d) : [];
    const startDate = bottomAxisData[0];
    const endDate = bottomAxisData[bottomAxisData.length - 1];

    const {isGolfLeafVisible, goldLeafModel, goldLeafCustomStyle} = state;

    return (
        <div className={styles.container}>
            <ChartGoldLeaf isGolfLeafVisible={isGolfLeafVisible} goldLeafModel={goldLeafModel} goldLeafCustomStyle={goldLeafCustomStyle} />
            <RenderChart />
            <BottomAxis dateConfig={{ startDate, endDate }} />
        </div>
    );
};

export default Chart;
