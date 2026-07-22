const API =
"https://6a60f147003b0479e17b.sfo.appwrite.run/";

async function askGemini(){

    const prompt =
        document.getElementById("prompt").value;

    if(!prompt) return;

    document.getElementById("loading").innerHTML =
    "Thinking...";

    document.getElementById("response").innerHTML="";

    const res = await fetch(
        API +
        "?prompt=" +
        encodeURIComponent(prompt)
    );

    const data = await res.json();

    document.getElementById("loading").innerHTML="";

    document.getElementById("response").innerHTML =
        data.response;
}
