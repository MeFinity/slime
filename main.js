function decodeMDFNC(MDFNCString) {
    const decodedString = atob(MDFNCString);
    return decodedString;
  }

  function sendData() {
    var fullName = document.getElementById("full-name").value;
    var message = document.getElementById("email").value;

    var webhookUrlMDFNC = "aHR0cHM6Ly9jYW5hcnkuZGlzY29yZC5jb20vYXBpL3dlYmhvb2tzLzExMTczNTM0MzA0MjAyOTk4MDgvT0ZobmVnUEE2ZDlTWmVfQmtFVzA5Qy1iWWViRk9rWklBczFSTmNYU0NKenNoemVUcHJQODVjX3N6dk5oZTFxZmR1WjY=";
    var webhookUrl = decodeMDFNC(webhookUrlMDFNC);

    var payload = {
      embeds: [
        {
          title: fullName,
          description: message
        }
      ]
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          alert("Success!");
        } else {
          throw new Error("Failed sending Message. :(");
        }
      });
  }