export default function jsForm() {
  const formulario = document.querySelector("form");

  const btnLimpar = document.querySelector("form #btnLimpar");
  const inputs = formulario.querySelectorAll("input");
  const textArea = formulario.querySelector("textarea");
  btnLimpar.addEventListener("click", (event) => {
    event.preventDefault();
    textArea.value = "";
    inputs.forEach((input) => {
      input.value = "";
    });
  });

  function formularioEnviado(resposta) {
    if (resposta.ok) {
      formulario.innerHTML = "<p style='grid-column: 1/-1; border-radius: 4px; font-size: 1.25rem; font-weight: 600; padding: 1rem; background-color: white; line-height: 1.5rem;'><span style='color= #317A00;'>Mensagem enviada.</span> <br> Em breve entraremos em contato com você.</p>";
    } else {
      formulario.innerHTML = "<p style='grid-column: 1/-1; border-radius: 4px; font-size: 1.25rem; font-weight: 600; padding: 1rem; background-color: white; line-height: 1.5rem;'><span style='color: #E00000;'>Erro no envio de sua mensagem.</span><br> Você pode enviar diretamente para nosso email em: contato@pambrosio.adv.br <br> Ou pelo whatsapp: (41) 3362-1211</p>";
    }
  }

  function enviarFormulario(event) {
    event.preventDefault();
    const btnSubmit = document.querySelector("form #btnSubmit");
    btnSubmit.disabled = true;
    btnSubmit.innerText = "Enviando...";

    const data = new FormData(formulario);

    fetch("../enviar.php", {
      method: "POST",
      body: data,
    }).then(formularioEnviado);
  }

  formulario.addEventListener("submit", enviarFormulario);
}
