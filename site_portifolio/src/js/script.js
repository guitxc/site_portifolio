function enviarWhats(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    const telefone = '5511989389110';
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const MsgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${MsgFormatada}`;
    window.open(url, 'blank');
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('carrossel-projetos');
  if (!container) return;

  setTimeout(() => {
    const cards = Array.from(container.children);
    if (cards.length === 0) return;
    const gap = parseInt(getComputedStyle(container).gap) || 32;
    const totalCardsWidth = cards.reduce((acc, card) => acc + card.offsetWidth, 0);
    const totalGapWidth = gap * (cards.length - 1);
    const totalWidth = totalCardsWidth + totalGapWidth;
    const scrollTo = (totalWidth - container.clientWidth) / 2;
    container.scrollLeft = scrollTo > 0 ? scrollTo : 0;
  }, 100);
});

// Carrossel Infinito
window.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('track');
  if (!track) return;
  let slides = track.querySelectorAll('.slide');

  // Clonar primeiro e último slide para o loop infinito
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.prepend(lastClone);

  // Ajuste inicial de posição
  let index = 1;
  track.style.transform = `translateX(${-index * 100}%)`;

  window.moveNext = function() {
    if (index >= slides.length + 1) return;
    index++;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(${-index * 100}%)`;
  }

  window.movePrev = function() {
    if (index <= 0) return;
    index--;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(${-index * 100}%)`;
  }

  track.addEventListener('transitionend', () => {
    if (index === slides.length + 1) {
      track.style.transition = "none";
      index = 1;
      track.style.transform = `translateX(${-index * 100}%)`;
    }
    if (index === 0) {
      track.style.transition = "none";
      index = slides.length;
      track.style.transform = `translateX(${-index * 100}%)`;
    }
  });
});