const validadores = {
  telefono: {
    regla: /^\d{10}$/,
    mensajeOk: "Telefono valido.",
    mensajeError: "Escribe exactamente 10 digitos sin espacios ni guiones."
  },
  url: {
    regla: /^https?:\/\/[a-zA-Z0-9.-]+\.[a-z]{2,}$/,
    mensajeOk: "URL valida.",
    mensajeError: "Incluye http(s) y un dominio valido."
  },
  contrasena: {
    regla: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
    mensajeOk: "Contrasena valida.",
    mensajeError: "Minimo 8 caracteres, una mayuscula y un numero."
  }
};

function validarCampo(campo) {
  const nombreRegla = campo.getAttribute("data-validate");
  const regla = validadores[nombreRegla];
  const aviso = document.querySelector('[data-feedback="' + nombreRegla + '"]');

  if (!regla || !aviso) {
    return;
  }

  const valor = campo.value.trim();

  if (valor === "") {
    campo.classList.remove("is-valid");
    campo.classList.remove("is-invalid");
    aviso.classList.remove("text-success");
    aviso.classList.remove("text-danger");
    aviso.textContent = "";
    return;
  }

  if (regla.regla.test(valor)) {
    campo.classList.add("is-valid");
    campo.classList.remove("is-invalid");
    aviso.classList.remove("text-danger");
    aviso.classList.add("text-success");
    aviso.textContent = regla.mensajeOk;
  } else {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    aviso.classList.remove("text-success");
    aviso.classList.add("text-danger");
    aviso.textContent = regla.mensajeError;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const campos = document.querySelectorAll("[data-validate]");
  const formulario = document.getElementById("regex-form");

  campos.forEach(function (campo) {
    campo.addEventListener("input", function () {
      validarCampo(campo);
    });

    campo.addEventListener("blur", function () {
      validarCampo(campo);
    });
  });

  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();
      campos.forEach(function (campo) {
        validarCampo(campo);
      });
    });
  }
});
