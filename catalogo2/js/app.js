const catalogo = document.getElementById("catalogo");

function mostrarCatalogo() {
  bebidas.forEach((bebida, index) => {
    
    const tarjeta = document.createElement("article");
    tarjeta.className = "w3-col l4 m6 s12 w3-margin-bottom";

    tarjeta.innerHTML = `
      <div class="w3-card w3-white w3-round-large tarjeta-producto" onclick="mostrarDetalle(${index})">
        
        <img src="${bebida.imagen}" 
             alt="${bebida.nombre}" 
             style="width:100%; height:200px; object-fit:cover;">

        <div class="w3-container w3-padding">
          <h3 class="w3-margin-top">${bebida.nombre}</h3>
          <p class="w3-small">${bebida.descripcion}</p>
          <p class="precio">${bebida.precio}</p>

          <button class="w3-button btn-dark w3-block w3-round">
            Ver detalle
          </button>
        </div>

      </div>
    `;

    catalogo.appendChild(tarjeta);
  });
}

function mostrarDetalle(index) {
  const bebida = bebidas[index];

  document.getElementById("detalleNombre").textContent = bebida.nombre;
  document.getElementById("detalleDescripcion").textContent = bebida.descripcion;
  document.getElementById("detallePrecio").textContent = bebida.precio;

  document.getElementById("modalDetalle").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modalDetalle").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modalDetalle");
  if (event.target === modal) cerrarModal();
};

mostrarCatalogo();