const API = "https://6a60f147003b0479e17b.sfo.appwrite.run/";

let history = [];

async function askGemini() {

    const input = document.getElementById("prompt");
    const prompt = input.value.trim();

    if (!prompt) return;

    history.push({
        role: "user",
        text: prompt
    });

    document.getElementById("loading").innerText = "Thinking...";

    try {

        const res = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                history: history
            })
        });

        const data = await res.json();

        history.push({
            role: "assistant",
            text: data.response
        });

        document.getElementById("response").innerText = data.response;
        document.getElementById("loading").innerText = "";

        input.value = "";

    } catch (e) {

        document.getElementById("loading").innerText = "";
        document.getElementById("response").innerText = e.message;

    }

}
