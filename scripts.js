// Division por Cantidad de Personas

  function calcular() {
    const monto = parseFloat(document.getElementById('monto').value) || 0;
    const propina = parseFloat(document.getElementById('propina').value) || 0;
    const cantPersonas = parseInt(document.getElementById('cantPersonas').value) || 0;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ""; // Limpia el resultado anterior

    if (monto <= 0) {
      alert("Por favor, ingresa un valor de ticket válido.");
      return;
    }

    if (cantPersonas <= 0) {
      alert("Por favor, ingresa una cantidad válida de personas.");
      return;
    }

    // Alerta si la propina es 0

        if (propina === 0) {
      alert("Recuerde dejar propina");
    }

        // Alerta si la propina es menor al 5% del ticket

        const porcentajePropina = (propina / monto) * 100;
    if (propina > 0 && porcentajePropina < 5) {
      alert(`La propina es menor de(${porcentajePropina.toFixed(2)}%. No seas rata.`);
    }

    const total = monto + propina;
    const montoPorPersona = (total / cantPersonas).toFixed(2);

    resultadoDiv.innerHTML = `
      <h3 class"totales"><strong>Total con propina:</strong> $${total.toFixed(2)}</h3>
      <h3 class"totales"><strong>Cada persona debe pagar:</strong> $${montoPorPersona}</h3>
    `;
  }

