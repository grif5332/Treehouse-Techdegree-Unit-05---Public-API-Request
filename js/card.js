/* ====== card.js =============================
*   Creates the card for use on
*   the index.html file.
*=================================== */
/* === Global variables === */
let personFirst = [];
let personLast = [];
let personEmail = [];
let personCity = [];
let personState = [];
let personPhone = [];
let personStreet = [];
let personDOB = [];
let personImg = [];

/* === Creates Initial Employee Cards === */
let cardInit = (numOfCardsPerPage) => {
    for (let i = 0; i < numOfCardsPerPage; i++){
        let card = document.createElement('div'); // creates a <div>
        let cardInfo = i; 
        card.className = 'card';  // adds the 'card' class to each card.
        
        fetch(`https://randomuser.me/api/?results=${cardsPerPage}&nat=us,gb`) //fetches only EN and GB people and list # = cardPerPage's 
            .then(response => response.json()) // gets the JSON data from the fetch
            .then(data => {
                let personData = data.results[0];  //adds the result of the fetched data to personData var

                /*  Person (firstName, lastName, email, city, state, phone, address, birthday, img)
                generates a new person for each iteration. */
                let person = new Person(
                    personData.name.first,
                    personData.name.last,
                    personData.email,
                    personData.location.city,
                    personData.location.state,
                    personData.phone,
                    personData.location.street,
                    personData.dob.date,
                    personData.picture.large
                    );

                    /* These push the data from the newly created person to the appropriate global scope array */
                    personFirst.push(person.firstName);
                    personLast.push(person.lastName);
                    personEmail.push(person.email);
                    personCity.push(person.city);
                    personState.push(person.state);
                    personPhone.push(person.phone);
                    personStreet.push(person.street);
                    personDOB.push(person.dob);
                    personImg.push(person.img);

                card.innerHTML =  // creates the HTML layout via template literal. 
                    `<div class="card-img-container">
                        <img class="card-img" src="${person.img}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${person.firstName} ${person.lastName}</h3>
                        <p class="card-text">${person.email}</p>
                        <p class="card-text cap">${person.city}, ${person.state}</p>
                    </div>`;

                document.getElementById('gallery').appendChild(card);  // append the card(s) to the gallery element
                card.setAttribute('value', i); // adds a value for use 
                card.setAttribute('onclick', `modal(${cardInfo})`); //  adds the onclick="modal(cardInfo)" to the card element  
        }); // end fetch() - starts@line23
    }; // end for loop - starts@line18 
}; // end cardInit() - starts@line17