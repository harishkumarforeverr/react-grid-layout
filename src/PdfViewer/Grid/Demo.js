// react/jsx-boolean-value
import React from "react"
import { Col, Row, Select, Button, } from "antd";
import { useReducer, useRef, useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { RollbackOutlined, DragOutlined, RadiusBottomleftOutlined, RadiusUpleftOutlined, RadiusBottomrightOutlined, RadiusUprightOutlined } from "@ant-design/icons";
import GridElement from "./GridElement";
import layoutReducer from "./layoutReducer";
import SearchResults from "./SearchResults";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css"; 
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const { Option } = Select;

const Grid = ({ dynamiclayout, setDynamiclayout, setIsdynamic }) => {
  const ref = useRef();
  const [layout, dispatch] = useReducer(layoutReducer, dynamiclayout);
  const [currentBreakPoints, setCurrentBreakPoints] = useState("");
  const [scale, setScale] = useState(0);
  const [canvasX, setCanvasX] = useState(0);
  const [canvasY, setCanvasY] = useState(0);
  const setPositionChange = (e) => {
    setCanvasX(e.positionX);
    setCanvasY(e.positionY);
  };

  const [currentPage, setCurrentPage] = useState("platinfo");
  console.log("dynamiclayout", dynamiclayout);

  const newLayout = {
    xxl: dynamiclayout,
    xl: dynamiclayout,
    lg: dynamiclayout,
    md: dynamiclayout,
    xs: dynamiclayout,
  };

  const defaultProps = {
    className: "dev-helper",
    isDraggable: true,
    isResizable: true,
    breakpoints: { xxl: 1200, xl: 1200, lg: 992, md: 768, sm: 576, xs: 480 },
    cols: { xxl: 52, xl: 52, lg: 52, md: 52, sm: 52, xs: 52 },
    rowHeight: 15,
    width: 25,
    margin: [0, -2],
    containerPadding: [80, 80],
    onBreakpointChange: setCurrentBreakPoints,
  };
  function isHTML(str) {
    var a = document.createElement("div");
    a.innerHTML = str;

    for (var c = a.childNodes, i = c.length; i--;) {
      if (c[i].nodeType == 1) return true;
    }

    return false;
  }

  const calcGridColWidth = (positionParams) => {
    const { margin, containerPadding, containerWidth, cols } = positionParams;

    console.log("positionParams", positionParams);
    return (containerWidth - margin?.[0] * (cols - 1) - containerPadding?.[0] * 2) / cols;
  };
  function calculateWH(widthPx, heightPx, colWidth, rowHeight, margin) {
    let w = Math.ceil((widthPx - margin[0]) / (colWidth + margin[0]));
    let h = Math.ceil((heightPx - margin[1]) / (rowHeight + margin[1]));
    return [w, h];
  }
  return (
    <>
      {currentPage === "platinfo" && (
        <>
          <Row justify="space-around">
            {/* <TransformWrapper
             minScale={0.5}
              maxscale={0.9}
              // zoomIn={{ step: 5 }}
              // zoomOut={{ step: 5 }}
              wheel={{ disabled: true }}
              doubleClick={{ disabled: true }}
              pan={{ disabled: true, paddingSize: 0 }}
              options={{
                limitToBounds: false,
              }}
            > */}
            {/* {({ zoomIn, zoomOut, resetTransform, positionX, positionY }) => ( */}
            <>
              {/* <div className="tools">
                    <Button type="button" onClick={() => zoomIn()}>
                      +
                    </Button>
                    <Button type="button" onClick={() => zoomOut()}>
                      -
                    </Button>
                    <Button type="button" onClick={() => resetTransform()}>
                      <RollbackOutlined />
                    </Button>
                    <Button type="button">D</Button>
                    <Button type="button">v</Button>
                    <Button type="button">W</Button>
                  </div> */}

              <Col xs={19} >
                <div
                  ref={ref}
                // className={positionX !== canvasX || positionY !== canvasY ? "locked" : ""}
                >
                  {/* <TransformComponent
                        contentStyle={{ width: "100%" }}
                        wrapperStyle={{
                          // maxWidth: "100%",
                          // // maxHeight: "calc(100vh - 50px)",
                           width: "100%",
                          // display: "unset",
                        }}
                      > */}

                  <ResponsiveReactGridLayout
                    className="layout"
                    layouts={newLayout}
                    // width={size.width}
                    // height={size.height}
                    compactType={"vertical"}
                    preventCollision={false}
                    // onResizeStop={(oldItem, newItem) => setIsdynamic(true)}
                    resizeHandles={["s", "w", "e", "n", "sw", "nw", "se", "ne"]}
                    resizeHandle={<RollbackOutlined />}
                    onLayoutChange={(layout) => {
                      setDynamiclayout(layout);

                      dispatch({ type: "newLayout", layout });
                    }}
                    style={{ width: "100%" }}
                    // rowHeight={40}
                    // width={1200}
                    // onWidthChange={calcGridColWidth}
                    onWidthChange={(containerWidth) => {
                      calcGridColWidth(containerWidth);
                    }}
                    {...defaultProps}
                  >
                    {dynamiclayout?.map((item) => {
                      return (
                        <GridElement key={"" + item.i} css={{ border: "1px solid red" }} {...item}>
                          <div className="main-setup">
                            <div className="content-setup">
                              {item.i}
                              <br />
                              {item.w} * {item.h}
                            </div>
                          </div>
                          {/* <div className="roomSetup">
                                  D
                                </div> */}
                        </GridElement>
                      );
                    })}
                  </ResponsiveReactGridLayout>
                  {/* </TransformComponent> */}
                </div>
              </Col>
              {/* <Col span={3}>
                <div className="door_opens">
                  <div className="door">
                    <Button>Add-Room</Button>
                  </div>
                  <div className="door">
                    <RadiusBottomleftOutlined />
                    <h6>D1</h6>
                  </div>
                  <div className="door">
                    <RadiusUpleftOutlined />
                    <h6>D2</h6>
                  </div>
                  <div className="door">
                    <RadiusUpleftOutlined />
                    <h6>D3</h6>
                  </div>
                  <div className="door">
                    <RadiusUprightOutlined />
                    <h6>D4</h6>
                  </div>
                </div>
              </Col> */}
              <Col span={3}>
                <div className="directions_img">
                  {/* <CustomImage src={AssetsImage.NorthLogoImg} alt="north" preview={false}/> */}
                </div>
              </Col>
            </>
            {/* // )} */}
            {/* </TransformWrapper> */}
            {/* <DragOutlined style={{ fontSize: "16rem",color: "red"}} /> */}
          </Row>
        </>
      )}
      {currentPage === "platlist" && (
        <>
          <SearchResults />
        </>
      )}
    </>
  );
};

export default Grid;
