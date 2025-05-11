import React, { useState } from "react";
//import { getOffline, putOffline } from '../../../utils/golds/offline-util';
import { GoldLeaf } from "../..";

import {
  addItemToStore,
  getItemFromStore,
  deleteItemFromStore,
  updateItemInStore,
} from "../../../utils/golds/indexdb-util";
import { PortholeBranchModel } from "@/lib/models";

const GOLD_COLOUR = "#E3D597";

export interface BranchProps {
  branch: PortholeBranchModel;
}

/*
A branch should have more than one gold leaf but that can be phase 2
*/

const Branch = ({ branch }) => {
  // don't render empty leafs

  if (branch?.title === "") {
    return null;
  }

  return <GoldLeaf goldLeafModel={branch} mode="view" />;
};
export default Branch;
