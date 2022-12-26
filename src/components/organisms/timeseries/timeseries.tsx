import * as React from "react";
import { TimeseriesProps } from "./timeseries.types";

import styles from "./timeseries.scss";

const Timeseries: React.FC<TimeseriesProps> = ({ foo }) => (
    <div data-testid="timeseries" className={styles.Timeseries}>{foo || "missng prop foo"}</div>
);

export default Timeseries;

