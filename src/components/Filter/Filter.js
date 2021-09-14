import React, { useRef, useEffect, useState } from "react";
import "./css/Filter.style.css";
import Icon from "../Icon/Icon";
import toggleClick from "../../toggle";
import FilterSetting from "../../filter.config.json";

const Filter = (props) => {
  const iconClass = useRef();
  const rollDown = useRef();

  const [rollDownLength, setRolldownLength] = useState(0);
  const [activeElements, setActiveElements] = useState([]);
  const [selectedFilter, setFilterSelection] = useState([]);

  useEffect(() => {
    return setRolldownLength(rollDown.current.children.length * 40);
  }, []);
  const toNum = (numArr) => {
    return numArr.map((num) => {
      return +num;
    });
  };
  const rollDownFilterMenuHandler = (e) => {
    toggleClick({ open: "non-botom-border" }, e.currentTarget);
    toggleClick({ open: "rdb-ON" }, rollDown.current);
    toggleClick({ open: "rotate-270__ico", close: "rotate-90__ico" }, iconClass.current);
  };

  const rolldownResponseHandler = (data) => {
    if (data.status) {
      return (
        setFilterSelection(selectedFilter.concat(data.message + " | ")),
        setActiveElements(activeElements.concat(data.id))
      );
    } else {
      return (
        setFilterSelection(selectedFilter.filter((item) => item !== data.message + " | ")),
        setActiveElements(activeElements.filter((item) => item !== data.id))
      );
    }
  };
  useEffect(() => {
    return props.filterData(toNum(activeElements));
  }, [activeElements]);
  return (
    <div className="column filter-cont">
      <div className="row filter-btn-box btn-ui click-opac" onClick={rollDownFilterMenuHandler}>
        <div className="row filter-btn">
          <i ref={iconClass} className="ico rotate-270__ico">
            <Icon size={{ h: 24, w: 24 }} type="arrow" ui="ico-hue" />
          </i>
        </div>
        <div className="row filter-text-box">
          <i className="ico">
            <Icon size={{ h: 30, w: 30 }} type="filter" ui="ico-hue" />
          </i>
          <div className="filter-text">
            <span>Sort by&nbsp;</span>
            <span>{selectedFilter}</span>
          </div>
        </div>
      </div>
      <div className="roll-down-cont">
        <div className="roll-down-box" ref={rollDown} style={{ transform: `translateY(-${rollDownLength}px)` }}>
          {FilterSetting.map((eachEle, k) => {
            return (
              <RollDownElement msg={eachEle.name} filter-id={eachEle.id} response={rolldownResponseHandler} key={k} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const RollDownElement = (props) => {
  var [activeBtn, setActiveBtn] = useState(false);

  const handleChecking = () => {
    if (activeBtn === false) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
    return props.response({ status: activeBtn ? false : true, message: props.msg, id: props["filter-id"] });
  };
  return (
    <div onClick={handleChecking} className="container-checkbox">
      <CheckBox status={activeBtn} />
      <span className="checkbox-msg row">
        <span className="">Filter&nbsp;</span>
        <span>{props.msg}</span>
      </span>
    </div>
  );
};
const CheckBox = (props) => {
  return (
    <span className="checkbox">
      <span className="checkmark" style={{ display: props.status ? "block" : "none" }}></span>
    </span>
  );
};

export default Filter;
