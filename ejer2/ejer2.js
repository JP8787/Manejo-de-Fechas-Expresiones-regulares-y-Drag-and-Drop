const diasParaNavidad = () => {
  const ahora = new Date();
  const navidad = new Date(ahora.getFullYear(), 11, 25);

  if (ahora > navidad) {
    navidad.setFullYear(ahora.getFullYear() + 1);
  }

  const diferencia = navidad.getTime() - ahora.getTime();
  const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  return dias;
};

const actualizarVista = () => {
  const resultado = document.getElementById("resultado");
  if (!resultado) {
    return;
  }

  const dias = diasParaNavidad();
  if (dias === 0) {
    resultado.textContent = "Hoy es Navidad";
 
  } else {
    resultado.textContent = `Faltan ${dias} dias`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-actualizar");
  if (boton) {
    boton.addEventListener("click", actualizarVista);
  }
  actualizarVista();
});
