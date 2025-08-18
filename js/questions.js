const questions = [
  // ========================== Simple Ask Sytanx ==========================
  { q: "ما نوع البيانات للعدد 10 ؟", options: ["int", "float", "string", "bool"], answer: "int" },

];

//هنا يبدا التحقق من التسجيل ويبدأ الوقت
function startTimer() {
  const user = localStorage.getItem("userEmail");
  if (!user || !user.includes("@")) {
    alert("يجب تسجيل الدخول أولاً.");
    location.href = "index.html";
    return;
  }

  // تايمر الامتحان
  let min = 60, sec = 0;
  const timer = document.getElementById("time");
  const interval = setInterval(() => {
    if (sec === 0) {
      if (min === 0) {
        clearInterval(interval);
        document.getElementById("examForm").submit();
        return;
      }
      min--;
      sec = 59;
    } else {
      sec--;
    }
    timer.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }, 1000);

  renderQuestions();
}


function renderQuestions() {
  const container = document.getElementById("questionsContainer");

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<label><b>س${i + 1}:</b> ${q.q}</label><br>`;
    q.options.forEach(opt => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${opt}" required> ${opt}
        </label><br>`;
    });
    div.innerHTML += "<hr>";
    container.appendChild(div);
  });
}

function submitExam(e) {
  e.preventDefault();
  let score = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  alert(`تم الانتهاء ✅\nالنتيجة: ${score} من ${questions.length}`);
  location.href = "index.html";
}
