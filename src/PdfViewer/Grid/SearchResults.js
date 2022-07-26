import { Col, Row } from "antd";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import GridElement from "./GridElement";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const SearchResults = () => {
  const defaultProps = {
    className: "dev-helper",
    isDraggable: true,
    isResizable: true,
    breakpoints: { xxl: 1200, xl: 1200, lg: 992, md: 768, sm: 576, xs: 480 },
    cols: { xxl: 12, xl: 10, lg: 8, md: 6, sm: 4, xs: 2 },
    rowHeight: 100, // 比较符合直觉
    margin: [0, 0],
    containerPadding: [0, 0],
    // onBreakpointChange: setCurrentBreakPoints,
  };

  const layouts = {
    xxl: [
      { i: "block1", x: 1, y: 0, w: 3, h: 2, resizeHandles: ["e"] },
      { i: "block2", x: 4, y: 0, w: 4, h: 2 },
      { i: "block3", x: 8, y: 0, w: 3, h: 2 },
      { i: "block4", x: 1, y: 3, w: 5, h: 3 },
      { i: "block5", x: 6, y: 3, w: 5, h: 3, static: true },
    ],
    xl: [
      { i: "block1", x: 1, y: 0, w: 2, h: 2, resizeHandles: ["e"] },
      { i: "block2", x: 3, y: 0, w: 4, h: 2 },
      { i: "block3", x: 7, y: 0, w: 2, h: 2 },
      { i: "block4", x: 1, y: 2, w: 4, h: 3 },
      { i: "block5", x: 5, y: 2, w: 4, h: 3 },
    ],
    lg: [
      { i: "block1", x: 1, y: 0, w: 2, h: 2, resizeHandles: ["e"] },
      { i: "block2", x: 3, y: 0, w: 2, h: 2 },
      { i: "block3", x: 5, y: 0, w: 2, h: 2 },
      { i: "block4", x: 1, y: 2, w: 3, h: 3 },
      { i: "block5", x: 4, y: 2, w: 3, h: 3 },
    ],
    md: [
      { i: "block1", x: 0, y: 0, w: 2, h: 2, resizeHandles: ["e"] },
      { i: "block2", x: 2, y: 0, w: 2, h: 2 },
      { i: "block3", x: 4, y: 0, w: 2, h: 2 },
      { i: "block4", x: 0, y: 2, w: 3, h: 3 },
      { i: "block5", x: 3, y: 2, w: 3, h: 3 },
    ],
    sm: [
      { i: "block1", x: 0, y: 0, w: 1, h: 2, resizeHandles: ["e"] },
      { i: "block2", x: 1, y: 0, w: 2, h: 2 },
      { i: "block3", x: 3, y: 0, w: 1, h: 2 },
      { i: "block4", x: 0, y: 2, w: 2, h: 3 },
      { i: "block5", x: 2, y: 2, w: 2, h: 3 },
    ],
    xs: [
      { i: "block1", x: 0, y: 0, w: 2, h: 2, resizeHandles: ["s"] },
      { i: "block2", x: 0, y: 2, w: 2, h: 2 },
      { i: "block3", x: 0, y: 4, w: 2, h: 2 },
      { i: "block4", x: 0, y: 7, w: 2, h: 3 },
      { i: "block5", x: 0, y: 10, w: 2, h: 3 },
    ],
  };
  const layout = [
    {
      i: "block1",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      resizeHandles: ["s"],
    },
    { i: "block2", x: 0, y: 2, w: 3, h: 2 },
    { i: "block3", x: 0, y: 4, w: 2, h: 2 },
    { i: "block4", x: 0, y: 7, w: 2, h: 3 },
    { i: "block5", x: 0, y: 1, w: 2, h: 3 },
  ];
  return (
    <div style={{ width: "100%", margin: "25px" }}>
      <Row  gutter={12}>
        <Col lg={10} style={{ width: "100%", margin: "25px" }}>
          <ResponsiveReactGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{
              xxl: 1536,
              xl: 1280,
              lg: 1024,
              md: 768,
              sm: 640,
            }}
            cols={{ xxl: 5, xl: 3, lg: 3, md: 2, sm: 1 }}
            // rowHeight={40}
            // width={1200}
            {...defaultProps}
          >
            {layout.map((item) => {
              console.log("item", typeof item.i);
              return (
                <GridElement
                  key={"" + item.i}
                  css={{ border: "1px solid red" }}
                  {...item}
                >
                  {item.i}
                </GridElement>
              );
            })}
          </ResponsiveReactGridLayout>
        </Col>
        <Col lg={10} style={{ width: "100%", margin: "25px" }}>
          <ResponsiveReactGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{
              xxl: 1536,
              xl: 1280,
              lg: 1024,
              md: 768,
              sm: 640,
            }}
            cols={{ xxl: 5, xl: 3, lg: 3, md: 2, sm: 1 }}
            // rowHeight={40}
            // width={1200}
            {...defaultProps}
          >
            {layout.map((item) => {
              console.log("item", typeof item.i);
              return (
                <GridElement
                  key={"" + item.i}
                  css={{ border: "1px solid red" }}
                  {...item}
                >
                  {item.i}
                </GridElement>
              );
            })}
          </ResponsiveReactGridLayout>
        </Col>
      </Row>
    </div>
  );
};

export default SearchResults;
