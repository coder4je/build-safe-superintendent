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

// Preview images by clicking on them

const clickableImages = document.querySelectorAll(".card-image");
const modalPreview = document.getElementById("modal-preview");
const modalImage = document.getElementById("modal-image");
function openModal() {
  clickableImages.forEach((image) => {
    image.addEventListener("click", function () {
      modalImage.src = this.src; // Set the modal image source
      modalPreview.style.display = "flex"; // Display the modal
    });
  });
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("modal-preview");
  modal.style.display = "none";
}

// Download the image
const downloadButtons = document.querySelectorAll(".download-button");

downloadButtons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function () {
    const card = this.closest(".service-card2");
    const image = card.querySelector("img");

    const link = document.createElement("a");
    link.href = image.src;
    link.download = image.src.split("/").pop(); // Get the image file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

// Button to scroll to the Contact Us
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}
