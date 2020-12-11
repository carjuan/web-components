/* eslint-disable */
const APP = (function () {
  const PANELS = document.querySelectorAll(".panels__panel");

  function removePrevActiveClass() {
    PANELS.forEach((panel) => {
      const isPanelActive = panel.classList.contains("panels__panel--active");
      if (isPanelActive) panel.classList.remove("panels__panel--active");
    });
  }

  function onPanelClick(e) {
    
    removePrevActiveClass();
    e.target.classList.add("panels__panel--active");

  }

  function addEventListeners(HTMLElements) {
    for (let key in HTMLElements) {
      const elements = HTMLElements[key];
      elements.forEach((el) => el.addEventListener("click", onPanelClick));
    }
  }

  function init() {
    addEventListeners({
      PANELS,
    });
  }

  return {
    init,
  };
})();

APP.init();
