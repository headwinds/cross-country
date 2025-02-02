import { Row, Tile } from "@headwinds/cross-country";

export const GridRow = ({ tiles, id, styles }) => {
  return (
    <Row customClass={styles.row} id={id}>
      {tiles}
    </Row>
  );
};
