// Forma de calculo para division por lo que cada uno gasto:
// Paso 1: se carga el ticket detallado
// Paso 2: Se carga la Propina
// Paso 3: Se Cargan los nombres de las personas por las que se divide
// Paso 4: Se destilda lo que no corresponda en la grilla
// Paso 5: Se calcula cuanto le corresponde a cada uno

const participantes = [];

// Paso 1: se carga el ticket detallado
    function agregarFila() {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td><input type="text" placeholder="Ej: Producto"></td>
        <td><input type="number" class="monto" value="0" min="0"></td>
        <td class="participantes"></td>
      `;
      document.getElementById("ticketBody").appendChild(fila);
      actualizarCheckboxes();
    }

// Paso 3: Se Cargan los nombres de las personas por las que se divide    
    function agregarParticipante() {
      const nombre = document.getElementById("nuevoParticipante").value.trim();
      if (nombre && !participantes.includes(nombre)) {
        participantes.push(nombre);
        document.getElementById("listaParticipantes").innerHTML += `<li>${nombre}</li>`;
        actualizarCheckboxes();
        document.getElementById("nuevoParticipante").value = "";
      }
    }

    function actualizarCheckboxes() {
  const filas = document.querySelectorAll("#ticketBody tr");
  filas.forEach(fila => {
    const contenedor = fila.querySelector(".participantes");
    if (!contenedor) return; // 🔒 evita error si la fila no tiene la celda .participantes
    contenedor.innerHTML = "";
    participantes.forEach(p => {
      const label = document.createElement("label");
      label.className = "form-check form-switch me-2";
      label.innerHTML = `
        <input class="form-check-input" type="checkbox" checked value="${p}"> ${p}
      `;
      contenedor.appendChild(label);
    });
  });
}




    function calcularTotal() {
      const totales = {};
      participantes.forEach(p => totales[p] = 0);

      const filas = document.querySelectorAll("#ticketBody tr");
      let subtotal = 0;

      filas.forEach(fila => {
        const monto = parseFloat(fila.querySelector(".monto").value) || 0;
        const checks = fila.querySelectorAll("input[type='checkbox']:checked");
        const dividendo = checks.length;

        if (dividendo > 0) {
          const parte = monto / dividendo;
          checks.forEach(check => {
            totales[check.value] += parte;
          });
        }

        subtotal += monto;
      });

      // Paso 2: Se carga la Propina
      const propina = parseFloat(document.getElementById("propina").value) || 0;
      const propinaPorPersona = propina / participantes.length;

      // Alerta si la propina es 0

        if (propina === 0) {
      alert("Recuerde dejar propina");
    }

    if (propina < subtotal * 0.05) {
  alert("La propina es inferior al 5% No seas rata.");
}


      participantes.forEach(p => {
        totales[p] += propinaPorPersona;
      });

    // Paso 5: Se calcula cuanto le corresponde a cada uno
      let html = "<ul>";
      participantes.forEach(p => {
        html += `<h3 class"totales"><strong>${p}:</strong> $${totales[p].toFixed(2)}</h3>`;
      });
      html += "</ul>";

      document.getElementById("resultado").innerHTML = html;
    }

    
