// Array global para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombre = inputAmigo.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Crear un elemento li para mostrar el nombre en la lista de amigos
  const li = document.createElement("li");
  li.textContent = nombre;
  document.getElementById("listaAmigos").appendChild(li);

  // Limpiar el campo de entrada y enfocar para el siguiente ingreso
  inputAmigo.value = "";
  inputAmigo.focus();
}

// Función para realizar el sorteo aleatorio del amigo secreto
function sortearAmigo() {
  // Verificar que la lista no esté vacía
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // Seleccionar aleatoriamente un índice
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indice];

  // Mostrar el resultado en el elemento con id "resultado"
  // Se utiliza un elemento li para mantener la consistencia con la estructura HTML
  const resultadoUL = document.getElementById("resultado");
  resultadoUL.innerHTML = `<li>El amigo secreto es: ${amigoSeleccionado}</li>`;
}
