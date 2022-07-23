import React, { Component } from "react";
import "./App.css";
import "./styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { Responsive, WidthProvider } from "react-grid-layout";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import DragAndDrop from "./DragAndDrop";
import PageLayout from "./PageLayout";
const layouts = {
  xxl: [
    {   i: "first", x: 0, y: 0, w: 5, h: 4 },
    {   i: "second", x: 6, y: 0, w: 4, h: 4 },
    {   i: "third", x: 8, y: 0, w: 3, h: 2 },
  ],
  xl: [
    {   i: "first", x: 0, y: 0, w: 5, h: 5 },
    {   i: "second", x: 6, y: 0, w: 4, h: 5 },
    {   i: "third", x: 7, y: 0, w: 2, h: 2 },
  ],
  lg: [
    {   i: "first", x: 1, y: 0, w: 2, h: 2 },
    {   i: "second", x: 3, y: 0, w: 2, h: 2 },
    {   i: "third", x: 5, y: 0, w: 2, h: 2 },
  ],
  md: [
    {   i: "first", x: 0, y: 0, w: 2, h: 2 },
    {   i: "second", x: 2, y: 0, w: 2, h: 2 },
    {   i: "third", x: 4, y: 0, w: 2, h: 2 },
  ],
  sm: [
    {   i: "first", x: 0, y: 0, w: 1, h: 2 },
    {   i: "second", x: 1, y: 0, w: 2, h: 2 },
    {   i: "third", x: 3, y: 0, w: 1, h: 2 },
  ],
  xs: [
    {
       
      i: "first",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      resizeHandles: ["s"], // 利用断点可以配置个性化的 resizeHandles
    },
    {   i: "second", x: 0, y: 2, w: 2, h: 2 },
    {   i: "third", x: 0, y: 4, w: 2, h: 2 },
  ],
};
export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" },
      { name: "image111111", category: "outsideDiv", bgcolor: "grey" },
      { name: "icon111111", category: "outsideDiv", bgcolor: "green" },
      { name: "text111111", category: "outsideDiv", bgcolor: "blue" },
      { name: "image222222", category: "outsideDiv", bgcolor: "grey" },
      { name: "icon222222", category: "outsideDiv", bgcolor: "green" },
      { name: "text222222", category: "outsideDiv", bgcolor: "blue" },
    ],
    customLayout: layouts,
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
    console.log("d");
  };

  updateTheLayoutObject = (bool) => {
    const newObj = {};
    for (let value in this.state.customLayout) {
      const updated = this.state.customLayout[value].map((obj) => {
        return {
          ...obj,
          // static: bool,
        };
      });
      newObj[value] = updated;
    }
    this.setState({
      ...this.state,
      customLayout: newObj,
    });
  };
  handleCustomLayout = () => {
    this.updateTheLayoutObject(false);
  };
  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks,
    });
  };

  render() {
    var tasks = {
      wip: [],
      complete: [],
      outsideDiv: [],
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => {
            this.onDragStart(e, t.name);
          }}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <div>
          {/* <button
            style={{
              width: "15rem",
              height: "3.5rem",
              margin: "5rem",
              cursor: "pointer",
            }}
            onClick={this.handleCustomLayout}
          >
            Toggle Area increase
          </button> */}
        </div>
        <div>
          <h1>OuterDiv start here</h1>
          <div
            className="droppable"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "outsideDiv")}
            style={{
              width: "100%",
              height: "100%",
              zIndex: "-1",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              {tasks.outsideDiv}
            </div>
          </div>
          <h2> OuterDiv ends here</h2>
        </div>
        <PageLayout layouts={this.state.customLayout}>
          <div key="first">
            <div
              className="wip"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => {
                this.onDrop(e, "wip");
              }}
              style={{
                width: "100%",
                height: "100%",
                zIndex: "-1",
              }}
            >
              {tasks.wip}
            </div>
          </div>
          <div key="second">
            <div
              className="droppable"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "complete")}
              style={{
                width: "100%",
                height: "100%",
                zIndex: "-1",
              }}
            >
              {/* <span className="task-header">COMPLETED</span> */}
              {tasks.complete}
            </div>
          </div>
        </PageLayout>
      </div>
    );
  }
}
