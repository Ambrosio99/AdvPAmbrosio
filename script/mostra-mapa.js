export default function mostraMapa() {
  const mapa = document.querySelector("#local-iframe");
  const vejaMapa = document.querySelector("#span-iframe");
  const fecharMapa = document.querySelector("#span-fechar-mapa");

  vejaMapa.addEventListener("click", () => {
    if (mapa.style.display === "none") {
      mapa.style.display = "block";
      vejaMapa.innerText = "Fechar mapa";
    } else {
      mapa.style.display = "none";
      vejaMapa.innerText = "Veja no mapa";
    }
  });
}
