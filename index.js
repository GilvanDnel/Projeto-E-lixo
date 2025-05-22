document.addEventListener("DOMContentLoaded", () => {
  const empresas = [
    {
      nome: "GOV",
      site: "https://www.gov.br/pt-br",
      logo: "https://barra.sistema.gov.br/v1/assets/govbr.webp",
    },

    {
      nome: "CETAM",
      site: "https://www.cetam.am.gov.br/",
      logo: "https://apstatic.prodam.am.gov.br/images/logo_governo/logo-gov-horizontal-contraste.png",
    },

    {
      nome: "SEMULSP",
      site: "https://www.manaus.am.gov.br/",
      logo: "https://www.cmm.am.gov.br/transparencia/wp-content/uploads/2022/03/logo-CMM-horizontal-colorido-small.png",
    },

    {
      nome: "Instituto Descarte Correto",
      site: "https://ead.institutodescartecorreto.org/loja_virtual/index.php",
      logo: "https://ead.institutodescartecorreto.org/imagens/logo.png?v=1700142990",
    },

    {
      nome: "ESBAM",
      site: "https://esbam.edu.br/",
      logo: "https://esbam.edu.br/wp-content/uploads/2019/07/ESBAM-MARCA.png",
    },

    {
      nome: "GREEN ELETRON",
      site: "https://greeneletron.org.br/blog/saiba-onde-descartar-eletroeletronicos-e-pilhas-sem-utilidade-em-manaus/",
      logo: "https://greeneletron.org.br/blog/wp-content/uploads/2019/07/cropped-logo-menu.png",
    },

    {
      nome: "PORTAL AMAZÔNIA",
      site: "https://portalamazonia.com/meio-ambiente/saiba-onde-descartar-lixo-eletronico-em-manaus/",
      logo: "https://portalamazonia.com/wp-content/uploads/2023/04/Logo-Portal-Amazonia.png",
    },

    {
      nome: "UFAM",
      site: "https://www.ufam.edu.br/",
      logo: "https://www.ufam.edu.br/images/conteudo/aniversario/116/cone_Portal_116_anos_v2_Prancheta_1.jpg",
    },

  ];

  const container = document.getElementById("empresasParceiras");


  empresas.forEach((e) => {
    const card = document.createElement("div");
    card.className = "col-md-3 mb-3";
    card.innerHTML = `
        <div class="card card-parceira" onclick="window.open('${e.site}', '_blank')">
          <img src="${e.logo}" class="card-img-top" alt="${e.nome}" />
        </div>
      `;
    container.appendChild(card);
  });
});









