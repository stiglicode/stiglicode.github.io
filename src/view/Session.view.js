import React, { useEffect, useState } from "react";

import Nav from "../components/Nav/Nav";
import SubMenu from "../components/SubMenu/SubMenu";
import { WorkPostTemplate, WPTContentText, WPT_GRID_PreView } from "../components/WorkPost/WorkPost";
import { SliderContentBox, SliderParent, GridContentBox } from "../components/Layout/index";
import exampleDataFromDB from "../fake.db";
import { FilterServe } from "../components/Filter/bin/filter-logic";

function Session() {
  const [filterItems, setFilterItems] = useState([]);
  const [currentLayout, setLayout] = useState(1);
  const adjustedData = new FilterServe(exampleDataFromDB, filterItems);
  const [previewWindow, setPreviewWindow] = useState({});

  const filterResponse = (data) => {
    return setFilterItems(
      data.sort((a, b) => {
        return a - b;
      })
    );
  };
  useEffect(() => {}, []);
  const layoutResponse = (data) => {
    return setLayout(data);
  };
  const reSendDataToOpen = (data) => {
    return setPreviewWindow(data);
  };
  return (
    <div className="w-100 column" style={{ height: "fit-content" }}>
      <Nav />
      <SubMenu filterData={filterResponse} layoutData={layoutResponse} />
      {currentLayout === 1 && <WPT_GRID_PreView postData={previewWindow}></WPT_GRID_PreView>}
      <div className="root-cont column">
        {currentLayout == 2 ? (
          <RowTemplate filtred={adjustedData} layoutType={currentLayout} />
        ) : (
          currentLayout == 1 && (
            <GridTemplate filtred={adjustedData} layoutType={currentLayout} requestDataToOpen={reSendDataToOpen} />
          )
        )}
      </div>
    </div>
  );
}

function GridTemplate(props) {
  const OneAllOr = () => {
    if (props.filtred.outputData.cleaned.length === 0) {
      return props.filtred.inputData.db;
    } else {
      return props.filtred.outputData.cleaned;
    }
  };
  const reSendDataToOpen = (data) => {
    return props.requestDataToOpen(data);
  };
  return (
    <GridContentBox requestDataToOpen={reSendDataToOpen}>
      {OneAllOr().map((ele, k) => {
        const { usedLangs, title, est, img, contentText, filterData } = ele;
        return (
          <WorkPostTemplate
            langs={usedLangs}
            image-src={img}
            est={est}
            title={title}
            key={Math.floor(Math.random() * 10 ** 10 + 1)}
            filter-data={filterData}
            pattern="grid"
            layout={props.layoutType}
            requestDataToOpen={reSendDataToOpen}
          >
            <WPTContentText>{contentText}</WPTContentText>
          </WorkPostTemplate>
        );
      })}
    </GridContentBox>
  );
}
function RowTemplate(props) {
  const OneAllOr = () => {
    if (props.filtred.outputData.cleaned.length === 0) {
      return props.filtred.inputData.db;
    } else {
      return props.filtred.outputData.cleaned;
    }
  };
  return (
    <SliderParent>
      <SliderContentBox>
        {OneAllOr().map((ele, k) => {
          const { usedLangs, title, est, img, contentText, filterData } = ele;
          return (
            <WorkPostTemplate
              langs={usedLangs}
              image-src={img}
              est={est}
              title={title}
              key={Math.floor(Math.random() * 10 ** 10 + 1)}
              filter-data={filterData}
              pattern="grid"
              layout={props.layoutType}
            >
              <WPTContentText>{contentText}</WPTContentText>
            </WorkPostTemplate>
          );
        })}
      </SliderContentBox>
    </SliderParent>
  );
}
export default Session;
