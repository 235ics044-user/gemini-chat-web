const API = "https://6a60f147003b0479e17b.sfo.appwrite.run/";

async function askGemini() {

    const prompt = document.getElementById("prompt").value;

    document.getElementById("loading").innerText = "Thinking...";
    document.getElementById("response").innerText = "";

    try {

        const res = await fetch(
    API + "?prompt=" + encodeURIComponent(prompt),
    {
        method: "GET",
        mode: "cors"
    }
);

        const text = await res.text();

        document.getElementById("loading").innerText = "";

        document.getElementById("response").innerText =
            "HTTP: " + res.status + "\n\n" + text;

    } catch (e) {

        document.getElementById("loading").innerText = "";

        document.getElementById("response").innerText =
            "ERROR:\n" + e;

    }
}
