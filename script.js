let count = 0;
const counter = document.getElementById("counter");

function showModal(message) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const content = document.createElement("div");
  content.classList.add("modal-content");
  content.innerHTML = `<p>${message}</p><button>Окей 💖</button>`;

  content.querySelector("button").addEventListener("click", () => {
    modal.remove();
  });

  modal.appendChild(content);
  document.body.appendChild(modal);
}

window.addEventListener("click", function(e) {
  if (e.target === counter) return;

  count++;
  counter.textContent = count;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = `${e.clientX - 15}px`;
  heart.style.top = `${e.clientY - 15}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 800);

  if (count === 1000) {
    setTimeout(() => {
      showModal("🎁 Ура! Вы достигли 1000 прикосновений и получаете подарок! 🎉");
    }, 100);
  }
});

counter.addEventListener("click", function(e) {
  e.stopPropagation();
  showModal(`Вы прикоснулись ${count} раз${count % 10 === 1 && count % 100 !== 11 ? '' : (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20) ? 'а' : 'ов')}!<br>Продолжайте отправлять касания, чтобы получить подарок 💝`);
});
