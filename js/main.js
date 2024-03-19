alert("Bienvenidos a Sneakers.arg")

// Definir una lista de productos
const productos = [
    { articulo: "Nike dunk low retro", talle: '41', precio: 209.999 },
    { articulo: "Air Jordan 1", talle: '39', precio: 239.999 },
    { articulo: "Nike Sb Dunk Low Pro Premium", talle: '44', precio: 289.999 },
  ];

function manejarCarrito() {
    // Estado del carrito (vacío al principio)
    const carrito = [];
    // Total inicial
    let total = 0;


    while (true) { //Uso while para que se ejecute las veces que sea necesario hasta que finalice.
        const opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Mostrar productos\n" +      
            "2. Agregar producto al carrito\n" +
            "3. Ver carrito\n" +
            "4. Vaciar carrito\n" +
            "5. Finalizar compra\n" +
            "6. Salir"
            
        );

        switch (opcion) { //Se evalúa cada condición y también si se cumple lo que esta indicado en cada case.
            case '1':
                mostrarProductos();
                break;
            case '2':
                agregarAlCarrito();
                break;
            case '3':
                mostrarCarrito();
                break;
            case '4':
                vaciarCarrito();
                break;
            case '5':
                finalizarCompra();
            case '6':
                alert(`Gracias por visitar SNEAKERS.ARG`);
                return;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    }

    function mostrarProductos() { //En esta funcion se muestran los 3 productos con los talles y precios que se declararon al principio.
        alert("Productos disponibles:\n" +
            productos.map((producto, index) => //Se usa el método map ya que crea un nuevo array con todos los elementos del original.
                `${index + 1}. Articulo: ${producto.articulo}, Talle: ${producto.talle}, Precio: $${producto.precio}`
            ).join('\n')
        );
    }

    function agregarAlCarrito() {
        const indiceProducto = prompt("Ingrese el número del producto que desea agregar al carrito:");

        if (indiceProducto >= 1 && indiceProducto <= productos.length) { //Length para identificar cuantos productos tenemos.
            const productoElegido = productos[indiceProducto - 1];
            carrito.push(productoElegido); //Push para sumar el producto que hayamos elegido.
            total += productoElegido.precio;
            alert("Producto agregado al carrito."); //Una vez que ponemos el número del producto que queremos se guarda en el carrito de compras.
        } else {
            alert("Número de producto no válido.");//Si ingresamos otro número que no está disponible se muestra con un alert que no es válido. 
        }
    }

    // Función para mostrar los artículos en el carrito
    function mostrarCarrito() {
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
        } else {
            alert("Artículos en el carrito:");
            carrito.forEach(item => {
                alert(`${item.articulo}: $${item.precio.toFixed(2)}`);
            });
            alert(`Total: $${total.toFixed(2)}`);
        }
    } 
    
    // Función para vaciar el carrito
    function vaciarCarrito() {
        carrito.length = 0;
        total = 0;
        alert("El carrito ha sido vaciado.");
    }

    function finalizarCompra() {
        // Calcular el total final
        let totalFinal = 0;
        for (const item of carrito) {
            totalFinal += item.precio;
        }
    
        // Procesar el pago (simulación)
        alert(`Total a pagar: $${totalFinal.toFixed(2)}`);
        alert("Procesando el pago...");
    
        // Vaciar el carrito
        carrito.length = 0;
        alert("Muchas gracias por tu compra.");
    }


    
}
manejarCarrito();