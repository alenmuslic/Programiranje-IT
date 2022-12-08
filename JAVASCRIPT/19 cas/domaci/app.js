function poklon(k, n) {
  let brpoklona = Math.floor(n / k);
  if (k < 1 || k > 20 || isNaN(k)) {
    return `broj cokoladica u poklonu mora biti manji od 20.`;
  } else if (n < 0 || n > 1000 || isNaN(n)) {
    return `na raspolaganju imate 1000 cokoladica.`;
  } else {
    return `mozete spakovati ${brpoklona} poklona sa ${n} cokoladica.`;
  }
}
console.log(poklon(4, 19));
