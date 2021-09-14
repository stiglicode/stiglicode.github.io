import React, { useState, useEffect } from "react";

import Filter from "../Filter/Filter";
import "./css/SubMenu.style.css";

import Icon from "../Icon/Icon";

const SubMenu = (props) => {
  const filterResponse = (data) => {
    return props.filterData(data);
  };
  const btnTunnel = (data) => {
    return props.layoutData(data);
  };
  return (
    <div className="w-100 row bs-padd-l bs-padd-r align-center justify-between">
      <LayoutChanger buttonsID={btnTunnel} />
      <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} className="hr-g" />
      <Filter filterData={filterResponse} />
    </div>
  );
};
const LayoutChanger = (props) => {
  const [buttonActive, setButtonActive] = useState(2);
  const handlerLayoutRow = () => {
    const id = 1;
    return setButtonActive(id), props.buttonsID(id);
  };
  const handlerLayoutGrid = () => {
    const id = 2;
    return setButtonActive(id), props.buttonsID(id);
  };

  return (
    <div className="row">
      <i
        className={`btn-ui lo-box_ico click-up click-opac tool-tip t-t-delay ${
          buttonActive === 2 ? "lo-btn__OFF" : ""
        }`}
        onClick={handlerLayoutRow}
        key={1}
      >
        <Icon size={{ w: 30, h: 30 }} type="grid" ui="ico-hue" />
      </i>
      <i
        className={`btn-ui lo-box_ico click-up click-opac tool-tip t-t-delay ${
          buttonActive === 1 ? "lo-btn__OFF" : ""
        }`}
        onClick={handlerLayoutGrid}
        key={2}
      >
        <Icon size={{ w: 30, h: 30 }} type="grid-row" ui="ico-hue" />
      </i>
    </div>
  );
};
export default SubMenu;
