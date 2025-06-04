function toggleLeiaMais() {
    const texto = document.querySelector('.leia-mais-text');
    const botao = document.querySelector('.leia-mais-btn');

    texto.classList.toggle('mostrar');

    if (texto.classList.contains('mostrar')) {
      botao.textContent = 'Leia menos...';
    } else {
      botao.textContent = 'Leia mais...';
    }
  }