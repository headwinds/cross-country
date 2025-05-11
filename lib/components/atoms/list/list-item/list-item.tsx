import React, { Component } from "react";
import styles from "../list.module.css";
import clsx from "clsx";

/*
is my child an anchor ?!

  <li role="none" class="plp_navItem35k5U plpselectedNav_14Xzh" id="FrontShopMobileShopNavNode">
     <a href="/?nav=home" role="menuitem">Shop</a>
  </li>
*/

export interface ListItemProps {
  children: React.ReactNode;
  customClass?: string;
  customStyle?: React.CSSProperties;
  role?: string;
  id?: string;
}

const ListItem = ({
  children,
  customClass = "",
  customStyle = {},
  id,
  ...rest
}: ListItemProps) => (
  <li
    {...rest}
    className={clsx(styles.listItem, customClass)}
    style={customStyle}
    id={id}
  >
    {children}
  </li>
);

export default ListItem;
