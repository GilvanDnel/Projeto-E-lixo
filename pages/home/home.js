/*document.addEventListener("DOMContentLoaded", () => {
  const empresas = [
    {
      nome: "Green Eletron",
      site: "https://greeneletron.org.br/",
      logo: "https://greeneletron.org.br/images/logo-green-mid.png",
    },
    {
      nome: "Impolut",
      site: "https://www.impolut.com.br/",
      logo: "https://www.impolut.com.br/wp-content/uploads/2021/01/logo-png-1.png",
    },
    {
      nome: "SEMULSP",
      site: "https://www.manaus.am.gov.br/",
      logo: "https://www.cmm.am.gov.br/transparencia/wp-content/uploads/2022/03/logo-CMM-horizontal-colorido-small.png",
    },
  ];

  const container = document.getElementById("empresasParceiras");

  empresas.forEach((e) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-3";
    card.innerHTML = `
        <div class="card card-parceira" onclick="window.open('${e.site}', '_blank')">
          <img src="${e.logo}" class="card-img-top" alt="${e.nome}" />
          <div class="card-body text-center">
            <h5 class="card-title">${e.nome}</h5>
          </div>
        </div>
      `;
    container.appendChild(card);
  });
});*/
