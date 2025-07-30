const questions = [
  // سهلة
  {
    q: "ما هي الكلمة المفتاحية لطباعة شيء في بايثون؟",
    options: ["input", "echo", "print", "show"],
    answer: "print"
  },
  {
    q: "ما هو ناتج print(2 + 3 * 4)؟",
    options: ["20", "14", "24", "18"],
    answer: "14"
  },
  {
    q: "أي من التالي يُستخدم لتعريف متغير؟",
    options: ["let", "var", "int", "لا شيء مما سبق"],
    answer: "لا شيء مما سبق"
  },
  {
    q: "ما نوع القيمة التي تُرجعها input()؟",
    options: ["int", "str", "bool", "float"],
    answer: "str"
  },
  {
    q: "أي من هذه الكلمات تُستخدم لتعليق السطر؟",
    options: ["//", "/*", "#", "--"],
    answer: "#"
  },
  {
    q: "هل بايثون حساسة لحالة الحروف؟",
    options: ["لا", "نعم"],
    answer: "نعم"
  },
  {
    q: "ما هو امتداد ملفات بايثون؟",
    options: [".js", ".py", ".html", ".exe"],
    answer: ".py"
  },
  {
    q: "ما هو ناتج type(5.0)؟",
    options: ["<.class 'int'.>", "<.class 'float'.>", "<.float.>", "خطأ"],
    answer: "<.class 'float'.>"
  },
  {
    q: "ما فائدة if في بايثون؟",
    options: ["التكرار", "الطباعة", "الشرط", "الاستيراد"],
    answer: "الشرط"
  },
  {
    q: "أي من التالي صحيح لتعريف دالة؟",
    options: ["func()", "define()", "def()", "function()"],
    answer: "def()"
  },

  // متوسطة
  {
    q: "ما الفرق بين list و tuple؟",
    options: ["list قابلة للتعديل", "tuple أسرع", "tuple لا تتغير", "جميع ما سبق"],
    answer: "جميع ما سبق"
  },
  {
    q: "أي من التالي يمثل حلقة تكرار؟",
    options: ["loop", "repeat", "for", "check"],
    answer: "for"
  },
  {
    q: "ما نوع البيانات الناتج من 3 > 2؟",
    options: ["int", "str", "bool", "float"],
    answer: "bool"
  },
  {
    q: "كيف تكتب شرط يتحقق إن كانت x تساوي 5؟",
    options: ["if x = 5", "if x == 5", "x == 5 then", "if x equal 5"],
    answer: "if x == 5"
  },
  {
    q: "ما هي الكلمة المستخدمة لتعريف دالة؟",
    options: ["define", "def", "func", "function"],
    answer: "def"
  },

  // صعبة
  {
    q: "ما هو الكلاس في بايثون؟",
    options: [
      "هي دالة",
      "نوع متغير",
      "قالب لإنشاء كائنات",
      "ليست من بايثون"
    ],
    answer: "قالب لإنشاء كائنات"
  },
  {
    q: "أي من التالي خاصية للكائن (object)؟",
    options: ["method", "property", "def", "print"],
    answer: "property"
  },
  {
    q: "متى نستخدم self في الكلاس؟",
    options: [
      "داخل الدوال لتعريف خصائص الكائن",
      "في بداية البرنامج",
      "لتكرار الحلقة",
      "داخل if فقط"
    ],
    answer: "داخل الدوال لتعريف خصائص الكائن"
  },
  {
    q: "ما الفرق بين المتغير global و local؟",
    options: [
      "global خارج الدوال فقط",
      "local داخل الدوال فقط",
      "الاثنين حسب السياق",
      "الأول دائم والثاني مؤقت"
    ],
    answer: "local داخل الدوال فقط"
  },
  {
    q: "أي كود يطبع جدول ضرب 1 إلى 5؟",
    options: [
      "for x in range(1, 6): for y in range(1, 6): print(x*y)",
      "print(x*y)",
      "while x < 5",
      "لا يمكن ذلك في بايثون"
    ],
    answer: "for x in range(1, 6): for y in range(1, 6): print(x*y)"
  }
];

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
