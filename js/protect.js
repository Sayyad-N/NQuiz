// طلب الشاشة الكاملة أول ما يبدأ الامتحان
function enterFullScreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

// ابدأ الشاشة الكاملة مع بداية الامتحان
window.onload = () => {
  enterFullScreen();
  startProtection();
}

// راقب الخروج من الشاشة الكاملة أو التنقل بعيد
function startProtection() {
  // لو خرج من fullscreen
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      alert("❌ خرجت من وضع الامتحان، سيتم إنهاء الاختبار.");
      window.close(); // أو: window.location.href = "index.html";
    }
  });

  // لو غير التبويب أو خرج بره الصفحة
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      alert("❌ لا يُسمح بالخروج من صفحة الامتحان.");
      window.close(); // أو: window.location.href = "index.html";
    }
  });

  // كشف تصغير النافذة أو تقسيم الشاشة
  window.addEventListener("resize", () => {
    if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
      alert("❌ محاولة تقسيم الشاشة أو الخروج تم كشفها");
      window.close(); // أو: window.location.href = "index.html";
    }
  });
}
