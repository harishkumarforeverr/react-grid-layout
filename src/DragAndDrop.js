import React, { Component, useState } from "react";
import "./App.css";
import "./styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Draggable from "react-draggable";
import { Slider } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import GirlImage from "./dummyImage.jpg";
import PageLayout from "./PageLayout";
const layouts = {
  xxl: [
    { i: "first", x: 0, y: 0, w: 5, h: 4 },
    { i: "second", x: 6, y: 0, w: 4, h: 4 },
    { i: "third", x: 8, y: 0, w: 3, h: 2 },
  ],
  xl: [
    { i: "first", x: 0, y: 0, w: 5, h: 5 },
    { i: "second", x: 6, y: 0, w: 4, h: 5 },
    { i: "third", x: 7, y: 0, w: 2, h: 2 },
  ],
  lg: [
    { i: "first", x: 1, y: 0, w: 2, h: 2 },
    { i: "second", x: 3, y: 0, w: 2, h: 2 },
    { i: "third", x: 5, y: 0, w: 2, h: 2 },
  ],
  md: [
    { i: "first", x: 0, y: 0, w: 2, h: 2 },
    { i: "second", x: 2, y: 0, w: 2, h: 2 },
    { i: "third", x: 4, y: 0, w: 2, h: 2 },
  ],
  sm: [
    { i: "first", x: 0, y: 0, w: 1, h: 2 },
    { i: "second", x: 1, y: 0, w: 2, h: 2 },
    { i: "third", x: 3, y: 0, w: 1, h: 2 },
  ],
  xs: [
    {
      i: "first",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      resizeHandles: ["s"],
    },
    { i: "second", x: 0, y: 2, w: 2, h: 2 },
    { i: "third", x: 0, y: 4, w: 2, h: 2 },
  ],
};
const AppDragDropDemo = () => {
  const initialState = {
    tasks: [
      {
        name: "java",
        category: "wip",
        bgcolor: "yellow",
        custom: (
          <img
            style={{
              width: "5rem",
            }}
            src={GirlImage}
          />
        ),
      },
      {
        name: "DS",
        category: "wip",
        bgcolor: "pink",
        custom: <h1>Hi Java</h1>,
      },
      {
        name: "Vue",
        category: "complete",
        bgcolor: "skyblue",
        custom: <p>dddd</p>,
      },
      { name: "image111111", category: "outsideDiv", bgcolor: "grey" },
      {
        custom: <Slider defaultValue={30} />,
        category: "outsideDiv",
        bgcolor: "white",
        name: "slider",
      },
      {
        name: "text111111",
        category: "outsideDiv",
        bgcolor: "blue",
        custom: <h3>dddd</h3>,
      },
      {
        custom: <PlusCircleFilled />,
        category: "outsideDiv",
        bgcolor: "grey",
        name: "ok",
      },
      {
        name: "icon222222",
        category: "outsideDiv",
        bgcolor: "green",
        custom: <h2>dddd</h2>,
      },
      {
        name: "dd",
        category: "outsideDiv",
        bgcolor: "blue",
        custom: (
          <img
            style={{
              width: "5rem",
            }}
            src={GirlImage}
          />
        ),
      },
    ],
    customLayout: layouts,
  };
  const [state, setState] = useState(initialState);
  const onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
    console.log("d");
  };
  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    setState((prev) => ({
      ...prev,
      tasks,
    }));
  };

  var tasks = {
    wip: [],
    complete: [],
    outsideDiv: [],
  };

  state.tasks.forEach((t) => {
    tasks[t.category].push(
      <Draggable bounds="parent">
        <div
          key={t.name}
          onDragStart={(e) => {
            onDragStart(e, t.name);
          }}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.custom}
        </div>
      </Draggable>
    );
  });

  return (
    <div className="container-drag">
      <div></div>
      <div className="outerDivContainer">
        <h1>OuterDiv start here</h1>
        <PageLayout layouts={state.customLayout}>
          <div
            style={{
              margin: "0 auto",
            }}
            key="first"
          >
            <div
              className="draggableConatiner_outer"
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => {
                onDrop(e, "outsideDiv");
              }}
              style={{}}
            >
              {tasks.outsideDiv}
            </div>
          </div>
        </PageLayout>
        <h2> OuterDiv ends here</h2>
      </div>
      <div className="layoutConatiner">
        <PageLayout layouts={state.customLayout}>
          <div key="first">
            <div
              className="draggableConatiner"
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => {
                onDrop(e, "wip");
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {tasks.wip}
            </div>
          </div>
          <div key="second">
            <div
              className="droppable draggableConatiner"
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, "complete")}
              style={{
                width: "100%",
                height: "100%",
                zIndex: "-1",
              }}
            >
              {tasks.complete}
            </div>
          </div>
        </PageLayout>
      </div>
    </div>
  );
};

export default AppDragDropDemo;
