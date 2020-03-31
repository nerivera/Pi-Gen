function output(r) {
  document.getElementById("res").innerHTML = r;
}

function genPi() {
  let rolls = parseFloat(document.getElementById("rolls").value),
    numcp = 0,
    max = parseFloat(document.getElementById("max").value);
  if (Number.isNaN(rolls) || rolls < 1 || !Number.isInteger(rolls) || !Number.isFinite(rolls))
    return "The number of rolls must be a positive integer.";
  if (Number.isNaN(max) || max < 2 || !Number.isInteger(max) || !Number.isFinite(max))
    return "The maximum number must be an integer greater than 1.";
  for (let i = 0; i < rolls; i++) {
    if (coprime(Math.floor(Math.random() * max) + 1, Math.floor(Math.random() * 200) + 1))
      numcp++;
  }
  return Math.sqrt(6 * rolls / numcp).toString();
}

function coprime(a, b) {
  while (a != b) {
    if (a > b)
      a = a - b;
    else
      b = b - a;
    if (a < 1 || b < 1) {
      alert("a is " + a.toString() + " and b is " + b.toString());
      return false;
    }
  }
  return a == 1;
}
