(function () {
  var API_URL = "https://api.github.com/repos/akhilnadigatla/personal_website/commits/main";
  var STORAGE_KEY = "lastUpdatedDate";

  var el = document.getElementById("last-updated");
  if (!el) return;

  function formatDate(iso) {
    var d = new Date(iso);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }

  function render(iso) {
    el.textContent = "Last updated " + formatDate(iso);
  }

  var cached = null;
  try {
    cached = window.localStorage.getItem(STORAGE_KEY);
  } catch (e) {}
  if (cached) render(cached);

  fetch(API_URL, { headers: { Accept: "application/vnd.github+json" } })
    .then(function (res) {
      if (!res.ok) throw new Error("bad response");
      return res.json();
    })
    .then(function (data) {
      var iso = data.commit && data.commit.committer && data.commit.committer.date;
      if (!iso) return;
      render(iso);
      try {
        window.localStorage.setItem(STORAGE_KEY, iso);
      } catch (e) {}
    })
    .catch(function () {
      // Keep whatever was rendered from cache (or leave blank) on failure.
    });
})();
