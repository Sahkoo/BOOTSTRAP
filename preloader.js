window.onload = function () {
window.setTimeout(function () {
    document.querySelector(".container").style.display = "block";
    document.querySelector(".lds-roller").style.display = "none";
  }, 2000);




  document.body.classList.add('lds-roller');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('lds-roller');
  }, 500);


}