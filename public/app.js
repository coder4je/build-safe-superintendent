// Menu Links
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const menuLinksList = menuLinks.querySelectorAll("a");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

menuLinksList.forEach(function (menuLink) {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
  });
});

// EmailJS
const btn = document.getElementById("button");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_zsfpsxy";
    const templateID = "template_zexaenn";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert(
          "Thank you for your message. We will get back to you as soon as possible!"
        );
        this.reset();
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });

// Contact Us Phone # dash
const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", function (event) {
  const input = event.target.value.replace(/\D/g, "").substring(0, 12); // Remove non-numeric characters and limit to 12 digits
  const formattedInput = input.replace(
    /(\d{3})(\d{1,3})?(\d{1,4})?/,
    function (match, p1, p2, p3) {
      let output = "";
      if (p1) {
        output = p1;
        if (p2) {
          output += "-" + p2;
          if (p3) {
            output += "-" + p3;
          }
        }
      }
      return output;
    }
  );
  event.target.value = formattedInput;
});

// Service Details

function showDetails(serviceId) {
  const details = document.getElementById(`${serviceId}-details`);
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    details.style.maxHeight = null;
  });

  if (details.style.maxHeight) {
    details.style.maxHeight = null;
  } else {
    details.style.maxHeight = `${details.scrollHeight}px`;
  }
}

// Get the modal and the link that opens it

const modalButtons = document.querySelectorAll(".modal-button");
modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("id") + "-modal";
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

    const closeButton = modal.querySelector(".close");
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
