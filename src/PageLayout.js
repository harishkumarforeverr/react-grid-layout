import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import InfoPanel from "./InfoPanel";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default (props) => {
  const [currentBreakPoints, setCurrentBreakPoints] = useState("");
  const defaultProps = {
    className: "dev-helper",
    isDraggable: true,
    isResizable: true,
    allowOverlap:true,
    // preventCollision:true,
    isDroppable:true,
    breakpoints: { xxl: 1600, xl: 1200, lg: 992, md: 768, sm: 576, xs: 480 },
    cols: { xxl: 12, xl: 10, lg: 8, md: 6, sm: 4, xs: 2 },
    rowHeight: 100, // 比较符合直觉
    margin: [0, 0],
    containerPadding: [0, 0],
    onBreakpointChange: setCurrentBreakPoints,
    handleStart:(e, ui)=>{ e.stopPropagation(); }
  };
  const currentCols = defaultProps.cols[currentBreakPoints] || "";
  return (
    <>    
      <ResponsiveGridLayout  
      {...defaultProps} {...props}>
        {props.children}
      </ResponsiveGridLayout>
    </>
  );
};
