// Growth Hub — light interactivity (no dependencies)

// Your waitlist signup form. To change where signups go, edit this one URL.
var WAITLIST_URL = "https://forms.gle/3sb8WSJUnqbjkZE49";

document.addEventListener("DOMContentLoaded", function () {
  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Hero email field -> open the Google Form (keeps existing signup flow, zero backend)
  var form = document.getElementById("waitlist-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("email");
      if (email && !email.checkValidity()) {
        email.reportValidity();
        return;
      }
      window.open(WAITLIST_URL, "_blank", "noopener");
    });
  }

  // Scroll-reveal animations
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }
});
