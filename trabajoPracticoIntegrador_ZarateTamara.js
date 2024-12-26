//* 1. Estructura de Datos

//* a) Crear un array de objetos llamado libros que contenga al menos 10
//*/ libros. Cada libro debe tener las siguientes propiedades:
//* ✓ id (número)
//* ✓ título (string),
//* ✓ autor (string),
//* ✓ año (número),
//* ✓ género (string),
//* ✓ disponible (booleano).
//* b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
//* Cada usuario debe tener:
//* ✓ id (número)
//* ✓ nombre (string)
//* ✓ email (string)
//* ✓ librosPrestados (array de ids de libros).

// a)

const libros = [
  {
    id: 1,
    titulo: "El Aleph",
    autor: "Jorge Luis Borges",
    anio: 1949,
    genero: "Ficcion",
    disponible: true,
  },
  {
    id: 2,
    titulo: "El amor en los tiempos del colera",
    autor: "Gabriel Garcia Marquez",
    anio: 1985,
    genero: "Clasico",
    disponible: false,
  },
  {
    id: 3,
    titulo: "El tunel",
    autor: "Ernesto Sabato",
    anio: 1948,
    genero: "Terror",
    disponible: true,
  },
  {
    id: 4,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupery",
    anio: 1943,
    genero: "Ficcion",
    disponible: false,
  },
  {
    id: 5,
    titulo: "Cien anios de soledad",
    autor: "Gabriel Garcia Marquez",
    anio: 1967,
    genero: "Terror",
    disponible: true,
  },
  {
    id: 6,
    titulo: "El retrato de Dorian Gray",
    autor: "Oscar Wilde",
    anio: 1890,
    genero: "Ficcion",
    disponible: true,
  },
  {
    id: 7,
    titulo: "La insoportable levedad del ser",
    autor: "Milan Kundera",
    anio: 1984,
    genero: "Comedia",
    disponible: false,
  },
  {
    id: 8,
    titulo: "El lobo estepario",
    autor: "Hermann Hesse",
    anio: 1927,
    genero: "Comedia",
    disponible: true,
  },
  {
    id: 9,
    titulo: "Rayuela",
    autor: "Julio Cortazar",
    anio: 1963,
    genero: "Ficcion",
    disponible: true,
  },
  {
    id: 10,
    titulo: "1984",
    autor: "George Orwell",
    anio: 1949,
    genero: "Comedia",
    disponible: false,
  },
];

// b)

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    email: "juan365@gmail.com",
    librosPrestados: ["Rayuela", "1984"],
  },
  {
    id: 2,
    nombre: "Ana",
    email: "anaLaura@gmail.com",
    librosPrestados: ["El lobo estepario", "La insoportable levedad del ser"],
  },
  {
    id: 3,
    nombre: "Lucas",
    email: "lucas23@gmail.com",
    librosPrestados: ["El retrato de Dorian Gray", "Cien anios de soledad"],
  },
  {
    id: 4,
    nombre: "Maria",
    email: "mariaLopez@gmail.com",
    librosPrestados: ["El tunel", "El amor en los tiempos del colera"],
  },
  {
    id: 5,
    nombre: "Pedro",
    email: "pedroRodriguez@gmail.com",
    librosPrestados: ["El Aleph"],
  },
];

//* 2. Funciones de Gestión de Libros

//* a) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
//* que agregue un nuevo libro al array libros.
//* b) Crear una función buscarLibro(criterio, valor) que permita buscar
//* libros por título, autor o género utilizando el algoritmo de búsqueda
//* lineal.
//* c) Desarrollar una función ordenarLibros(criterio) que ordene los libros
//* por título o año utilizando el algoritmo de ordenamiento burbuja
//* (bubble sort) y luego muestre los libros ordenados en la consola.
//* d) Desarrollar una función borrarLibro(id) que elimine el libro que se le
//* pase por parámetro.

const agregarLibro = (id, titulo, autor, anio, genero, disponible) => {
  // Agregar un libro al array de libros
  libros.push({ id, titulo, autor, anio, genero, disponible }); // Agregar un nuevo libro al array de libros
  return libros; // Devolver el array de libros actualizado
};

const buscarLibro = (criterio, valor) => {
  for (let i = 0; i < libros.length; i++) {
    // Recorrer el array de libros
    if (libros[i][criterio] === valor) {
      // Si coincide con el valor de búsqueda
      return libros[i]; // Devolver el libro
    }
  }
  return "no hay resultado en su búsqueda"; // Si no se encuentra el libro, devolver un mensaje
};

const ordenarLibros = (criterio) => {
  for (let i = 0; i < libros.length; i++) {
    // Recorrer el array de libros
    for (let j = 0; j < libros.length - 1; j++) {
      // comparo los libros
      if (libros[j][criterio] > libros[j + 1][criterio]) {
        // Si el libro actual es mayor al siguiente
        let librosTemp = libros[j]; // Intercambiar los libros
        libros[j] = libros[j + 1]; // asigno el libro siguiente al actual
        libros[j + 1] = librosTemp;
      }
    }
  }
};

const borrarLibro = (id) => {
  for (let i = 0; i < libros.length; i++) {
    // Recorrer el array de libros
    if (libros[i].id === id) {
      // Si el id coincide con el libro
      libros.splice(i, 1); // Eliminar el libro
      return `Tu libro con id ${id} ha sido eliminado`; // Devolver un mensaje
    }
  }
  return "No se encontró ningún libro con ese id."; // Si no se encuentra el libro, devolver un mensaje
};

//* 3. Gestión de Usuarios

//* a) Implementar una función registrarUsuario(nombre, email) que
//* agregue un nuevo usuario al array usuarios.
//* b) Implementar una función mostrarTodosLosUsuarios() que me
//* devuelva el array completo de usuarios
//* c) Crear una función buscarUsuario(email) que devuelva la información
//* de un usuario dado su email.
//* d) Implementar una función borrarUsuario(nombre, email) que elimine el
//* usuario seleccionado.

const registrarUsuario = (nombre, email) => {
  usuarios.push({ nombre, email }); // Agrego un nuevo usuario al array de usuarios
  return usuarios; // Devuelvo el array de usuarios actualizado
};

const mostrarTodosLosUsuarios = () => usuarios; // Devuelvo el array de usuarios

const buscarUsuario = (email) => {
  for (let i = 0; i < usuarios.length; i++) {
    // Recorrer el array de usuarios
    if (usuarios[i].email === email) {
      // Si el email coincide con el usuario
      return usuarios[i]; // Devolver el usuario
    }
  }
  return "usuario no encontrado"; // Si no se encuentra el usuario, devolver un mensaje
};

const borrarUsuario = (nombre, email) => {
  for (let i = 0; i < usuarios.length; i++) {
    // Recorrer el array de usuarios
    if (usuarios[i].nombre === nombre && usuarios[i].email === email) {
      // Si el nombre y el email coinciden con el usuario
      usuarios.splice(i, 1); // Eliminar el usuario
      return `El usuario con nombre ${nombre} y email ${email} ha sido eliminado`; // Devolver un mensaje
    }
  }
  return "Su usuario no se encuentra"; // Si no se encuentra el usuario, devolver un mensaje
};

//* 4. Sistema de Préstamos
//* a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
//* un libro como no disponible y lo agregue a la lista de libros prestados
//* del usuario.
//* b) Implementar una función devolverLibro(idLibro, idUsuario) que
//* marque un libro como disponible y lo elimine de la lista de libros
//* prestados del usuario

const prestarLibro = (idLibro, idUsuario) => {
  for (let i = 0; i < libros.length; i++) {
    // Recorrer el array de libros
    if (libros[i].id === idLibro) {
      // Si el id coincide con el libro
      libros[i].disponible = false; // Marcar el libro como no disponible
      for (let j = 0; j < usuarios.length; j++) {
        // Recorrer el array de usuarios
        if (usuarios[j].id === idUsuario) {
          // Si el id coincide con el usuario
          usuarios[j].librosPrestados.push(libros[i].titulo); // Agregar el libro a la lista de libros prestados del usuario
          return `El libro ${libros[i].titulo} ha sido prestado a ${usuarios[j].nombre}`; // Devolver un mensaje
        }
      }
    }
  }
  return "No se encontró el libro o el usuario"; // Si no se encuentra el libro o el usuario, devolver un mensaje
};

const devolverLibro = (idLibro, idUsuario) => {
  for (let i = 0; i < libros.length; i++) {
    // Recorrer el array de libros
    if (libros[i].id === idLibro) {
      // Si el id coincide con el libro
      libros[i].disponible === true; // Marcar el libro como disponible
      for (let j = 0; j < usuarios.length; j++) {
        // Recorrer el array de usuarios}
        if (usuarios[j].id === idUsuario) {
          // Si el id coincide con el usuario
          const posicion = usuarios[j].librosPrestados.indexOf(
            libros[j].titulo // Busca la posición del libro en la lista de libros prestados del usuario
          );
          if (posicion !== -1) {
            // Si el libro está en la lista de libros prestados
            usuarios[j].librosPrestados.splice(posicion, 1); // Elimina el libro de la lista de libros prestados del usuario
            return `El libro "${libros[i].titulo}" ha sido devuelto por el usuario ${usuarios[j].nombre}.`; // Devolver un mensaje
          }
        }
      }
    }
  }
  return "No se encontró el libro o el usuario."; // Si no se encuentra el libro o el usuario, devolver un mensaje
};

//* 5. Reportes
//* a) Crear una función generarReporteLibros() que utilice métodos
//* avanzados de arrays (.map(), .filter(), .reduce()) para generar un
//* reporte con la siguiente información:
//* ✓ Cantidad total de libros.
//* ✓ Cantidad de libros prestados.
//* ✓ Cantidad de libros por género.
//* ✓ Libro más antiguo y más nuevo

const generarReporteLibros = () => {
  // total de libros
  const totalLibros = libros.length; // Cantidad total de libros

  // libros prestados
  const librosPrestados = libros.filter((libro) => libro.disponible === false); // Obtengo los libros prestados
  const cantDeLibrosPrestados = librosPrestados.length; // Cantidad de libros prestados

  // libros por genero
  const librosPorGénero = libros.reduce((acum, libro) => {
    // Obtengo la cantidad de libros por género
    const genero = libro.genero;
    if (!acum[genero]) {
      // Si el género no existe en el objeto acumulador, lo inicializo en 0
      acum[genero] = 0;
    }
    acum[genero]++; // Incremento la cantidad de libros del género
    return acum;
  }, {});

  //  Libro más antiguo y más nuevo
  const libroMasAntiguo = libros.reduce((acum, libro) => {
    // Obtengo el libro más antiguo
    if (libro.anio < acum.anio) {
      // Si el año de publicación del libro es menor al año de publicación del acumulador, lo reemplazo
      return libro; // Si no, mantengo el acumulador
    }
    return acum; // Devuelvo el libro más antiguo
  }, libros[0]); // Inicializo el acumulador con el primer libro del array

  const libroMasNuevo = libros.reduce((acum, libro) => {
    // Obtengo el libro más nuevo
    if (libro.anio > acum.anio) {
      // Si el año de publicación del libro es mayor al año de publicación del acumulador, lo reemplazo
      return libro; // Si no, mantengo el acumulador
    }
    return acum; // Devuelvo el libro más nuevo
  }, libros[0]);

  const reporte = {
    totalLibros: totalLibros,
    librosPrestados: cantDeLibrosPrestados,
    librosPorGénero: librosPorGénero,
    libroMasAntiguo: libroMasAntiguo,
    libroMasNuevo: libroMasNuevo,
  };
  return reporte;
};

//* 6. Identificación Avanzada de libros
//* a) Implementar una función librosConPalabrasEnTitulo() que identifique
//* y muestre todos los libros cuyo título contiene más de una palabra
//* (no títulos que contengan números ni otros caracteres).
//* b) La función debe devolver un array con los títulos de esos libros y
//* mostrarlo en la consola.

const librosConPalabrasEnTitulo = (libros) => {
  const titulos = libros // Obtengo los títulos de los libros
    .map((libro) => libro.titulo)
    .filter((titulo) => {
      // Filtro los títulos que contienen más de una palabra
      const palabras = titulo.split(" "); // Separo el título en palabras

      if (palabras.length <= 1) {
        return false; // Si el título no contiene más de una palabra, lo excluyo
      }

      for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];
        for (let j = 0; j < palabra.length; j++) {
          const char = palabra[j];
          if (!(char >= "A" && char <= "Z") && !(char >= "a" && char <= "z")) {
            return false; // Si alguna palabra contiene caracteres no válidos, lo excluyo
          }
        }
      }

      return true; // Si todas las palabras son válidas, incluyo el título
    });

  return titulos;
};

// librosConPalabrasEnTitulo(libros);

//* 7. Cálculos Estadísticos
//* a) Desarrollar una función calcularEstadisticas() que utilice el objeto
//* Math para calcular y mostrar:
//* ✓ Promedio de años de publicación de los libros.
//* ✓ Año de publicación más frecuente.
//* ✓ Diferencia en años entre el libro más antiguo y el más nuevo.

const calcularEstadisticas = (libros) => {
  const promedioAnios =
    libros.reduce((acum, libro) => acum + libro.anio, 0) / libros.length; //Utilizo el reduce para sumar los años de publicacion y luego lo divido por los libros

  const frecuenciaAnios = {}; // Inicializar un objeto para contar la frecuencia de cada año de publicación
  let anioMasFrecuente = null; // Inicializar variables para almacenar el año de publicación más frecuente y su frecuencia
  let maxFrecuencia = 0; // Inicializar variables para almacenar el año de publicación más frecuente y su frecuencia

  libros.forEach((libro) => {
    // Iterar sobre los libros para contar la frecuencia de cada año de publicación
    const anio = libro.anio; // Obtener el año de publicación del libro
    if (frecuenciaAnios[anio]) {
      // si el año ya existe en el objeto de frecuencia de años
      frecuenciaAnios[anio]++; // Incrementar la frecuencia
    } else {
      // si el año no existe en el objeto de frecuencia de años
      frecuenciaAnios[anio] = 1; // Inicializar la frecuencia en 1
    }
    if (frecuenciaAnios[anio] > maxFrecuencia) {
      // Actualizo el año de publicación más frecuente si es necesario
      maxFrecuencia = frecuenciaAnios[anio]; // Actualizo la frecuencia máxima
      anioMasFrecuente = anio; // Actualizo el año de publicación más frecuente
    }
  });

  const anios = libros.map((libro) => libro.anio); // Creo un array con los años de publicación de los libros
  const anioMasAntiguo = Math.min(...anios); // Obtener el año de publicación más antiguo
  const anioMasNuevo = Math.max(...anios); // Obtener el año de publicación más nuevo
  const diferenciaAnios = anioMasNuevo - anioMasAntiguo; // Calcular la diferencia en años entre el libro más antiguo y el más nuevo
  console.log(
    `Diferencia en años entre el libro más antiguo y el más nuevo: ${diferenciaAnios}`
  );

  return {
    promedioAnios,
    anioMasFrecuente,
    diferenciaAnios,
  };
};

//* 8. Manejo de Cadenas
//* a) Crear una función normalizarDatos() que utilice métodos de strings
//* para:
//* ✓ Convertir todos los títulos a mayúsculas.
//* ✓ Eliminar espacios en blanco al inicio y final de los nombres de
//* autores.
//* ✓ Formatear los emails de los usuarios a minúsculas.

const normalizarDatos = () => {
  libros.forEach((libro) => {
    // Iterar sobre los libros
    libro.titulo = libro.titulo.toUpperCase(); // Convertir el título a mayúsculas
    libro.autor = libro.autor.trim(); // Eliminar espacios en blanco al inicio y final del nombre del autor
  });

  usuarios.forEach((usuario) => {
    // Iterar sobre los usuarios
    usuario.email = usuario.email.toLowerCase(); // Convertir el email a minúsculas
  });

  return { libros, usuarios };
};

//* 9. Interfaz de Usuario por Consola
//* a) Implementar una función menuPrincipal() que muestre un menú de
//* opciones al usuario y permita interactuar con el sistema utilizando
//* prompt().
//* b) El menú debe incluir opciones para todas las funcionalidades
//* anteriores y utilizar estructuras de control (if, switch, ciclos) para
//* manejar la lógica.

const prompt = require("prompt-sync")({ sigint: true });

const menuPrincipal = () => {
  let opcion;
  do {
    opcion = parseInt(
      prompt(`Menú Principal
    1. Agregar un libro
    2. Buscar un libro
    3. Ordenar los libros
    4. Borrar un libro
    5. Registrar un usuario
    6. Mostrar todos los usuarios
    7. Buscar un usuario
    8. Borrar un usuario
    9. Prestar un libro
    10. Devolver un libro
    11. Generar un reporte de libros
    12. Identificar libros con más de una palabra en el título
    13. Calcular estadísticas
    14. Normalizar datos
    15. Salir
    `)
    );

    switch (opcion) {
      case 1:
        const id = parseInt(prompt("Ingrese el id del libro: "));
        const titulo = prompt("Ingrese el título del libro: ");
        const autor = prompt("Ingrese el autor del libro: ");
        const anio = parseInt(prompt("Ingrese el año del libro: "));
        const genero = prompt("Ingrese el género del libro: ");
        const disponible = prompt(
          "Ingrese si el libro está disponible (true/false): "
        );
        agregarLibro(id, titulo, autor, anio, genero, disponible);
        console.log("Libro agregado correctamente.");
        console.log(libros); // Mostrar el array de libros después de agregar el nuevo libro
        break;
      case 2:
        const criterio = prompt(
          "Ingrese el criterio de búsqueda (titulo, autor, genero): "
        );

        const valor = prompt("Ingrese el valor de búsqueda: ");
        const libroEncontrado = buscarLibro(criterio, valor);
        console.log(libroEncontrado);
        break;
      case 3:
        const criterioOrden = prompt(
          "Ingrese el criterio de ordenamiento (titulo, anio): "
        );
        ordenarLibros(criterioOrden);
        console.log("Libros ordenados:");
        console.log(libros);
        break;
      case 4:
        const idBorrar = parseInt(prompt("Ingrese el id del libro a borrar: "));
        const resultadoBorrar = borrarLibro(idBorrar);
        console.log(
          resultadoBorrar
            ? "Libro borrado correctamente."
            : "Libro no encontrado."
        );
        console.log(libros);

        break;
      case 5:
        const nombre = prompt("Ingrese el nombre del usuario: ");
        const email = prompt("Ingrese el email del usuario: ");
        registrarUsuario(nombre, email);
        console.log("Usuario registrado correctamente.");

        break;
      case 6:
        console.log("Usuarios registrados:");
        console.log(mostrarTodosLosUsuarios());
        break;
      case 7:
        const emailBuscar = prompt("Ingrese el email del usuario a buscar: ");
        const usuarioEncontrado = buscarUsuario(emailBuscar);
        console.log(
          usuarioEncontrado ? usuarioEncontrado : "Usuario no encontrado."
        );
        break;
      case 8:
        const nombreBorrar = prompt("Ingrese el nombre del usuario a borrar: ");
        const emailBorrar = prompt("Ingrese el email del usuario a borrar: ");
        const resultadoBorrarUsuario = borrarUsuario(nombreBorrar, emailBorrar);
        console.log(resultadoBorrarUsuario);
        console.log(usuarios);

        break;
      case 9:
        const idPrestar = parseInt(
          prompt("Ingrese el id del libro a prestar: ")
        );
        const idlUsuario = parseInt(
          prompt("Ingrese el id  del usuario que va a prestar el libro: ")
        );
        const resultadoPrestar = prestarLibro(idPrestar, idlUsuario);
        console.log(resultadoPrestar);
        console.log(libros);
        console.log(usuarios);

        break;
      case 10:
        const idDevolver = parseInt(
          prompt("Ingrese el id del libro a devolver: ")
        );
        const resultadoDevolver = devolverLibro(idDevolver);
        console.log(resultadoDevolver);
        console.log(usuarios);
        console.log(libros);

        break;
      case 11:
        console.log("Reporte de libros:");
        console.log(generarReporteLibros());
        break;
      case 12:
        console.log("Libros con más de una palabra en el título:");
        console.log(librosConPalabrasEnTitulo(libros));
        break;
      case 13:
        console.log("Estadísticas de los libros:");
        console.log(calcularEstadisticas(libros));
        break;
      case 14:
        console.log(normalizarDatos());

        break;
      case 15:
        console.log("Saliendo del programa...");
        break;
      default:
        console.log(
          "Opción no válida. Por favor, elija una opción del 1 al 15."
        );
    }
  } while (opcion !== 15);
};

menuPrincipal();

//* 10. Comentando mi código
//* a) Se tomará como último punto a evaluar la correcta utilización de
//* comentarios explicando paso por paso su código.
//* b) Deberán seccionar el código punto por punto y con una explicación
//* corta y simple de que hicieron en cada punto.//
