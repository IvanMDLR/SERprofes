//1.Creamos nuestra "caja grnde" (Array)
let carrito = ["🍏 Manzana","🍌 Plátano"];
//2. imprimir el carrito nada mas al cargar la pagina
document.getElementById("pantalla-cesta").textContent = carrito.join(" - ");

//3. La funcion de para agregar cosas nuevas a la lista
function anadirAlCarrito() {
let item = document.getElementById("nuevo-item").value;
//MagiaArray: .push mete nuevo elemento al final de la lista
carrito.push(item);
//volvemos a pintar la cesta para que se vea
document.getElementById("pantalla-cesta").textContent = carrito.join(" - ");
//Limpiamos el input
document.getElementById("nuevo-item").value = "";
}