export default function lerMais() {
  const btnLeiaMais = document.querySelectorAll("#leiaMais");

  btnLeiaMais.forEach((btn) => {
    btn.addEventListener("click", () => {
      const container = btn.parentElement;
      const txtLeiaMais = container.querySelector("#leiaMaisTexto");

      txtLeiaMais.classList.toggle("dsp-block");
      if (txtLeiaMais.classList.contains("dsp-block")) {
        btn.innerText = "Fechar";
      } else {
        btn.innerText = "Leia mais...";
      }
    });
  });
}
