const productos  = [
    { 
        id: 1, 
        nombre: "Gorra cerrada Nueva York", 
        descripcion: "Estilo urbano y clásico, esta gorra cerrada destaca con el icónico logo de New York en el frente. Fabricada con materiales de alta calidad, ofrece un ajuste cómodo y firme gracias a su diseño estructurado. Ideal para complementar cualquier look casual o deportivo, es perfecta para quienes buscan lucir modernos con un toque auténtico.", 
        precio: 23000, 
        imagen: "/assets/gorra.cerrada.ny.jpg", 
        disponible: true 
    },
    { 
        id: 2, 
        nombre: "Gorra cerrada Los Angeles", 
        descripcion: "Diseño elegante y moderno, esta gorra cerrada presenta el emblemático logo de Los Angeles en la parte frontal. Fabricada con materiales resistentes y de primera calidad, brinda un ajuste cómodo y seguro. Perfecta para quienes desean destacar con estilo mientras representan el espíritu urbano de la ciudad.", 
        precio: 19000, 
        imagen: "/assets/gorra.cerrada.1.png", 
        disponible: true 
    },
    { 
        id: 3, 
        nombre: "Gorra cerrada Eric Emanuel", 
        descripcion: "Con un diseño exclusivo y contemporáneo, esta gorra cerrada de Eric Emanuel combina estilo y calidad premium. Presenta detalles distintivos de la marca, como su icónico logo, y está confeccionada con materiales duraderos que aseguran comodidad y ajuste perfecto. Ideal para los amantes de la moda streetwear que buscan destacar con piezas únicas.", 
        precio: 20000, 
        imagen: "/assets/gorra.cerrada.ericemanuel.png", 
        disponible: true 
    },
    { 
        id: 4, 
        nombre: "Gorra cerrada AllStar", 
        descripcion: "Esta gorra cerrada All Star combina estilo deportivo y versatilidad. Con el clásico logo en el frente, está confeccionada con materiales de alta calidad para ofrecer un ajuste cómodo y duradero. Perfecta para fanáticos del deporte y la moda casual, es un complemento esencial para cualquier outfit urbano.", 
        precio: 21000, 
        imagen: "/assets/gorra.cerrada.allstar.jpg", 
        disponible: true 
    },
    { 
        id: 5, 
        nombre: "Gorra polo Ralph Lauren", 
        descripcion: "Con un diseño atemporal y sofisticado, esta gorra Polo Ralph Lauren es el equilibrio perfecto entre elegancia y comodidad. Fabricada con materiales de alta calidad, presenta el icónico logotipo bordado en el frente. Su ajuste ajustable y su estilo clásico la convierten en un accesorio ideal para cualquier ocasión casual o deportiva.", 
        precio: 30000, 
        imagen: "/assets/gorra.polo.1.png", 
        disponible: true 
    },
    { 
        id: 6, 
        nombre: "Gorra polo Nike", 
        descripcion: "Con un diseño moderno y funcional, esta gorra Polo Nike combina estilo y rendimiento. Fabricada con materiales ligeros y transpirables, es perfecta para actividades deportivas o para un look casual. Su logo icónico en el frente le da un toque distintivo, mientras que su ajuste cómodo garantiza una experiencia de uso ideal.", 
        precio: 30000, 
        imagen: "/assets/gorra.polo.2.webp", 
        disponible: true 
    },
    { 
        id: 7, 
        nombre: "Gorra polo Ralph Lauren EEUU", 
        descripcion: "Esta gorra Polo Ralph Lauren celebra el espíritu americano con un diseño exclusivo que incluye detalles alusivos a EE.UU. Confeccionada con materiales premium, ofrece un ajuste cómodo y duradero. Su icónico logo bordado y elementos patrióticos la convierten en un accesorio ideal para quienes buscan estilo clásico con un toque nacional.", 
        precio: 35000, 
        imagen: "/assets/gorra.polo.3.webp", 
        disponible: true 
    },
    { 
        id: 8, 
        nombre: "Gorra polo Tucma", 
        descripcion: "Esta gorra Polo Tucma combina un diseño elegante y auténtico con materiales de alta calidad. Perfecta para un look casual o deportivo, destaca por su comodidad y estilo atemporal. Su ajuste es adaptable, lo que la convierte en un accesorio versátil para cualquier ocasión.", 
        precio: 28000, 
        imagen: "/assets/gorra.polo.4.png", 
        disponible: true 
    },
];

// Obtener ID del producto de la URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'), 10);

// Buscar el producto por ID
const producto = productos.find(p => p.id === productId);

if (producto) {
    // Mostrar detalles del producto
    document.getElementById("product-name").textContent = producto.nombre;
    document.getElementById("product-image").src = producto.imagen;
    document.getElementById("product-image").alt = producto.nombre;
    document.getElementById("product-description").textContent = producto.descripcion;
    document.getElementById("product-price").textContent = `$${producto.precio.toLocaleString()}`;
    document.getElementById("product-availability").textContent = `Disponibilidad: ${producto.disponible ? "Disponible" : "No disponible"}`;
    document.getElementById("product-ogprice").textContent = `$${producto.precioOriginal.toLocaleString()}`;

    // Configurar el botón "Comprar Ahora"
    const buyNowButton = document.getElementById("buy-now");
    if (!producto.disponible) {
        buyNowButton.disabled = true;
        buyNowButton.textContent = "No disponible";
    }
} else {
    // Si no se encuentra el producto
    document.getElementById("detalle-producto").innerHTML = "<p>Producto no encontrado.</p>";
}

// Función para manejar el clic en "Comprar Ahora"
function comprar() {
    window.location.href = "error.html";
}

