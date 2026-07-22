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
                method: "GET",
                mode: "cors"
            }
        );

        console.log("Status:", res.status);

        const text = await res.text();

        console.log("Response:", text);

        document.getElementById("loading").innerText = "";

        try {

            const data = JSON.parse(text);

            document.getElementById("response").innerText =
                data.response ?? JSON.stringify(data, null, 2);

        } catch {

            document.getElementById("response").innerText = text;

        }

    } catch (e) {

        document.getElementById("loading").innerText = "";

        document.getElementById("response").innerText =
            "ERROR:\n" +
            e.name + "\n" +
            e.message;

    }
}
