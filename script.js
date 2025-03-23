// Rolagem Suave
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// Destaque no Menu ao Rolar
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#depoimento-form");
    const nomeInput = document.querySelector("#depoimento-nome");
    const mensagemInput = document.querySelector("#depoimento-mensagem");
    const depoimentosContainer = document.querySelector("#depoimentos-container");
    const links = document.querySelectorAll("nav a");
  
    // Rolagem Suave
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Formulário de Depoimentos
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = nomeInput.value.trim();
      const mensagem = mensagemInput.value.trim();
  
      if (nome && mensagem) {
        const novoDepoimento = document.createElement("blockquote");
        novoDepoimento.innerHTML = `<p>"${mensagem}" - ${nome}</p>`;
        depoimentosContainer.appendChild(novoDepoimento);
        nomeInput.value = "";
        mensagemInput.value = "";
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  });
  