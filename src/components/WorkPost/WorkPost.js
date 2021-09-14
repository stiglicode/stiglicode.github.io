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
  const resetScrollByLeave = () => {
    return setScrollActive(false);
  };
  const openPreviewWindow = () => {
    return props.requestDataToOpen({
      isActive: true,
      title: props.title,
      est: props.est,
      content: props.children.props.children,
      langs: props.langs,
    });
  };
  // redner
  return (
    <div
      className="wp-template"
      style={
        props.pattern === "grid"
          ? { width: "500px", height: "500px" }
          : props.pattern === "row" && { minWidth: "400px", maxWidth: "650px", height: "500px" }
      }
    >
      <div
        className="wp-preview-cont"
        onDoubleClick={luvCounter}
        onMouseLeave={resetScrollByLeave}
        onClick={openPreviewWindow}
      >
        <img src={props["image-src"]} className="wpt-img" />
        <WPTView scroll={isScrollActive}>
          <h1 className={`wpt-t ${isScrollActive && "wpt-t__hide"}`}>{props.title}</h1>
          <span className="wpt-est">EST&nbsp;{props.est}</span>
        </WPTView>
        {props.layout !== 1 && (
          <WPT_ROW_PreView scrollDownEffect={handleScrollDown} langs={props.langs}>
            {props.children}
          </WPT_ROW_PreView>
        )}
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

const WPT_ROW_PreView = (props) => {
  const [isScrollActive, setScroll] = useState(false);
  const handleScroll = (s) => {
    let scroll = s.target;
    console.log(isScrollActive);
    if (scroll.scrollTop >= 29) {
      setScroll(true);
      return props.scrollDownEffect(isScrollActive);
    } else {
      setScroll(false);
      return props.scrollDownEffect(isScrollActive);
    }
  };
  return (
    <div className="wpt-R-pr-view">
      <div className={`wpt-R-pr-view__text ${isScrollActive && "wptprv-t__roll"}`} onScroll={handleScroll}>
        <h3>Description</h3>
        <hr className="hr-g" />
        {props.children}
      </div>
      <div className={`wpt-R-pr-view__used-lang ${isScrollActive && "usd-l__hide"}`}>
        {props.langs.map((lang, k) => {
          if (k <= 6) {
            return <i className={`hue-ico hue-ico-row-ltr i__${lang} tool-tip tt-bottom`} key={k}></i>;
          }
        })}
      </div>
    </div>
  );
};
const WPT_GRID_PreView = (props) => {
  const { title, est, content, langs, isActive } = props.postData;
  const [previewRollDownStatus, setPreviewRollDownStatus] = useState(false);
  const [previewBreaker, setBreaker] = useState(true);
  // setPreviewRollDownStatus(isActive);
  const rollUpHandler = () => {
    return setPreviewRollDownStatus(false), setBreaker(true);
  };
  return (
    <div className={`wpt-G-pr-view focus-content-in-dark ${previewRollDownStatus && "bcb-ON"}`}>
      <div className="wpt-g_content">
        <div className="wpt-g_c-ico__box">
          <div className="wpt-g_c-ico">
            {/* {langs?.map((lang, k) => {
              return <i className={`hue-ico ico-size-2xPlus10 i__${lang} tool-tip tt-left`} key={k}></i>;
            })} */}
            <i className="hue-ico ico-size-2xPlus10 i__js tool-tip tt-left"></i>
            <i className="hue-ico ico-size-2xPlus10 i__react tool-tip tt-left"></i>
            <i className="hue-ico ico-size-2xPlus10 i__redux tool-tip tt-left"></i>
            <i className="hue-ico ico-size-2xPlus10 i__react-native tool-tip tt-left"></i>
            <i className="hue-ico ico-size-2xPlus10 i__vue tool-tip tt-left"></i>
            <i className="hue-ico ico-size-2xPlus10 i__xd tool-tip tt-left"></i>
          </div>
        </div>
        <div className="wpt-g_c-ico__box">
          <a className="wpt-g_title___link click-up click-opac" onClick={rollUpHandler}>
            Visit
          </a>
          <div className="wpt-g_c-ico">
            {/* {langs?.map((lang, k) => {
              return <i className={`hue-ico ico-size-2xPlus10 i__${lang} tool-tip tt-right`} key={k}></i>;
            })} */}
            <i className="hue-ico ico-size-2xPlus10 i__js tool-tip tt-right"></i>
            <i className="hue-ico ico-size-2xPlus10 i__react tool-tip tt-right"></i>
            <i className="hue-ico ico-size-2xPlus10 i__redux tool-tip tt-right"></i>
            <i className="hue-ico ico-size-2xPlus10 i__react-native tool-tip tt-right"></i>
            <i className="hue-ico ico-size-2xPlus10 i__vue tool-tip tt-right"></i>
            <i className="hue-ico ico-size-2xPlus10 i__xd tool-tip tt-right"></i>
          </div>
        </div>
        <div className="wpt-g_c-contentflow">
          <h1 className="wpt-g_title">{title ?? "title"}</h1>
          <p className="wpt-g_content_text">
            Deserunt eu adipisicing velit amet duis ut ad dolor consectetur est nisi officia enim. Fugiat sunt voluptate
            ex sit proident. Ex id nisi proident quis incididunt esse nulla id. Quis enim sint voluptate velit
            incididunt velit do ea. Incididunt est proident magna commodo culpa Lorem. Anim nulla nisi magna commodo
            velit. Mollit sint est excepteur reprehenderit eu. Eu tempor irure culpa culpa officia minim velit excepteur
            laborum occaecat ipsum. Laboris duis adipisicing veniam quis. Laboris eiusmod est ut esse incididunt
            deserunt. Magna adipisicing esse culpa est esse consectetur labore. <br />
            <br />
            Sint incididunt in consequat ipsum eu. Ex aliquip velit voluptate ut veniam sit est ea ea reprehenderit
            eiusmod occaecat irure. Nulla cupidatat consequat ut aliquip dolor cupidatat duis excepteur deserunt aute.
            Commodo commodo est nisi magna deserunt sunt et sint consectetur enim commodo adipisicing eu. Nisi consequat
            ut fugiat excepteur velit laboris fugiat exercitation proident aute exercitation. Anim nulla commodo est
            consequat. Aliqua ex in duis voluptate dolore ut ipsum ad labore. <br />
            <br />
            Quis voluptate incididunt commodo in aliqua dolore cupidatat tempor excepteur. Velit aliquip pariatur
            laborum nisi in velit dolor nostrud cupidatat elit laboris irure exercitation deserunt. Nisi velit tempor
            magna est ad culpa amet. Qui velit anim consectetur Lorem aliqua ea magna mollit est do. Aliqua anim quis
            adipisicing cillum cupidatat reprehenderit aliquip incididunt minim. Excepteur aliqua consequat Lorem quis
            quis deserunt consequat anim qui ad sint pariatur anim duis. Ea duis commodo ad excepteur adipisicing ipsum
            tempor consectetur fugiat sint. <br />
            <br />
            Ea dolor laborum esse non officia ipsum. Consectetur nisi labore adipisicing Lorem incididunt eiusmod et
            excepteur sint duis et amet eiusmod incididunt. Ad ut cillum pariatur qui ad aliqua. Deserunt eu adipisicing
            velit amet duis ut ad dolor consectetur est nisi officia enim. Fugiat sunt voluptate ex sit proident. Ex id
            nisi proident quis incididunt esse nulla id. Quis enim sint voluptate velit incididunt velit do ea.
            Incididunt est proident magna commodo culpa Lorem. Anim nulla nisi magna commodo velit. Mollit sint est
            excepteur reprehenderit eu. <br />
            <br />
            Eu tempor irure culpa culpa officia minim velit excepteur laborum occaecat ipsum. Laboris duis adipisicing
            veniam quis. Laboris eiusmod est ut esse incididunt deserunt. Magna adipisicing esse culpa est esse
            consectetur labore. Sint incididunt in consequat ipsum eu. Ex aliquip velit voluptate ut veniam sit est ea
            ea reprehenderit eiusmod occaecat irure. Nulla cupidatat consequat ut aliquip dolor cupidatat duis excepteur
            deserunt aute. Commodo commodo est nisi magna deserunt sunt et sint consectetur enim commodo adipisicing eu.
            Nisi consequat ut fugiat excepteur velit laboris fugiat exercitation proident aute exercitation. <br />
            <br />
            Anim nulla commodo est consequat. Aliqua ex in duis voluptate dolore ut ipsum ad labore. Quis voluptate
            incididunt commodo in aliqua dolore cupidatat tempor excepteur. Velit aliquip pariatur laborum nisi in velit
            dolor nostrud cupidatat elit laboris irure exercitation deserunt. Nisi velit tempor magna est ad culpa amet.
            Qui velit anim consectetur Lorem aliqua ea magna mollit est do. Aliqua anim quis adipisicing cillum
            cupidatat reprehenderit aliquip incididunt minim. <br />
            <br />
            Excepteur aliqua consequat Lorem quis quis deserunt consequat anim qui ad sint pariatur anim duis. Ea duis
            commodo ad excepteur adipisicing ipsum tempor consectetur fugiat sint. Ea dolor laborum esse non officia
            ipsum. Consectetur nisi labore adipisicing Lorem incididunt eiusmod et excepteur sint duis et amet eiusmod
            incididunt. Ad ut cillum pariatur qui ad aliqua. Deserunt eu adipisicing velit amet duis ut ad dolor
            consectetur est nisi officia enim. Fugiat sunt voluptate ex sit proident. Ex id nisi proident quis
            incididunt esse nulla id. Quis enim sint voluptate velit incididunt velit do ea. Incididunt est proident
            magna commodo culpa Lorem. Anim nulla nisi magna commodo velit. Mollit sint est excepteur reprehenderit eu.
            Eu tempor irure culpa culpa officia minim velit excepteur laborum occaecat ipsum. Laboris duis adipisicing
            veniam quis. Laboris eiusmod est ut esse incididunt deserunt. Magna adipisicing esse culpa est esse
            consectetur labore. Sint incididunt in consequat ipsum eu. Ex aliquip velit voluptate ut veniam sit est ea
            ea reprehenderit eiusmod occaecat irure. <br />
            <br />
            Nulla cupidatat consequat ut aliquip dolor cupidatat duis excepteur deserunt aute. Commodo commodo est nisi
            magna deserunt sunt et sint consectetur enim commodo adipisicing eu. Nisi consequat ut fugiat excepteur
            velit laboris fugiat exercitation proident aute exercitation. Anim nulla commodo est consequat. Aliqua ex in
            duis voluptate dolore ut ipsum ad labore. Quis voluptate incididunt commodo in aliqua dolore cupidatat
            tempor excepteur. Velit aliquip pariatur laborum nisi in velit dolor nostrud cupidatat elit laboris irure
            exercitation deserunt. Nisi velit tempor magna est ad culpa amet. Qui velit anim consectetur Lorem aliqua ea
            magna mollit est do. Aliqua anim quis adipisicing cillum cupidatat reprehenderit aliquip incididunt minim.
            Excepteur aliqua consequat Lorem quis quis deserunt consequat anim qui ad sint pariatur anim duis. Ea duis
            commodo ad excepteur adipisicing ipsum tempor consectetur fugiat sint. Ea dolor laborum esse non officia
            ipsum. Consectetur nisi labore adipisicing Lorem incididunt eiusmod et excepteur sint duis et amet eiusmod
            incididunt. Ad ut cillum pariatur qui ad aliqua.
          </p>
        </div>
      </div>
      <div className="wpt-g_date">
        <span>EST&nbsp;{"14.1.2021"}</span>
      </div>
    </div>
  );
};
const WPTContentText = (props) => {
  return <p>{props.children}</p>;
};

export { WorkPostTemplate, WPTContentText, WPT_GRID_PreView };
