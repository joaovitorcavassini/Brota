// Seleciona o botão e o menu da página.
const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");

// Abre ou fecha o menu quando o botão é clicado.
botaoMenu.addEventListener("click", function () {
  const menuEstaAberto = botaoMenu.getAttribute("aria-expanded") === "true";

  botaoMenu.setAttribute("aria-expanded", String(!menuEstaAberto));
  botaoMenu.setAttribute(
    "aria-label",
    menuEstaAberto ? "Abrir menu" : "Fechar menu"
  );

  menu.classList.toggle("aberto", !menuEstaAberto);
});

// Fecha o menu depois que uma opção é escolhida.
const linksDoMenu = menu.querySelectorAll("a");

linksDoMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
    menu.classList.remove("aberto");
  });
});
