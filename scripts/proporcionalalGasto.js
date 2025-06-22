// Forma de calculo para division por lo que cada uno gasto:
// Paso 1: se carga el ticket detallado
// Paso 2: Se carga la Propina
// Paso 3: Se Cargan los nombres de las personas por las que se divide
// Paso 4: Se destilda lo que no corresponda en la grilla
// Paso 5: Se calcula cuanto le corresponde a cada uno


// Funcion Calcular Total (para calcular automaticamente el valor del ticket)

function totalTicket(){
const inputs = document.querySelectorAll('.monto');
  let total = 0;

  inputs.forEach(input => {
    const valor = parseFloat(input.value) || 0;
    total += valor;
  });

  document.getElementById('total').textContent = total.toFixed(2);
}

// Ejecutar al cambiar un monto
document.querySelectorAll('.monto').forEach(input => {
  input.addEventListener('input', totalTicket);
});

