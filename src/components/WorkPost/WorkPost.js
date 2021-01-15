import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./css/WorkPost.style.css";

import Icon from "../Icon/Icon";

const WorkPostTemplate = (props) => {
  // states
  const [luvCounted, countLuv] = useState(Math.floor(Math.random() * 2000 + 1000));
  const [isActive, setActive] = useState(false);
  const [isScrollActive, setScrollActive] = useState(false);
  // functions
  const luvCounter = () => {
    if (isActive === false) {
      setActive(true);
      return countLuv(luvCounted + 1);
    } else {
      setActive(false);
      return countLuv(luvCounted - 1);
    }
  };
  // callbacks
  const handleScrollDown = (data) => {
    return setScrollActive(data);
  };
  // handlers
  // --------
  // redner
  return (
    <div className="wp-g-cont">
      <div className="wp-preview-cont" onDoubleClick={luvCounter}>
        <img src={props["image-src"]} className="wpt-img" />
        <WPTView scroll={isScrollActive}>
          <h1 className={`wpt-t ${isScrollActive && "wpt-t__hide"}`}>{props.title}</h1>
          <span className="wpt-est">EST&nbsp;{props.est}</span>
        </WPTView>
        <WPTPreView scrollDownEffect={handleScrollDown} langs={props.langs}>
          {props.children}
        </WPTPreView>
      </div>
      <div className="wp-counter">
        <div className="wp-luv-counter" onClick={luvCounter}>
          <Icon
            size={{ w: 30, h: 30 }}
            type="heart"
            ui={`ico luv-ico-fill-less ${isActive ? "luv-ico-ful-fill" : ""}`}
          />
          <span>{luvCounted}</span>
        </div>
      </div>
    </div>
  );
};
const WPTView = (props) => {
  return (
    <div className="wpt-bs-view">
      {props.children[0]}
      {props.children[1]}
    </div>
  );
};

const WPTPreView = (props) => {
  const [isScrollActive, setScroll] = useState(false);
  const handleScroll = (s) => {
    let scroll = s.target;
    if (scroll.scrollTop >= 29) {
      setScroll(true);
      return props.scrollDownEffect(isScrollActive);
    } else {
      setScroll(false);
      return props.scrollDownEffect(isScrollActive);
    }
  };
  return (
    <div className="wpt-pr-view">
      <div className={`wpt-pr-view__text ${isScrollActive && "wptprv-t__roll"}`} onScroll={handleScroll}>
        <h3>Description</h3>
        <hr className="hr-g" />
        {props.children}
      </div>
      <div className={`wpt-pr-view__used-lang ${isScrollActive && "usd-l__hide"}`}>
        {props.langs.map((lang, k) => {
          if (k <= 6) {
            return <span className={`hue-ico i__${lang} tool-tip`} key={k}></span>;
          }
        })}
        {/* <span className="hue-ico i__ill"></span>
        <span className="hue-ico i__ps"></span>
        <span className="hue-ico i__id"></span>
        <span className="hue-ico i__xd"></span>
        <span className="hue-ico i__html"></span>
        <span className="hue-ico i__css"></span>
        <span className="hue-ico i__sass"></span>
        <span className="hue-ico i__angular"></span>
        <span className="hue-ico i__vue"></span>
        <span className="hue-ico i__react"></span>
        <span className="hue-ico i__svelte"></span>
        <span className="hue-ico i__js"></span>
        <span className="hue-ico i__ts"></span>
        <span className="hue-ico i__python"></span>
        <span className="hue-ico i__node"></span>
        <span className="hue-ico i__bootstrap"></span> */}
      </div>
    </div>
  );
};
const WPTContentText = (props) => {
  return <p>{props.children}</p>;
};
// Props types
// WorkPostTemplate.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.element),
// };
export { WorkPostTemplate, WPTContentText };
