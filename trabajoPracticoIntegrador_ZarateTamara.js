// 1. Estructura de Datos

// a) Crear un array de objetos llamado libros que contenga al menos 10
// libros. Cada libro debe tener las siguientes propiedades:
// ✓ id (número)
// ✓ título (string),
// ✓ autor (string),
// ✓ año (número),
// ✓ género (string),
// ✓ disponible (booleano).
// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
// Cada usuario debe tener:
// ✓ id (número)
// ✓ nombre (string)
// ✓ email (string)
// ✓ librosPrestados (array de ids de libros).

// a)
const libros = [
  {
    id: 1,
    titulo: "El Aleph",
    autor: "Jorge Luis Borges",
    anio: 1949,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 2,
    titulo: "El amor en los tiempos del cólera",
    autor: "Gabriel García Márquez",
    anio: 1985,
    genero: "Ficción",
    disponible: false,
  },
  {
    id: 3,
    titulo: "El túnel",
    autor: "Ernesto Sábato",
    anio: 1948,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 4,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    genero: "Ficción",
    disponible: false,
  },
  {
    id: 5,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 6,
    titulo: "El retrato de Dorian Gray",
    autor: "Oscar Wilde",
    anio: 1890,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 7,
    titulo: "La insoportable levedad del ser",
    autor: "Milan Kundera",
    anio: 1984,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 8,
    titulo: "El lobo estepario",
    autor: "Hermann Hesse",
    anio: 1927,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 9,
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    anio: 1963,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 10,
    titulo: "1984",
    autor: "George Orwell",
    anio: 1949,
    genero: "Ficción",
    disponible: true,
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
    librosPrestados: ["El retrato de Dorian Gray", "Cien años de soledad"],
  },
  {
    id: 4,
    nombre: "María",
    email: "mariaLopez@gmail.com",
    librosPrestados: ["El túnel", "El amor en los tiempos del cólera"],
  },
  {
    id: 5,
    nombre: "Pedro",
    email: "pedroRodriguez@gmail.com",
    librosPrestados: ["El Aleph"],
  },
];

// 2. Funciones de Gestión de Libros

// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
// que agregue un nuevo libro al array libros.
// b) Crear una función buscarLibro(criterio, valor) que permita buscar
// libros por título, autor o género utilizando el algoritmo de búsqueda
// lineal.
// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros
// por título o año utilizando el algoritmo de ordenamiento burbuja
// (bubble sort) y luego muestre los libros ordenados en la consola.
// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le
// pase por parámetro.

// const agregarLibro = (id, titulo, autor, anio, genero, disponible) => {
//   libros.push({ id, titulo, autor, anio, genero, disponible });
//   return libros;
// };

// console.log(
//   agregarLibro(
//     11,
//     "El amor en los tiempos del cólera",
//     "Gabriel García Márquez",
//     1985,
//     "Ficción",
//     false
//   )
// );

// const buscarLibro = (criterio, valor) => {
//   for (let i = 0; i < libros.length; i++) {
//     if (libros[i][criterio] === valor) {
//       return libros[i];
//     }
//   }
//   console.log("no hay resultado en su búsqueda");
// };

// console.log(buscarLibro("autor", "Julio Cortázar"));

// const ordenarLibros = (criterio) => {
//   for (let i = 0; i < libros.length; i++) {
//     for (let j = 0; j < libros.length - 1; j++) {
//       if (libros[j][criterio] > libros[j + 1][criterio]) {
//         let librosTemp = libros[j];
//         libros[j] = libros[j + 1];
//         libros[j + 1] = librosTemp;
//       }
//     }
//   }
// };
// ordenarLibros('titulo');
// console.log(libros);

// const borrarLibro = (id) => {
//   for (let i = 0; i < libros.length; i++) {
//     if (libros[i].id === id) {
//       libros.splice(i, 1);
//       return `Tu libro con id ${id} ha sido eliminado`;
//     }
//   }
//   return "No se encontró ningún libro con ese id.";
// };

// console.log(borrarLibro(1));
// console.log(libros);

// 3. Gestión de Usuarios

// a) Implementar una función registrarUsuario(nombre, email) que
// agregue un nuevo usuario al array usuarios.
// b) Implementar una función mostrarTodosLosUsuarios() que me
// devuelva el array completo de usuarios
// c) Crear una función buscarUsuario(email) que devuelva la información
// de un usuario dado su email.
// d) Implementar una función borrarUsuario(nombre, email) que elimine el
// usuario seleccionado.

//  const registrarUsuario=(nombre, email)=>{
//   usuarios.push( {nombre , email})
//   return usuarios
//  }
//  console.log(registrarUsuario("tamara", "tatyy661@gmail.com"));

//  const  mostrarTodosLosUsuarios=()=> usuarios

//  console.log(mostrarTodosLosUsuarios());

// const buscarUsuario=(email)=>{
//   for (let i = 0; i < usuarios.length; i++) {
//    if (usuarios[i].email === email) {
//     return usuarios[i]
//    }

//   }
//   return "usuario no encontrado"
// }

// console.log(buscarUsuario("lucas23@gmail.com"));

const borrarUsuario = (nombre, email) => {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nombre === nombre && usuarios[i].email === email) {
      usuarios.splice(i, 1);
      return `El usuario con nombre ${nombre} y email ${email} ha sido eliminado`;
    }
  }
  return "Su usuario no se encuentra";
};
console.log(borrarUsuario("Lucas", "lucas23@gmail.com"));
console.log(usuarios);
