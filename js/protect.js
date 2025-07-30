document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (e.ctrlKey && ['c', 'x', 'u', 's', 'a'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
  if (e.key === "PrintScreen") {
    navigator.clipboard.writeText("");
    alert("تم منع تصوير الشاشة.");
  }
});
document.addEventListener("keydown", function(e) {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
  }
});
