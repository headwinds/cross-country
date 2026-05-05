import * as React from "react";
import { Column } from "../..";

/**
 * Rendered by `<Branches />` when the upstream fetch completes but returns
 * zero branches (e.g. all selected feeds were rate-limited, returned empty
 * arrays, or the publisher was unreachable). Without this, the component
 * would stay stuck on the `<Loading />` spinner forever.
 */
const BranchesEmpty = () => {
  return (
    <Column
      dataTestId="branches-empty"
      customStyle={{
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        textAlign: "center",
        color: "#71717a",
        gap: 8,
      }}
    >
      <p style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>
        No posts found
      </p>
      <p style={{ fontSize: 14, margin: 0 }}>
        These feeds didn&apos;t return any articles right now. Try a different
        category or come back later.
      </p>
    </Column>
  );
};

export default BranchesEmpty;
