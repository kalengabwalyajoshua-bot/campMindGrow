function analyze() {
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const hours = document.getElementById("hours").value;
  const result = document.getElementById("result");

  if (name === "" || subject === "" || hours === "") {
    result.innerText = "Please fill in all fields.";
    return;
  }

  let advice = "";

  if (hours < 1) {
    advice = "You should increase your study time slightly each day.";
  } else if (hours <= 2) {
    advice = "You're on the right track, but consistency is key.";
  } else {
    advice = "Great discipline! Just make sure you revise effectively.";
  }

  result.innerText =
    "Hello " + name + "! 📘\n" +
    "For " + subject + ", " +
    advice +
    " MindGrow believes you can improve with focus and practice 🌱";
}
