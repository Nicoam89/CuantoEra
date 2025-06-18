// Division Equitativa

  function calcular() {
    const monto = parseFloat(document.getElementById('monto').value) || 0;
    const propina = parseFloat(document.getElementById('propina').value) || 0;
    const cantPersonas = parseInt(document.getElementById('cantPersonas').value) || 0;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ""; // Limpia el resultado anterior

    if (cantPersonas <= 0) {
      resultadoDiv.textContent = "Por favor, ingresa una cantidad válida de personas.";
      return;
    }

    const total = monto + propina;
    const montoPorPersona = (total / cantPersonas).toFixed(2);

    resultadoDiv.innerHTML = `
      <h3 class"totales"><strong>Total con propina:</strong> $${total.toFixed(2)}</h3>
      <h3 class"totales"><strong>Cada persona debe pagar:</strong> $${montoPorPersona}</h3>
    `;
  }