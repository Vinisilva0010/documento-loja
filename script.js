const toggle = document.querySelector('.menu-toggle');
  const body = document.body;
  const sidebarLinks = document.querySelectorAll('.sidebar a');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 980) {
        body.classList.remove('menu-open');
        toggle && toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });



function aplicarPreset(prefix, taxaFixa, taxaPerc) {
  document.getElementById(prefix + '-taxafixa').value = taxaFixa;
  document.getElementById(prefix + '-taxaperc').value = taxaPerc;
  calcular(prefix);
}
 
function calcular(prefix) {
  const custo = parseFloat(document.getElementById(prefix + '-custo').value) || 0;
  const embalagem = parseFloat(document.getElementById(prefix + '-embalagem').value) || 0;
  const taxaFixa = parseFloat(document.getElementById(prefix + '-taxafixa').value) || 0;
  let taxaPerc = parseFloat(document.getElementById(prefix + '-taxaperc').value) || 0;
  const lucro = parseFloat(document.getElementById(prefix + '-lucro').value) || 0;
 
  if (taxaPerc >= 100) taxaPerc = 99;
  if (taxaPerc < 0) taxaPerc = 0;
 
  const preco = (custo + embalagem + taxaFixa + lucro) / (1 - taxaPerc / 100);
  const taxaPercValor = preco * (taxaPerc / 100);
  const lucroReal = preco - custo - embalagem - taxaFixa - taxaPercValor;
  const margemPerc = preco > 0 ? (lucroReal / preco * 100) : 0;
 
  const fmt = (n) => 'R$ ' + n.toFixed(2).replace('.', ',');
 
  document.getElementById(prefix + '-preco').textContent = fmt(preco);
  document.getElementById(prefix + '-out-custo').textContent = '− ' + fmt(custo);
  document.getElementById(prefix + '-out-embalagem').textContent = '− ' + fmt(embalagem);
  document.getElementById(prefix + '-out-taxafixa').textContent = '− ' + fmt(taxaFixa);
  document.getElementById(prefix + '-out-taxaperc').textContent = '− ' + fmt(taxaPercValor);
  document.getElementById(prefix + '-out-lucro').textContent = fmt(lucroReal);
  document.getElementById(prefix + '-out-margem').textContent = margemPerc.toFixed(1).replace('.', ',') + '%';
}
 
calcular('ts');
calcular('ml');
