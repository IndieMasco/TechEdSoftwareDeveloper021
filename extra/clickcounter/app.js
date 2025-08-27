var click = 0;
function fun() {
  document.getElementById("counts").innerHTML = ++click;
  click = click;
}
