function agregarFila() {
      const tabla = document.querySelector("#tablaPersonas tbody");
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td><input type="text" placeholder="Nombre" class="nombre"></td>
        <td><input type="number" value="0" class="monto" min="0" step="0.01"></td>
        <td><button onclick="quitarFila(this)" class="btn btn-light btn-lg">X</button></td>
      `;
      tabla.appendChild(fila);
    }

    function quitarFila(btn) {
      btn.closest("tr").remove();
    }

    function calcularReparto() {
      const nombres = document.querySelectorAll(".nombre");
      const montos = document.querySelectorAll(".monto");

      let total = 0;
      let participantes = [];

      for (let i = 0; i < nombres.length; i++) {
        const nombre = nombres[i].value.trim() || `Persona ${i + 1}`;
        const monto = parseFloat(montos[i].value) || 0;
        participantes.push({ nombre, monto });
        total += monto;
      }

      const cantidad = participantes.length;
      const promedio = total / cantidad;

      let resultadoHTML = `<p>Total: $${total.toFixed(2)} | Cada uno debería aportar: $${promedio.toFixed(2)}</p>`;
      resultadoHTML += `<ul>`;

      participantes.forEach(p => {
        const saldo = p.monto - promedio;
        const estado = saldo > 0 
          ? `debe recibir $${saldo.toFixed(2)}`
          : saldo < 0 
          ? `debe pagar $${Math.abs(saldo).toFixed(2)}`
          : `está saldado`;

        resultadoHTML += `<h3 class"totales"><li><strong>${p.nombre}</strong>: ${estado}</li></h3>`;
      });

      resultadoHTML += `</ul>`;
      document.getElementById("resultados").innerHTML = resultadoHTML;
    }


function totalGastado() {
  const inputs = document.querySelectorAll('.monto');
  let total = 0;

  inputs.forEach(input => {
    const valor = parseFloat(input.value) || 0;
    total += valor;
  });

  document.getElementById('totalGastado').textContent = total.toFixed(2);
}

// Esta parte debe ejecutarse después de agregar los inputs al DOM
document.addEventListener('input', function(e) {
  if (e.target.classList.contains('monto')) {
    totalGastado();
  }
});

