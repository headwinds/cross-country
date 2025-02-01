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

const Branch = ({ branch }) => {
  return <GoldLeaf goldLeafModel={branch} mode="view" />;
};
export default Branch;
