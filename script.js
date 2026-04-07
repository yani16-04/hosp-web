function sendMessage() {
  let input = document.getElementById("user-input");
  let message = input.value.toLowerCase();
  let chat = document.getElementById("chat-body");

  if (message === "") return;

  // Show user message
  chat.innerHTML += `<div class="user">You: ${message}</div>`;

  let reply = getBotResponse(message);

  // Show bot reply
  chat.innerHTML += `<div class="bot">Bot: ${reply}</div>`;

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

function getBotResponse(msg) {

  if (msg.includes("appointment"))
    return "You can book an appointment by calling 9876543210.";

  if (msg.includes("timing"))
    return "We are open 24/7 for emergency services.";

  if (msg.includes("doctor"))
    return "We have expert doctors available in all departments.";

  if (msg.includes("emergency"))
    return "Call our emergency number: 102 🚑";

  return "Sorry, I didn't understand. Please ask about appointments, doctors, or emergency.";
}
