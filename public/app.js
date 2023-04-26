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

// Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
