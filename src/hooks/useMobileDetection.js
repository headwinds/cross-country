import React, { useContext } from "react";
import { getIsMobile } from "../utils";

export default function usDeviceDetection() {
  const isMobile = getIsMobile();
  const device = isMobile ? "mobile" : "desktop";

  const DeviceContext = React.createContext(device);

  const state = useContext(DeviceContext);

  if (state === undefined) {
    throw new Error("Ut oh, where is my state?");
  }
  return state;
}
