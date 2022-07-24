import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.min.css";

import "./Rufe.css";

const Rufe = () => {
  $(document).ready(function () {
    var guy = document.getElementById("guy");
    var cont = document.getElementById("container");
    var lastX, lastY; // Tracks the last observed mouse X and Y position

    var minX = cont.offsetLeft;
    var maxX = minX + cont.offsetWidth - guy.offsetWidth;

    var minY = cont.offsetTop;
    var maxY = minY + cont.offsetHeight - guy.offsetHeight;

    guy.addEventListener("mousedown", function (event) {
      if (event.which == 1) {
        lastX = event.pageX;
        lastY = event.pageY;
        addEventListener("mousemove", moved);
        event.preventDefault(); // Prevent selection
      }
    });

    function buttonPressed(event) {
      if (event.buttons == null) return event.which != 0;
      else return event.buttons != 0;
    }
    function moved(event) {
      if (!buttonPressed(event)) {
        removeEventListener("mousemove", moved);
      } else {
        var distX = event.pageX - lastX;
        var distY = event.pageY - lastY;

        var targetX = guy.offsetLeft + distX;
        var targetY = guy.offsetTop + distY;

        guy.style.left = Math.min(maxX, Math.max(minX, targetX)) + "px";
        guy.style.top = Math.min(maxY, Math.max(minY, targetY)) + "px";

        lastX = event.pageX;
        lastY = event.pageY;
      }
    }
  });

  return (
    <div className="rel">
      <div id="container"></div>
      <div id="guy"></div>
    </div>
  );
};
export default Rufe;
