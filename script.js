const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

sendBtn.onclick = function(){
  let messageInput = document.getElementById("message");
  if(messageInput.value.trim() === ""){
    return
  };
  const container = document.createElement("div");
  container.className = "textContainer";
  message = messageInput.value;
  message = message.replace(/\n/g, "<br>");
  
  const time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let meridian = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  hour = hour.toString().padStart(2, '0');
  minute = minute.toString().padStart(2, '0');
  let timestamp = `${hour}:${minute} ${meridian}`;
  
  
  container.innerHTML = `
  <div class="msg-text">${message}</div>
  <span class="msg-time">${timestamp}</span>` ;
  chatBox.append(container);
  chatBox.scrollTop = chatBox.scrollHeight;
  messageInput.value = "";
  messageInput.focus();
  messageInput.style.height = "auto";
}

const textarea = document.getElementById("message");

textarea.addEventListener("input", () => {
  const style = window.getComputedStyle(textarea);
  const lineHeight = parseInt(style.lineHeight);

  const maxHeight = lineHeight * 6;

  textarea.style.height = "auto";

  if(textarea.scrollHeight > textarea.clientHeight){
    const newHeight = textarea.scrollHeight;

    if(newHeight > maxHeight){
      textarea.style.height = maxHeight + "px";
      textarea.style.overflowY = "auto";
    } else {
      textarea.style.height = newHeight + "px";
      textarea.style.overflowY = "hidden";
    }
  }
});
