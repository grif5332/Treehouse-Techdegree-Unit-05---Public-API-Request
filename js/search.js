/* ======== search.js ==========================
=   search.js creates and inserts the search bar
=   and search button into the DOM.
============================================== */
let searchBoxInput; 

let searchField = () => {
    let searchContainer = document.getElementsByClassName('search-container');  // selects the search input box 
    searchContainer[0].innerHTML =     // injects the search feature into the DOM
    `<form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`;

    //  when the USER inputs a char, it updates the global searchBoxInput var
    document.getElementById('search-input').addEventListener('change', () => {   
        searchBoxInput = document.getElementById('search-input').value.toLowerCase();
       // searchButton();
        // console.log(searchBoxInput);
    })
};

let searchButton = () => {
    document.getElementById('search-submit').addEventListener('click', (event) => {  //selects and adds the search button. 

        let card = document.getElementsByClassName('card');  // creates a card var
        
        for (let i = 0; i < cardsPerPage; i++) {  //loops through the cards
            if (String(`${personFirst[i]}${personLast[i]}`).includes(String(searchBoxInput))) {
                card[i].style.visibility = "";
            } else if (searchBoxInput === "") {
                card[i].style.visibility = "";
            } else {
                card[i].style.visibility = "hidden";
            };
        };
    });
};