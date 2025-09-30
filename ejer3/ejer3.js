const tareas = document.querySelectorAll(".tarea")
const columnas = document.querySelectorAll(".columna-kanban")

tareas.forEach(tarea => {
  tarea.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", e.target.id);
  })
})
columnas.forEach(columna => {
  columna.addEventListener("dragover", e => {
    e.preventDefault();
    columna.classList.add("arrastrando-encima");
  })

  columna.addEventListener("dragleave", () => {
    columna.classList.remove("arrastrando-encima");
  })

  columna.addEventListener("drop", e => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const elemento = document.getElementById(id);
    if (elemento) {
      columna.appendChild(elemento);
    }
    columna.classList.remove("arrastrando-encima");
  })
})
