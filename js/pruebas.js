function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("123456") === "Este campo solo acepta letras",
    "Validar nombre no valido que solo tenga letras"
  );

  console.assert(
    validarNombre("Fabricio") === "",
    "Validar nombre no funciono con un nombre valido"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Ingrese una opcion de ciudad",
    "Validar ciudad no valido que la ciudad no sea vacio"
  );
  console.assert(
    validarCiudad("Buenos Aires") === "",
    "Validar ciudad no funciono con un nombre de ciudad valido"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "El campo descripcion regalo debe tener al menos 1 caracter",
    "Validar descripcion regalo no valido que la descripcion este vacia"
  );

  console.assert(
    validarDescripcionRegalo(
      "11234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"
    ) === "El campo descripcion regalo debe tener menos de 250 caracteres",
    "Validad descripcion regalo no valido que la descripcion sea menor a 250 caracteres"
  );

  console.assert(
    validarDescripcionRegalo(".......!!!@@@$$$$$") ===
      "El campo descripcion regalo solo acepta letras y numeros",
    "Validar descripcion regalo no valido que solo sean letras y numeros"
  );
  console.assert(
    validarDescripcionRegalo("Regalo") === "",
    "Validar descripcion no funciono con una descripcion valida"
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
