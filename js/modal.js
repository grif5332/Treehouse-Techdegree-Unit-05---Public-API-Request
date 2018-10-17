/* ===== modal.js ========================
*   creates the modal and injects it
=   into the DOM.  Also, adds functionality
=   to 'X', 'PREV', and 'NEXT' buttons.
======================================== */
let modal = (cardInfo) => { 
    //creates the modal pop-up window and populates it.
    let modalInfo = cardInfo; // ++++ MAY NOT BE NEEDED!++++  TEST!
    let body = document.getElementsByTagName('body');  // gets <body>
    
    let modalCardDOM =   //  creates the HTML layout for the modal popup.
        `<div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${personImg[cardInfo]}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${personFirst[cardInfo]} ${personLast[cardInfo]}</h3>
                        <p class="modal-text">Email: ${personEmail[cardInfo]}</p>
                        <p class="modal-text cap">${personCity[cardInfo]}</p>
                        <hr>
                        <p class="modal-text">Phone: ${personPhone[cardInfo]}</p>
                        <p class="modal-text cap">${personStreet[cardInfo]} <br>${personCity[cardInfo]}, ${personState[cardInfo]}</p>
                        <p class="modal-text">Birthday: ${personDOB[cardInfo]}</p>
                    </div>
                </div>
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>
        </div>`;
    body[0].innerHTML += modalCardDOM;  // concats the modal to the end of the <body>

    // === Modal: 'X' btn ===
    let modalRemove = document.getElementsByClassName('modal-container'); // gets the modal-container AFTER its created

    document.getElementById('modal-close-btn').addEventListener('click', () => {
        modalRemove[0].outerHTML = ""; //  removes the modal HTML from <body>
        searchField();
        searchButton();
    });

    // === Modal: 'PREV' btn ===
    document.getElementById('modal-prev').addEventListener('click', () => {
        if (cardInfo === 0) {  // ++++++ Maybe make this if(cardInf !== 0) and no else? check PLZ!+++++
            document.getElementById('modal-prev').disabled = 'true';
            document.getElementById('modal-prev').style.visibility = "hidden";
        } else {
            cardInfo--; // if cardInfo is greater than 0, remove 1
            modalRemove[0].outerHTML = ""; // removes the 'old' modal
            modal(cardInfo); //replaces the 'old' modal with the new one.
        }
    });

    // === Modal: 'NEXT' btn === ++++Could maybe use a little work?+++++
    document.getElementById('modal-next').addEventListener('click', () => {
        if (cardInfo === (cardsPerPage - 1)) {  // checks if the cardInfo is below the # of cards allowed.
            document.getElementById('modal-next').disabled = 'true';
            document.getElementById('modal-next').style.visibility = "hidden";
        } else {
            cardInfo++; // it its lower than then # of cards allowed, add 1
            modalRemove[0].outerHTML = ""; // removes the 'old' modal
            modal(cardInfo); // replaces the 'old' modal with the new one.
        }
    });
}