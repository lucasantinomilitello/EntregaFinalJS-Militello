// Gorras disponibles
let gorras = [
  { id: 1, nombre: 'Gorra Ferrari', precio: 50 },
  { id: 2, nombre: 'Gorra Mercedes', precio: 60 },
  { id: 3, nombre: 'Gorra Red Bull', precio: 55 }
];

// Carrito de compras
let carrito = [];

// Agregar gorras al carrito
function agregarAlCarrito(id, cantidad) { 
  let producto = gorras.find(gorra => gorra.id === id);
  if (producto) {
      carrito.push({ producto, cantidad });
      alert(`${cantidad} unidades de ${producto.nombre} se agregaron al carrito.`);
  } else {
      alert("Gorra no encontrada");
  }
}

// Calculo total de la compra
function calcularTotal() {
  let total = 0;
  carrito.forEach(item => {
      total += item.producto.precio * item.cantidad;
  });
  return total;
}

// Contenido del carrito
function mostrarCarrito() {
  console.log("Tu carrito:");
  carrito.forEach(item => {
      console.log(`${item.cantidad} x ${item.producto.nombre} - Precio: $${item.producto.precio}`);
  });
}

// Flujo de compra
function iniciarCompra() {
  let continuarComprando = true;

  while (continuarComprando) {
      let idGorra = parseInt(prompt("Elige una gorra: 1. Ferrari, 2. Mercedes, 3. Red Bull"));
      let cantidadGorras = parseInt(prompt("¿Cuántas unidades quieres?"));
      agregarAlCarrito(idGorra, cantidadGorras);
      
      let respuesta = parseInt(prompt("¿Quieres comprar más gorras? (1 = Sí, 2 = No)"));
      
      
      while (respuesta !== 1 && respuesta !== 2) {
          respuesta = parseInt(prompt("Respuesta no válida. ¿Quieres comprar más gorras? (1 = Sí, 2 = No)"));
      }
      if (respuesta === 2) {
          continuarComprando = false;
      }
  }

  // Finalizar compra y mostrar total
  let totalCompra = calcularTotal();
  mostrarCarrito();
  console.log(`El total de tu compra es: $${totalCompra}`);
  alert(`El total de tu compra es: $${totalCompra}`);
}


window.onload = function() {
  iniciarCompra();
};