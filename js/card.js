/* ====== card.js =============================
*   Creates the card for use on
*   the index.html file.
*=================================== */

let personFirst = [];
let personLast = [];
let personEmail = [];
let personCity = [];
let personState = [];
let personPhone = [];
let personStreet = [];
let personDOB = [];
let personImg = [];


let cardInit = (numOfCardsPerPage) => {
    for (let i = 0; i < numOfCardsPerPage; i++){
        let card = document.createElement('div'); // creates a <div>
        let cardInfo = i; 
        card.className = 'card';  // adds the 'card' class to each card.
        
        fetch(`https://randomuser.me/api/?results=${cardsPerPage}&nat=us,gb`) //fetches only EN and GB people and list # = cardPerPage's 
            .then(response => response.json())
            .then(data => { // ==========  console.log(data.results[0]);
                let personData = data.results[0];

        //  Person (firstName, lastName, email, city, state, phone, address, birthday, img)
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
                card.setAttribute('value', i);
                card.setAttribute('onclick', `modal(${cardInfo})`); //  adds the onclick="modal(cardInfo)" to the card element        
            });

    };
    
}