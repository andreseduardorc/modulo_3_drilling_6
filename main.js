let nombres = [];


function actualizarListado() {
  const listadoDiv = document.querySelector('.listado');
  listadoDiv.innerHTML = nombres.join(', ');
}


document.getElementById('btnAgregar').addEventListener('click', function() {
  const inputAgregar = document.getElementById('inputAgregar');
  const nombre = inputAgregar.value.trim();

  if (nombre !== '') {
    nombres.push(nombre);
    inputAgregar.value = '';
    actualizarListado();
  }
});


document.getElementById('btnBorrar').addEventListener('click', function() {
  const inputBorrar = document.getElementById('inputBorrar');
  const nombreBorrar = inputBorrar.value.trim();

  if (nombreBorrar !== '') {
    nombres = nombres.filter(function(nombre) {
      return nombre !== nombreBorrar;
    });
    inputBorrar.value = '';
    actualizarListado();
  }
});