  function totalIngresos() {
    const ingresosInputs = document.querySelectorAll('.ingreso');
    let total = 0;

    ingresosInputs.forEach(input => {
      total += parseFloat(input.value) || 0;
    });

    document.getElementById('totalIngresos').textContent = total.toFixed(2);
    return total;
  }

  function totalGastos() {
    const montoInputs = document.querySelectorAll('.monto');
    let total = 0;

    montoInputs.forEach(input => {
      total += parseFloat(input.value) || 0;
    });

    document.getElementById('totalTicket').textContent = total.toFixed(2);
    return total;
  }

  function calcularTotal() {
    const totalIngresosValue = totalIngresos();
    const totalGastosValue = totalGastos();

    const filas = document.querySelectorAll('#tablaIngresos tbody tr');
    let resultadoHTML = `<h3>Resultado</h3>`;

    filas.forEach(fila => {
      const nombre = fila.querySelector('input[type="text"]').value || 'Sin nombre';
      const ingreso = parseFloat(fila.querySelector('.ingreso').value) || 0;

      const porcentaje = ingreso / totalIngresosValue;
      const debePagar = porcentaje * totalGastosValue;

      resultadoHTML += `<p><strong>${nombre}:</strong> $${debePagar.toFixed(2)}</p>`;
    });

    document.getElementById('resultado').innerHTML = resultadoHTML;
  }

  function agregarFila() {
    const tabla = document.getElementById('ticketBody');
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
      <td><input type="text" placeholder="Ej: Nueva compra"></td>
      <td><input type="number" class="monto" value="0"></td>
    `;
    tabla.appendChild(nuevaFila);
  }

  // Listeners automáticos para actualizar totales
  document.addEventListener('input', function (e) {
    if (e.target.classList.contains('ingreso')) {
      totalIngresos();
    }
    if (e.target.classList.contains('monto')) {
      totalGastos();
    }
  });

  // Cálculo inicial por si hay valores precargados
  window.onload = () => {
    totalIngresos();
    totalGastos();
  };
    