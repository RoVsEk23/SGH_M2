/*jshint esversion: 6 */
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  console.log("Test 123");
  // navUL.classList.toggle('show');
  navUL.classList.toggle("show");
});
