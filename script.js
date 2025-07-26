// Alerta de clique em botão (exemplo simples)
document.querySelectorAll(".button").forEach(botao => {
  botao.addEventListener("click", function(event) {
    // Comente essa linha depois que colocar links reais:
    alert(`Você clicou em: ${botao.textContent}`);
  });
});
