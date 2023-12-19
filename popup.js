document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    var url = tab.url;

    if (isYouTubeUrl(url)) {
      document.getElementById("currentURL").innerText = url;
    } else {
      document.getElementById("currentURL").innerText =
        "This is not a YouTube video.";
    }
  });
});

function isYouTubeUrl(url) {
  // Simple check for YouTube URL pattern
  return url.includes("youtube.com") || url.includes("youtu.be");
}
