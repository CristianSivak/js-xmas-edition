function validarNombre(nombre) {
  if (nombre === "") {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return "Este campo solo acepta letras";
  }

  return "";
}

function validarCiudad(ciudad) {
  if (ciudad === "") {
    return "Ingrese una opcion de ciudad";
  }
  return "";
}

function validarDescripcionRegalo(descr) {
  if (descr === "") {
    return "El campo descripcion regalo debe tener al menos 1 caracter";
  }
  if (descr.length >= 250) {
    return "El campo descripcion regalo debe tener menos de 250 caracteres";
  }
  if (!/^[a-z0-9]+$/i.test(descr)) {
    return "El campo descripcion regalo solo acepta letras y numeros";
  }
  return "";
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");
  const $nombre = $form.nombre.value;
  const $ciudad = $form.ciudad.value;
  const $descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre($nombre);
  const errorCiudad = validarCiudad($ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo($descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    ["descripcion-regalo"]: errorDescripcionRegalo,
  };

  const esExito = manejarErrores(errores) === 0;

  if (esExito) {
    $form.className = "oculto";
    const exito = document.querySelector("#exito");
    exito.className = "";

    esperarCincoSeg();
  }

  function esperarCincoSeg() {
    const cincoSeg = setTimeout(redireccionarPagina, 5000);
  }

  function redireccionarPagina() {
    window.location.href = "wishlist.html";
  }

  event.preventDefault();
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  let cantidadDeErrores = 0;
  borrarErrores();
  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      cantidadDeErrores++;
      $form[key].className = "error";

      const $error = document.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error);
    } else {
      $form[key].className = "";
    }
  });
  return cantidadDeErrores;
}

function borrarErrores() {
  const $listaErrores = document.querySelectorAll("li");
  for (let i = 0; i < $listaErrores.length; i++) {
    $listaErrores[i].remove();
  }
}
const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
