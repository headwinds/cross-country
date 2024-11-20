import React, { useState } from "react";
//import { getOffline, putOffline } from '../../../utils/golds/offline-util';
import { GoldLeaf } from "../..";

import {
  addItemToStore,
  getItemFromStore,
  deleteItemFromStore,
  updateItemInStore,
} from "../../../utils/golds/indexdb-util";

const GOLD_COLOUR = "#E3D597";

export interface BranchProps {
  branch: any;
}

const Branch = ({ branch }) => {
  return <GoldLeaf goldLeafModel={branch} mode="view" />;
};
export default Branch;
