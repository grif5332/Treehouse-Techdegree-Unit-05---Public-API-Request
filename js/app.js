/* ===== app.js ======
=   brings it all together
=========================== */

// fetch('https://randomuser.me/api')
//     .then(response => response.json())
//     .then(data => data.results[0]);


const cardsPerPage = 12;  // # of cards to display

let cardInfo; // define the cardInfo var.

cardInit(cardsPerPage); //inits the cards
searchField(); // inits the search field