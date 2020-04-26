import React, { Component } from "react";
import clsx from "clsx";
import styles from "./grid.scss";
import PropTypes from 'prop-types';

/**
 * Component for displaying elements in grid.
 * 
 * @component
 * @example
 * const children = [<Column><Row /></Column>]
 * const customStyle = {width: 200}
 * return (
 *   <Grid customStyle={customStyle}>
 *      {children}
 *   </Grid>
 * )
 */
const Grid = ({ children, customStyle }) => {
  return <div className={styles.grid} style={customStyle}>{children}</div>;
};

Grid.propTypes = {
  /**
   * Grid's children 
   */
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
  /**
   * Grid's custom style
   */
  customStyle: PropTypes.shape({}),
}

Grid.defaultProps = {
  children: null,
  customStyle: {},
}

export default Grid;
