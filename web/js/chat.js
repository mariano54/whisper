var chatRecord;
var chatBox;
var chatTimer;
function receiveChat(message,seconds) {
    //Drop in the chat box
    var newDiv = document.createElement('div');
    newDiv.innerHTML = message;
    newDiv.style.margin = '10px';
    chatRecord.appendChild(newDiv);
    //Make the div dissappear
    newDiv.lifeTime = seconds*30;
    var timer = window.setInterval(function() {
    newDiv.lifeTime--;
    if (newDiv.lifeTime <= 30) {
        newDiv.style.opacity = newDiv.lifeTime/30;
    }
    if (newDiv.lifeTime <= 0) {
    chatRecord.removeChild(newDiv);
    window.clearInterval(timer);
    }
},30);
}
function chatBoxKeyDown(evt) {
//When the user presses return
if (evt.keyCode == 13) {
receiveChat(chatBox.value,parseInt(chatTimer.value));
chatBox.value = "";
}
}
function onLoad() {
chatRecord = document.getElementById("chatRecord");
chatBox = document.getElementById("chatBox");
chatTimer = document.getElementById("timer");
chatBox.addEventListener("keydown",chatBoxKeyDown);
}
window.addEventListener("DOMContentLoaded",onLoad);
