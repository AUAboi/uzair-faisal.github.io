let dropList = document.querySelectorAll(".drop-list");
document.querySelector("#dropdown").addEventListener("click", function () {
  dropList.forEach(function (item) {
    item.classList.toggle("d");
  });
});

let icon1 = document.querySelector("#ic1");
let icon2 = document.querySelector("#ic2");
let icon3 = document.querySelector("#ic3");
let icon4 = document.querySelector("#ic4");
let a = 0;

function i1() {
  setTimeout(ic1, 1000);
}

function i2() {
  setTimeout(ic2, 1000);
}

function i3() {
  setTimeout(ic3, 1000);
}

function i4() {
  setTimeout(ic4, 1000);
}

function ic1() {
  icon4.style.display = "none";
  icon1.style.display = "block";
  setTimeout(i2, 5000);
}

function ic2() {
  icon1.style.display = "none";
  icon2.style.display = "block";
  setTimeout(i3, 5000);
}

function ic3() {
  icon2.style.display = "none";
  icon3.style.display = "block";
  setTimeout(i4, 5000);
}

function ic4() {
  icon3.style.display = "none";
  icon4.style.display = "block";
  setTimeout(i1, 5000);
}

i1();
