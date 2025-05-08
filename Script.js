document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
  
        if (name && email && message) {
          status.textContent = "Thank you for your message!";
          form.reset();
        } else {
          status.textContent = "Please fill out all fields.";
        }
      });
    }
  });
  