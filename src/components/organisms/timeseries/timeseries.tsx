import * as React from 'react';
import { Column, Link } from '../../';
import { TimeseriesProps } from './timeseries.types';

import styles from './timeseries.scss';

const Timeseries: React.FC<TimeseriesProps> = ({ foo }) => {
  return (
    <Column dataTestId="timeseries" customClass={styles.Timeseries}>
      <Link url="https://towardsdatascience.com/what-you-need-to-know-for-your-arima-time-series-project-804713b8f00d">
        timeseries ARIMA
      </Link>
    </Column>
  );
};

export default Timeseries;
