import * as React from 'react';
import { AccordionProps } from './accordion.types';

import styles from './accordion.css';

const Accordion: React.FC<AccordionProps> = ({ foo }) => (
  <div data-testid="accordion" className={styles.accordion}>
    {foo}
  </div>
);

export default Accordion;
