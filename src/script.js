function updateTotal() {
  const quantities = [
    "quantity2",
    "quantity3",
    "quantity4",
    "quantity5",
    "quantity6",
    "quantity7",
  ];
  let total = 0;

  quantities.forEach((id) => {
    const value = parseInt(document.getElementById(id).value) || 0;
    total += value;
  });
  document.getElementById("quantityall").value = total;
}

document.querySelectorAll('[id^="increase"]').forEach((button) => {
  button.addEventListener("click", function () {
    const input = document.getElementById(
      button.id.replace("increase", "quantity")
    );
    input.value = (parseInt(input.value) || 0) + 1;
    updateTotal();
  });
});

document.querySelectorAll('[id^="decrease"]').forEach((button) => {
  button.addEventListener("click", function () {
    const input = document.getElementById(
      button.id.replace("decrease", "quantity")
    );
    const currentValue = parseInt(input.value) || 0;
    if (currentValue > 0) {
      input.value = currentValue - 1;
    }
    updateTotal();
  });
});

// hamburger
const hamburger = document.querySelector("#hamburger");
const Navmenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  Navmenu.classList.toggle("hidden");
});
// navbarfixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;

  if (window.scrollY > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
