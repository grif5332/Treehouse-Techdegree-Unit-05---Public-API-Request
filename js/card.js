/* ====== card.js =============================
*   Creates the card for use on
*   the index.html file.
*=================================== */
let cardInit = (numOfCardsPerPage) => {
    for (let i = 0; i < numOfCardsPerPage; i++){
        let card = document.createElement('div'); // creates a <div>
        let cardInfo = i; 
        card.className = 'card';  // adds the 'card' class to each card.
        card.innerHTML =  // creates the HTML layout via template literal. 
            `<div class="card-img-container">
                <img class="card-img" src="./img/placeholder90x90.png" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">first name: ${i} last name: ${i}</h3>
                <p class="card-text">email: ${i}</p>
                <p class="card-text cap">city: ${i}, state: ${i}</p>
            </div>`;
    
        document.getElementById('gallery').appendChild(card);  // append the card(s) to the gallery element
        card.setAttribute('onclick', `modal(${cardInfo})`); //  adds the onclick="modal(cardInfo)" to the card element 
    };
}