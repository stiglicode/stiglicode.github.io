import React, { useEffect } from "react";

import Nav from "../components/Nav/Nav";
import SubMenu from "../components/SubMenu/SubMenu";
import { WorkPostTemplate, WPTContentText } from "../components/WorkPost/WorkPost";
import { SliderContentBox, SliderParent } from "../components/Slider/index";
import exampleDataFromDB from "../fake.db";

function Session() {
  return (
    <div className="w-100 bckg-gradient column">
      <Nav />
      <SubMenu />
      <div className="root-cont column">
        {/* {console.log(exampleDataFromDB[0])} */}
        <SliderParent>
          {exampleDataFromDB.map((ele, k) => {
            const { usedLangs, title, est, img, contentText } = ele;
            return (
              <WorkPostTemplate langs={usedLangs} image-src={img} est={est} title={title} key={k}>
                <WPTContentText>{contentText}</WPTContentText>
              </WorkPostTemplate>
            );
          })}
        </SliderParent>
      </div>
    </div>
  );
}

export default Session;
