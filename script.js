// Alerta temporário
const botoes = document.querySelectorAll(".button");
botoes.forEach(botao => {
  botao.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Essa funcionalidade será adicionada em breve!");
  });
});
