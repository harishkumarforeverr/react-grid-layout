import PageLayout from "./PageLayout";
import "./styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { Responsive, WidthProvider } from "react-grid-layout";
import React, { Component } from "react";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import DragAndDrop from "./DragAndDrop";
const layouts = {
  xxl: [
    { static: true, i: "first", x: 1, y: 0, w: 3, h: 2 },
    { static: true, i: "second", x: 4, y: 0, w: 4, h: 2 },
    { static: true, i: "third", x: 8, y: 0, w: 3, h: 2 },
  ],
  xl: [
    { static: true, i: "first", x: 1, y: 0, w: 2, h: 2 },
    { static: true, i: "second", x: 3, y: 0, w: 4, h: 2 },
    { static: true, i: "third", x: 7, y: 0, w: 2, h: 2 },
  ],
  lg: [
    { static: true, i: "first", x: 1, y: 0, w: 2, h: 2 },
    { static: true, i: "second", x: 3, y: 0, w: 2, h: 2 },
    { static: true, i: "third", x: 5, y: 0, w: 2, h: 2 },
  ],
  md: [
    { static: true, i: "first", x: 0, y: 0, w: 2, h: 2 },
    { static: true, i: "second", x: 2, y: 0, w: 2, h: 2 },
    { static: true, i: "third", x: 4, y: 0, w: 2, h: 2 },
  ],
  sm: [
    { static: true, i: "first", x: 0, y: 0, w: 1, h: 2 },
    { static: true, i: "second", x: 1, y: 0, w: 2, h: 2 },
    { static: true, i: "third", x: 3, y: 0, w: 1, h: 2 },
  ],
  xs: [
    {
      static: true,
      i: "first",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      resizeHandles: ["s"], // 利用断点可以配置个性化的 resizeHandles
    },
    { static: true, i: "second", x: 0, y: 2, w: 2, h: 2 },
    { static: true, i: "third", x: 0, y: 4, w: 2, h: 2 },
  ],
};

export default function GridIndex() {
  return (
    <>
      <PageLayout layouts={layouts}>
        <div key="icon1">
          {" "}
          <HomeOutlined />
        </div>
        <div key="icon2">
          {" "}
          <SettingFilled />
        </div>
        <div key="icon3">
          {" "}
          <SmileOutlined />
        </div>
        <div key="icon4">
          {" "}
          <SyncOutlined spin />
        </div>
        <div key="icon5">
          {" "}
          <LoadingOutlined />
        </div>
        <div
          style={{
            zIndex: -1,
          }}
          key="first"
        >
          Container 1
        </div>
        <div
          style={{
            zIndex: -1,
          }}
          key="second"
        >
          Container 2
        </div>
        <div
          style={{
            zIndex: -1,
          }}
          key="third"
        >
          Container 3
        </div>
      </PageLayout>
    </>
  );
}
