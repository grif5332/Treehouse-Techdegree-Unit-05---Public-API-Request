/* ===== modal.js ========================
*   creates the modal and injects it
=   into the DOM.  Also, adds functionality
=   to 'X', 'PREV', and 'NEXT' buttons.
======================================== */
let modal = (cardInfo, modalData) => { 
    //creates the modal pop-up window and populates it.
    let modalInfo = cardInfo;
    //let modalStuff = modalData;
console.log(cardInfo);
console.log(modalData);

    let body = document.getElementsByTagName('body');  // gets <body>
    // console.log(body[0]);
    //console.log(`card ${modalInfo} clicked`);

    let modalCardDOM =   //  creates the HTML layout for the modal popup.
        `<div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="./img/placeholder125x125.png" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name: ${modalInfo}</h3>
                        <p class="modal-text">email: ${modalInfo}</p>
                        <p class="modal-text cap">city: ${modalInfo}</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555: ${modalInfo}</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204: ${modalInfo}</p>
                        <p class="modal-text">Birthday: 10/21/2015: ${modalInfo}</p>
                    </div>
                </div>
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>
        </div>`;
    body[0].innerHTML += modalCardDOM;  // concats the modal to the end of the <body>

    // == DONE == Modal: 'X' btn ===
    let modalRemove = document.getElementsByClassName('modal-container');

    document.getElementById('modal-close-btn').addEventListener('click', () => {
         // gets the modal-container AFTER its created
        modalRemove[0].outerHTML = ""; //  removes the HTML from <body>
    });
    // === Modal: 'PREV' btn ===
    document.getElementById('modal-prev').addEventListener('click', () => {
        // console.log('prev btn clicked');
        if (cardInfo === 0) {
            console.log('You cannot go below 0!');
        } else {
            cardInfo--; // if cardInfo is greater than 0, remove 1
            modalRemove[0].outerHTML = ""; // removes the 'old' modal
            modal(cardInfo); //replaces the 'old' modal with the new one.
        }
    });
    // === Modal: 'NEXT' btn ===
    document.getElementById('modal-next').addEventListener('click', () => {
        // console.log('next btn clicked');
        if (cardInfo === cardsPerPage) {  // checks if the cardInfo is below the # of cards allowed.
            console.log(`You cannot go above ${cardsPerPage}!`);
        } else {
            cardInfo++; // it its lower than then # of cards allowed, add 1
            modalRemove[0].outerHTML = ""; // removes the 'old' modal
            modal(cardInfo); // replaces the 'old' modal with the new one.
        }
    });
}