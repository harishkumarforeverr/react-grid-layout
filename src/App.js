import PageLayout from "./PageLayout";
import "./styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
const layouts = {
  xxl: [
    { static: true, i: "first", x: 1, y: 0, w: 3, h: 2, resizeHandles: ["e"] },
    { static: true, i: "second", x: 4, y: 0, w: 4, h: 2 },
    { static: true, i: "third", x: 8, y: 0, w: 3, h: 2 },
    { i: "icon1", x: 0, y: 0, w: 0.51, h: 0.5 },
    { i: "icon2", x: 0, y: 0.5, w: 0.51, h: 0.5 },
    { i: "icon3", x: 0, y: 1, w: 0.51, h: 0.5 },
    { i: "icon4", x: 0, y: 1.5, w: 0.51, h: 0.5 },
    { i: "icon5", x: 0, y: 2, w: 0.51, h: 0.5 },
  ],
  xl: [
    { static: true, i: "first", x: 1, y: 0, w: 2, h: 2, resizeHandles: ["e"] },
    { static: true, i: "second", x: 3, y: 0, w: 4, h: 2 },
    { static: true, i: "third", x: 7, y: 0, w: 2, h: 2 },
    { i: "icon1", x: 0, y: 0, w: 0.51, h: 0.5 },
    { i: "icon2", x: 0, y: 0.5, w: 0.51, h: 0.5 },
    { i: "icon3", x: 0, y: 1, w: 0.51, h: 0.5 },
    { i: "icon4", x: 0, y: 1.5, w: 0.51, h: 0.5 },
    { i: "icon5", x: 0, y: 2, w: 0.51, h: 0.5 },
  ],
  lg: [
    { static: true, i: "first", x: 1, y: 0, w: 2, h: 2, resizeHandles: ["e"] },
    { static: true, i: "second", x: 3, y: 0, w: 2, h: 2 },
    { static: true, i: "third", x: 5, y: 0, w: 2, h: 2 },
    { i: "icon1", x: 0, y: 0, w: 0.51, h: 0.5 },
    { i: "icon2", x: 0, y: 0.5, w: 0.51, h: 0.5 },
    { i: "icon3", x: 0, y: 1, w: 0.51, h: 0.5 },
    { i: "icon4", x: 0, y: 1.5, w: 0.51, h: 0.5 },
    { i: "icon5", x: 0, y: 2, w: 0.51, h: 0.5 },
  ],
  md: [
    { static: true, i: "first", x: 0, y: 0, w: 2, h: 2, resizeHandles: ["e"] },
    { static: true, i: "second", x: 2, y: 0, w: 2, h: 2 },
    { static: true, i: "third", x: 4, y: 0, w: 2, h: 2 },
    { i: "icon1", x: 0, y: 0, w: 0.51, h: 0.5 },
    { i: "icon2", x: 0, y: 0.5, w: 0.51, h: 0.5 },
    { i: "icon3", x: 0, y: 1, w: 0.51, h: 0.5 },
    { i: "icon4", x: 0, y: 1.5, w: 0.51, h: 0.5 },
    { i: "icon5", x: 0, y: 2, w: 0.51, h: 0.5 },
  ],
  sm: [
    { static: true, i: "first", x: 0, y: 0, w: 1, h: 2, resizeHandles: ["e"] },
    { static: true, i: "second", x: 1, y: 0, w: 2, h: 2 },
    { static: true, i: "third", x: 3, y: 0, w: 1, h: 2 },
    { i: "icon1", x: 0, y: 0, w: 0.51, h: 0.5 },
    { i: "icon2", x: 0, y: 0.5, w: 0.51, h: 0.5 },
    { i: "icon3", x: 0, y: 1, w: 0.51, h: 0.5 },
    { i: "icon4", x: 0, y: 1.5, w: 0.51, h: 0.5 },
    { i: "icon5", x: 0, y: 2, w: 0.51, h: 0.5 },
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

export default function App() {
  return (
    <>
      <PageLayout layouts={layouts}>
        <div key="icon1">Icons 1</div>
        <div
         key="icon2">Icons 2</div>
        <div key="icon3">Icons 3</div>
        <div key="icon4">Icons 4</div>
        <div key="icon5">Icons 5</div>
        <div
        style={{
          zIndex:-1
        }}
         key="first">Container 1</div>
        <div 
        
        style={{
          zIndex:-1
        }}
        key="second">Container 2</div>
        <div 
        
        style={{
          zIndex:-1
        }}
        key="third">Container 3</div>
      </PageLayout>
    </>
  );
}
