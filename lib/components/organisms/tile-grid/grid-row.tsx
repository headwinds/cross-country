import { Row, Tile } from "../../../";

export const GridRow = ({ tiles, id, styles }) => {
  return (
    <Row customClass={styles.row} id={id}>
      {tiles}
    </Row>
  );
};
