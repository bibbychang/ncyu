
document.addEventListener("DOMContentLoaded", function () {

  const wrapper = document.querySelector(".full-screen-wrapper");

  if (!wrapper) return;

  // 🔥 用 JS 強制加 position（繞過編輯器）
  wrapper.style.position = "fixed";
  wrapper.style.top = "0";
  wrapper.style.left = "0";
  wrapper.style.width = "100vw";
  wrapper.style.height = "100vh";
  wrapper.style.display = "none";
  wrapper.style.justifyContent = "center";
  wrapper.style.alignItems = "center";
  wrapper.style.zIndex = "999999";

});
