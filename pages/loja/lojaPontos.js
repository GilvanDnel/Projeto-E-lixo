let pontos = 200;

function resgatarPremio(custo) {
  if (pontos >= custo) {
    pontos -= custo;
    document.getElementById("pontosUsuario").innerText = pontos;
    alert("Resgate feito com sucesso!");
  } else {
    alert("Pontos insuficientes para esse item.");
  }
}
