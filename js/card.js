/* ====== card.js =============================
*   Creates the card for use on
*   the index.html file.
*=================================== */
  
// fetch('https://randomuser.me/api')
//     .then(response => response.json())
//     .then(data => {
//         let dataResult = data.results;
//         return dataResult;
//     });



let cardInit = (numOfCardsPerPage) => {
    for (let i = 0; i < numOfCardsPerPage; i++){
        let card = document.createElement('div'); // creates a <div>
        let cardInfo = i; 
        card.className = 'card';  // adds the 'card' class to each card.
        
        fetch(`https://randomuser.me/api`)
            .then(response => response.json())
            .then(data => { //console.log(data.results[0])
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
                    personData.dob,
                    personData.picture.large
                    );


            card.innerHTML =  // creates the HTML layout via template literal. 
                `<div class="card-img-container">
                    <img class="card-img" src="${person.img}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${person.firstName} ${person.lastName}</h3>
                    <p class="card-text">${person.email}</p>
                    <p class="card-text cap">${person.city}, ${person.state}</p>
                </div>`;
            let modalData = person;
            document.getElementById('gallery').appendChild(card);  // append the card(s) to the gallery element
            card.setAttribute('onclick', `modal(${cardInfo}), ${this.personData}`); //  adds the onclick="modal(cardInfo)" to the card element 
                    
        });

    };
    
}