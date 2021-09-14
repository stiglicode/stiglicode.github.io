import React, { useState, useRef, useEffect } from "react";
import "./css/Slider.style.css";
import Icon from "../../Icon/Icon";

const SliderParent = (props) => {
  const [slideStep, setSlideStep] = useState(0);
  const [sliderLengthValues, setSliderLengthValues] = useState({
    originLength: 0,
    totalLength: 0,
  });

  const slider = useRef();
  const sliderOverflow = useRef();
  const sliderPage = useRef();

  const handleSlideRight = () => {
    const sliderOverflowLength = -sliderOverflow.current.clientWidth;
    if (slideStep === sliderOverflowLength + slider.current.clientWidth) {
      return;
    } else {
      setSlideStep(slideStep - slider.current.clientWidth);
    }
  };
  const handleSlideLeft = () => {
    if (slideStep === 0) {
      return;
    } else {
      return setSlideStep(slideStep + slider.current.clientWidth);
    }
  };
  useEffect(() => {
    return setSliderLengthValues({
      originLength: slider.current.clientWidth,
      totalLength: sliderOverflow.current.clientWidth,
    });
  }, []);
  const lightUpPageSiganature = (index, originWidth, currentWidth) => {
    let actualPos = index * originWidth;

    if (-actualPos === currentWidth) {
      return "slr-page-signature-ON";
    } else {
      return "";
    }
  };
  let filtredChild = props.children.props.children;
  return (
    <div className="slr-cont">
      <span className={`slr-btns ${slideStep === 0 && "slr-btn-OFF"}`} onClick={handleSlideLeft}>
        <Icon size={{ w: 150, h: 150 }} type="arrow" ui="ico-hue arr-ico" />
      </span>
      <span
        className={`slr-btns ${
          +slideStep === sliderLengthValues.originLength - sliderLengthValues.totalLength && "slr-btn-OFF"
        }`}
        onClick={handleSlideRight}
      >
        <Icon size={{ w: 150, h: 150 }} type="arrow" ui="ico-hue arr-ico" />
      </span>
      <div className="slr" ref={slider}>
        <div className="slr-overflow" style={{ left: `${slideStep}px` }} ref={sliderOverflow}>
          {[...Array(Math.round(filtredChild.length / 3))].map((box, k) => {
            return <SliderContentBox key={k}>{filtredChild.slice(k * 3, 3 * (k + 1))}</SliderContentBox>;
          })}
        </div>
      </div>
      <div className="slr-page">
        <div className="slr-page-box" ref={sliderPage}>
          {[...Array(Math.round(filtredChild.length / 3))].map((c, i) => {
            const handlePageSiganture = () => {
              return setSlideStep(-sliderLengthValues.originLength * i);
            };
            return (
              <span
                onClick={handlePageSiganture}
                className={`slr-page-signature ${lightUpPageSiganature(i, sliderLengthValues.originLength, slideStep)}`}
                key={i}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SliderContentBox = (props) => {
  return <div className="slr-cnt-bx">{props.children}</div>;
};

export { SliderContentBox, SliderParent };
