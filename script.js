const API = "https://6a60f147003b0479e17b.sfo.appwrite.run/";

const chat = document.getElementById("chat");
const promptBox = document.getElementById("prompt");
const typing = document.getElementById("typing");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, type) {

    const div = document.createElement("div");

    div.className = "message " + type;

    div.innerText = text;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;
}

async function askGemini() {

    const prompt = promptBox.value.trim();

    if (!prompt) return;

    addMessage(prompt, "user");

    promptBox.value = "";

    typing.innerText = "Gemini is typing...";

    sendBtn.disabled = true;

    try {

        const res = await fetch(
            API + "?prompt=" + encodeURIComponent(prompt)
        );

        const data = await res.json();

        typing.innerText = "";

        addMessage(data.response, "ai");

    }
    catch (e) {

        typing.innerText = "";

        addMessage("❌ " + e.message, "ai");

    }

    sendBtn.disabled = false;

}

sendBtn.addEventListener("click", askGemini);

promptBox.addEventListener("keydown", function(e){

    if(e.key==="Enter" && !e.shiftKey){

        e.preventDefault();

        askGemini();

    }

});

document.getElementById("newChat").addEventListener("click", function(){

    chat.innerHTML = `
        <div class="message ai">
            👋 Hello! How can I help you today?
        </div>
    `;

});
