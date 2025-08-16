const questions = [
  // ========================== أساسيات (سهلة) ==========================
  { q: "ما نوع البيانات للعدد 10 ؟", options: ["int", "float", "string", "bool"], answer: "int" },
  { q: "كيف نطبع نص في بايثون؟", options: ["echo()", "print()", "display()", "write()"], answer: "print()" },
  { q: "كيف نكتب تعليق في بايثون؟", options: ["//", "#", "/* */", "--"], answer: "#" },
  { q: "ما ناتج 7 // 2 ؟", options: ["3", "3.5", "4", "Error"], answer: "3" },
  { q: "ما ناتج 7 % 2 ؟", options: ["1", "2", "0", "Error"], answer: "1" },

  // ========================== التحكم (if/else, loops) ==========================
  { q: "أي جملة شرطية صحيحة؟", options: ["if x > 5:", "if (x > 5)", "if x > 5 then", "if x > 5 end"], answer: "if x > 5:" },
  { q: "أي حلقة تُستخدم للتكرار على قائمة؟", options: ["for", "while", "loop", "repeat"], answer: "for" },
  { q: "ما الكلمة المفتاحية للخروج من الحلقة؟", options: ["break", "stop", "exit", "quit"], answer: "break" },
  { q: "ما الكلمة المفتاحية لتخطي دورة في الحلقة؟", options: ["skip", "continue", "pass", "jump"], answer: "continue" },
  { q: "ما ناتج: for i in range(3): print(i) ؟", options: ["0 1 2", "1 2 3", "0 1 2 3", "Error"], answer: "0 1 2" },

  // ========================== المجموعات (lists, dict, set, tuple) ==========================
  { q: "كيف نُعرّف قائمة؟", options: ["[]", "{}", "()", "<>"], answer: "[]" },
  { q: "كيف نُعرّف tuple؟", options: ["[]", "{}", "()", "<>"], answer: "()" },
  { q: "أي نوع لا يقبل التكرار؟", options: ["list", "tuple", "set", "dict"], answer: "set" },
  { q: "كيف نحصل على طول list؟", options: ["count()", "len()", "size()", "length()"], answer: "len()" },
  { q: "كيف نضيف عنصر لقائمة؟", options: ["push()", "append()", "add()", "insert()"], answer: "append()" },
  { q: "كيف نحذف عنصر من قائمة؟", options: ["remove()", "pop()", "delete()", "cut()"], answer: "remove()" },
  { q: "ما ناتج: len({'a':1,'b':2}) ؟", options: ["1", "2", "3", "Error"], answer: "2" },
  { q: "ما ناتج: set([1,1,2,3]) ؟", options: ["[1,1,2,3]", "{1,2,3}", "[1,2,3]", "{1,1,2,3}"], answer: "{1,2,3}" },
  { q: "كيف نحصل على المفاتيح في dict؟", options: ["keys()", "values()", "items()", "get()"], answer: "keys()" },
  { q: "كيف نحصل على القيم في dict؟", options: ["values()", "keys()", "items()", "get()"], answer: "values()" },

  // ========================== الدوال (functions) ==========================
  { q: "الكلمة المفتاحية لتعريف دالة؟", options: ["func", "def", "function", "method"], answer: "def" },
  { q: "الكلمة المفتاحية لإرجاع قيمة من دالة؟", options: ["yield", "return", "break", "send"], answer: "return" },
  { q: "ما اسم الدوال المجهولة؟", options: ["lambda", "anon", "func", "temp"], answer: "lambda" },
  { q: "ما القيمة المرجعة إذا لم يوجد return؟", options: ["0", "None", "Error", "False"], answer: "None" },
  { q: "أي من هذه دوال مدمجة؟", options: ["len()", "print()", "input()", "كل ما سبق"], answer: "كل ما سبق" },

  // ========================== الملفات (Files) ==========================
  { q: "ما الوضع لفتح ملف للقراءة؟", options: ["r", "w", "a", "x"], answer: "r" },
  { q: "ما الوضع لفتح ملف للكتابة (يمسح القديم)؟", options: ["w", "a", "r", "rw"], answer: "w" },
  { q: "ما الوضع لفتح ملف للإضافة؟", options: ["a", "r", "w", "x"], answer: "a" },
  { q: "ما الدالة لفتح ملف؟", options: ["file()", "open()", "read()", "write()"], answer: "open()" },
  { q: "ما الدالة لقراءة كل الملف؟", options: ["read()", "readline()", "readlines()", "load()"], answer: "read()" },

  // ========================== OOP ==========================
  { q: "الكلمة المفتاحية لتعريف class؟", options: ["object", "class", "define", "cls"], answer: "class" },
  { q: "اسم الدالة البانية (constructor)؟", options: ["__init__", "__main__", "build()", "create()"], answer: "__init__" },
  { q: "الكلمة للإشارة للكائن الحالي؟", options: ["self", "this", "me", "obj"], answer: "self" },
  { q: "كيف نُنشئ كائن من كلاس Student؟", options: ["Student()", "new Student", "object(Student)", "create(Student)"], answer: "Student()" },
  { q: "صيغة الوراثة الصحيحة؟", options: ["class Child(Parent)", "inherit Parent", "extends Parent", "Child extends Parent"], answer: "class Child(Parent)" },

  // ========================== متوسطة أصعب شوية ==========================
  { q: "ما ناتج: '5' * 3 ؟", options: ["555", "15", "53", "Error"], answer: "555" },
  { q: "ما ناتج: list(range(3)) ؟", options: ["[0,1,2]", "[1,2,3]", "[0,1,2,3]", "Error"], answer: "[0,1,2]" },
  { q: "ما ناتج: 'Python'.lower() ؟", options: ["python", "PYTHON", "Error", "Python"], answer: "python" },
  { q: "ما ناتج: 'python'.capitalize() ؟", options: ["Python", "PYTHON", "python", "Error"], answer: "Python" },
  { q: "ما ناتج: 'hello'.replace('l','x') ؟", options: ["hexxo", "hexlo", "helxo", "hxllo"], answer: "hexxo" },
  { q: "ما ناتج: sum([1,2,3]) ؟", options: ["6", "5", "Error", "123"], answer: "6" },
  { q: "ما ناتج: max([1,5,3]) ؟", options: ["5", "1", "3", "Error"], answer: "5" },
  { q: "ما ناتج: min([1,5,3]) ؟", options: ["1", "5", "3", "Error"], answer: "1" },
  { q: "ما ناتج: 'a' in 'apple' ؟", options: ["True", "False", "Error", "None"], answer: "True" },
  { q: "ما ناتج: bool(0) ؟", options: ["True", "False", "Error", "None"], answer: "False" },

  // ========================== أصعب (تفكير بسيط) ==========================
  { q: "ما ناتج: type({}) ؟", options: ["dict", "set", "list", "tuple"], answer: "dict" },
  { q: "ما ناتج: type(set()) ؟", options: ["dict", "set", "list", "Error"], answer: "set" },
  { q: "ما ناتج: [][0] ؟", options: ["0", "[]", "Error", "None"], answer: "Error" },
  { q: "ما ناتج: {}['a'] لو المفتاح غير موجود؟", options: ["None", "Error", "''", "0"], answer: "Error" },
  { q: "ما ناتج: {}.get('a') لو المفتاح غير موجود؟", options: ["None", "Error", "''", "0"], answer: "None" }
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
