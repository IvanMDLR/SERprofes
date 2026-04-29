document.querySelector(".btn-enviar").addEventListener("click", () => {
    const btn = document.querySelector(".btn-enviar");

    btn.innerText = "Enviado ✔";
    btn.style.background = "rgba(255,255,255,0.2)";

    setTimeout(() => {
        btn.innerText = "Enviar Mensaje";
        btn.style.background = "rgba(255,255,255,0.08)";
    }, 2000);
});