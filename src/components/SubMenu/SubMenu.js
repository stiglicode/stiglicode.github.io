import React, { useRef } from "react";

import Filter from "../Filter/Filter";
import "./css/SubMenu.style.css";

import Icon from "../Icon/Icon";

const SubMenu = () => {
  return (
    <div className="w-100 row bs-padd-l bs-padd-r align-center justify-between">
      <LayoutChanger />
      <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} className="hr-g" />
      <Filter />
    </div>
  );
};
const LayoutChanger = () => {
  const onClass = "lo-btn__OFF";
  const icons = {
    grid: useRef(),
    row: useRef(),
  };
  const filterClickHandler = () => {
    for (const key in icons) {
      let currentEle = icons[key].current.classList;
      currentEle.forEach((el) => {
        if (el === onClass) {
          currentEle.remove(onClass);
        } else if (el !== onClass) {
          currentEle.add(onClass);
        }
      });
    }
  };
  return (
    <div className="row">
      <i
        className="btn-ui lo-box_ico click-up click-opac lo-btn__OFF tool-tip t-t-delay"
        onClick={filterClickHandler}
        ref={icons.grid}
        key="aa"
      >
        <Icon size={{ w: 30, h: 30 }} type="grid" ui="ico-hue" />
      </i>
      <i
        className="btn-ui lo-box_ico click-up click-opac tool-tip t-t-delay"
        onClick={filterClickHandler}
        ref={icons.row}
      >
        <Icon size={{ w: 30, h: 30 }} type="grid-row" ui="ico-hue" />
      </i>
    </div>
  );
};
export default SubMenu;
