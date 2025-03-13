$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("togglePanel");
  const panel = document.getElementById("orderPanel");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closePanel");
  const confirmBtn = document.getElementById("confirmOrder");
  const closeOrderBtn = document.getElementById("closeOrder");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const countdownElement = document.getElementById("countdown");

  let timeLeft = 112; // 1:52 sekund

  function startTimer() {
    let timer = setInterval(() => {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      countdownElement.textContent = `${minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        countdownElement.textContent = "Код можно отправить снова";
      }
      timeLeft--;
    }, 1000);
  }

  toggleBtn.addEventListener("click", function () {
    panel.classList.add("show"); // Yon panelni ochish
    overlay.classList.add("show"); // Overlay qo'shish
    startTimer();
  });

  closeBtn.addEventListener("click", function () {
    panel.classList.remove("show"); // Yon panelni yopish
    overlay.classList.remove("show");
  });

  confirmBtn.addEventListener("click", function () {
    step1.classList.add("hidden");
    step2.classList.remove("hidden");
  });

  closeOrderBtn.addEventListener("click", function () {
    panel.classList.remove("show"); // Yon panelni yopish
    overlay.classList.remove("show");
    step2.classList.add("hidden");
    step1.classList.remove("hidden"); // Keyingi safar ochilganda yana 1-step chiqishi uchun
  });

  overlay.addEventListener("click", function () {
    panel.classList.remove("show"); // Yon panelni yopish
    overlay.classList.remove("show");
  });
});
