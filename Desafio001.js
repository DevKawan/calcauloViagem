
function calcularGasto() {
    const gasolina = parseFloat(document.getElementById("gasolina").value);
    const medioKm = parseFloat(document.getElementById("medioKm").value);
    const distanciaViagemKm = parseFloat(document.getElementById("distanciaViagemKm").value);

    if (isNaN(gasolina) || isNaN(medioKm) || isNaN(distanciaViagemKm)) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const gastoTotal = ((distanciaViagemKm / medioKm) * gasolina).toFixed(2);

    document.querySelector("main.corpo").innerHTML = `
      <div class="card resultado">
        <h2>Você gastará <span>R$ ${gastoTotal}</span> na sua viagem!</h2>
        <p>Muito Obrigado</p>
      </div>
      <div class="fogos"></div>
    `;

    criarFogos();
  }

  function criarFogos() {
    const fogosContainer = document.querySelector(".fogos");
    // Cria 30 fogos com posições e durações aleatórias
    for (let i = 0; i < 30; i++) {
      const fogo = document.createElement("div");
      fogo.classList.add("fogo");
      fogo.style.left = Math.random() * 100 + "%";
      fogo.style.animationDuration = (Math.random() * 2 + 1) + "s";
      fogosContainer.appendChild(fogo);
    }
  }