// Funcion Calcular Total

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

