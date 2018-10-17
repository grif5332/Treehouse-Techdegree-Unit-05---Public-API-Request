/* ===== app.js ============
=   brings it all together
============================ */
let cardsPerPage = 12;  // initial # of cards to display
let cardInfo; // define the cardInfo var.


cardInit(cardsPerPage); //inits the cards

searchField(); // inits the search field
searchButton(); // inits the search button

document.body.style.backgroundColor = "rgb(48, 130, 108)";
document.getElementsByTagName('h1')[0].style.color = "white";
document.getElementsByTagName('h1')[0].style.fontSize = '1.5em';
