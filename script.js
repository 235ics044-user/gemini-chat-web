const API = "https://6a60f147003b0479e17b.sfo.appwrite.run/";

async function askGemini() {

    const prompt = document.getElementById("prompt").value;

    if (!prompt) return;

    document.getElementById("loading").innerHTML = "Thinking...";
    document.getElementById("response").innerHTML = "";

    try {

        const res = await fetch(
            API + "?prompt=" + encodeURIComponent(prompt)
        );

        console.log("Status:", res.status);

        const data = await res.json();

        console.log(data);

        document.getElementById("loading").innerHTML = "";

        document.getElementById("response").innerHTML =
            data.response || JSON.stringify(data);

    } catch (err) {

        document.getElementById("loading").innerHTML = "";

        document.getElementById("response").innerHTML =
            "ERROR: " + err.message;

        console.error(err);

    }

}
