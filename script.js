const API = "https://6a60f147003b0479e17b.sfo.appwrite.run/";

async function askGemini() {

    const prompt = document.getElementById("prompt").value.trim();

    if (!prompt) return;

    document.getElementById("loading").innerText = "Thinking...";
    document.getElementById("response").innerText = "";

    try {

        const res = await fetch(
            API + "?prompt=" + encodeURIComponent(prompt),
            {
                method: "GET"
            }
        );

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();

        document.getElementById("loading").innerText = "";
        document.getElementById("response").innerText = data.response;

    } catch (e) {

        document.getElementById("loading").innerText = "";
        document.getElementById("response").innerText =
            "Error: " + e.message;

    }
}
