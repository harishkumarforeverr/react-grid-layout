  export default (props) => {
  return (
    <div className="info">
      <ul>
        <li>当前断点：{props.currentBreakPoints}</li>
        <li>当前列数：{props.currentCols}</li>
        <li>建议在新窗口中预览</li>
      </ul>
    </div>
  );
};
