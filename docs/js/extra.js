// Drawio viewer script
window.DRAW_IO_VIEWER_SRC =
  "https://viewer.diagrams.net/js/viewer-static.min.js";
// Fix math import path
window.DRAW_MATH_URL = "https://viewer.diagrams.net/math/es5";

// Executes on `DOMContentLoaded` and on instant navigation
document$.subscribe(function (evt) {
  // load script if not in DOM
  if (document.querySelector(`[src="${DRAW_IO_VIEWER_SRC}"]`) == null) {
    const script = document.createElement("script");
    script.src = DRAW_IO_VIEWER_SRC;
    document.head.appendChild(script);
  }

  // Trigger load drawio diagrams after instant.navigation
  if (null != window.onDrawioViewerLoad) {
    window.onDrawioViewerLoad();
  } else if ("GraphViewer" in window) {
    GraphViewer.processElements();
  }
});
