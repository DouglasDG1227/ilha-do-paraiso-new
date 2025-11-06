// Formulário de reserva
const reservaForm = document.getElementById("reservaForm");
if (reservaForm) {
  reservaForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = document.getElementById("data").value;
    const pessoas = document.getElementById("pessoas").value;
    const tipo = document.getElementById("tipo").value;

    if (!data || !pessoas || !tipo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    document.getElementById("pessoas").addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9]/g, "");
});

    const mensagem = `Olá! Gostaria de fazer uma reserva:\n\n📅 Data: ${data}\n👥 Número de pessoas: ${pessoas}\n🏖️ Tipo de passeio: ${tipo}`;
    const numeroWhatsApp = "558293511294";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
}

// Carrossel
const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (carouselWrapper && prevBtn && nextBtn && carouselItems.length > 0) {
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
}

const arrowButtons = document.querySelectorAll(".arrows button");

arrowButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 300); // tempo em milissegundos
  });
});

const whatsappButtons = document.querySelectorAll(".btWhatsapp");

whatsappButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const data = document.getElementById("data")?.value || "";
    const pessoas = document.getElementById("pessoas")?.value || "";
    const tipo = document.getElementById("tipo")?.value || "";

    // Se os campos do formulário estiverem disponíveis e preenchidos
    if (data && pessoas && tipo) {
      const mensagem = `Olá! Gostaria de fazer uma reserva:\n\n📅 Data: ${data}\n👥 Número de pessoas: ${pessoas}\n🏖️ Tipo de passeio: ${tipo}`;
      const numeroWhatsApp = "558293511294";
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
    } else {
      // Mensagem genérica para botões fora do formulário
      const mensagem = `Olá! Tenho interesse em saber mais sobre os passeios da Ilha do Paraíso.`;
      const numeroWhatsApp = "558293511294";
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
    }
  });
});

// Carrossel de Fotos (passeio.html)
const carouselWrapperFotos = document.querySelector(".carousel-wrapper-fotos");
const carouselItemsFotos = document.querySelectorAll(".carousel-item-foto");
const prevBtnFoto = document.querySelector(".prev-foto");
const nextBtnFoto = document.querySelector(".next-foto");

if (carouselWrapperFotos && prevBtnFoto && nextBtnFoto && carouselItemsFotos.length > 0) {
  let currentIndexFoto = 0;

  function updateCarouselFotos() {
    const offset = -currentIndexFoto * 50;
    carouselWrapperFotos.style.transform = `translateX(${offset}%)`;
  }

  prevBtnFoto.addEventListener("click", () => {
    if (currentIndexFoto > 0) {
      currentIndexFoto--;
      updateCarouselFotos();
    } else {
        currentIndexFoto = carouselItemsFotos.length - 1; // Loop
        updateCarouselFotos();
    }
  });

  nextBtnFoto.addEventListener("click", () => {
    if (currentIndexFoto < carouselItemsFotos.length - 1) {
      currentIndexFoto++;
      updateCarouselFotos();
    } else {
        currentIndexFoto = 0; // Loop
        updateCarouselFotos();
    }
  });
}

/* Lógica de Animação de Entrada (Scroll Reveal) - DESATIVADA TEMPORARIAMENTE PARA CORREÇÃO DE VISUALIZAÇÃO
const elementsToAnimate = document.querySelectorAll(".beneficio, .card, .foto");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 }); // Começa a animar quando 10% do elemento está visível

elementsToAnimate.forEach(element => {
  observer.observe(element);
});
*/

// Lógica de Filtro do Cardápio
const filtroBtns = document.querySelectorAll(".filtro-btn");
const categorias = document.querySelectorAll(".categoria");

filtroBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const categoriaSelecionada = btn.getAttribute("data-categoria");

        // Remove a classe 'active' de todos os botões e adiciona ao clicado
        filtroBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Filtra as categorias
        categorias.forEach(categoria => {
            const categoriaItem = categoria.getAttribute("data-categoria");

            if (categoriaSelecionada === "todos" || categoriaSelecionada === categoriaItem) {
                categoria.style.display = "block"; // Mostra a categoria
                categoria.classList.remove("show"); // Garante que o estado inicial (opacidade 0, escala 0.95) seja aplicado
                // Força o navegador a recalcular o estilo (necessário para a transição funcionar)
                void categoria.offsetWidth; 
                categoria.classList.add("show"); // Aplica o estado final com transição

            } else {
                // Inicia o fade-out antes de ocultar
                categoria.classList.remove("show"); // Inicia o fade-out e o movimento de volta
                setTimeout(() => {
                    categoria.style.display = "none"; // Oculta a categoria após o fade-out
                }, 400); // 400ms = tempo da nova transição CSS
            }
        });
    });
});

// Menu responsivo
const toggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (toggleBtn && navbar) {
  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

