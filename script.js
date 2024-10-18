


  function sendMail(event) {
    event.preventDefault(); 

    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_ksn5c0q", "template_2dnv42t", parms)
      .then((response) => {
        alert("Email Sent!!!");
      }, (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
      });
  }