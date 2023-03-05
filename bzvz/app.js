let display = document.getElementById("screen");

// Brisanje
const wipe = () => {
  display.value = "";
};

// Prikazivanje
const show = (n) => {
  display.value += n;
};

// Vrsenje operacija
const calc = () => {
  display.value = eval(display.value);
};
