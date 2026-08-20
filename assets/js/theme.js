(function () {
  var STORAGE_KEY = "theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    applyTheme(document.documentElement.getAttribute("data-theme") || "light");

    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") || "light";
      var next = current === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  });
})();
