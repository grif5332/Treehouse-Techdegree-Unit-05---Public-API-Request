/* ======== search.js ==========================
=   search.js creates and inserts the search bar
=   and search button into the DOM.  Also, adds
=   functionality to the elements.
============================================== */
let searchBoxInput;

let searchField = () => {
    let searchContainer = document.getElementsByClassName('search-container');  
    searchContainer[0].innerHTML = 
    `<form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`;

    //add search functionality
    document.getElementById('search-input').addEventListener('change', () => {;
        searchBoxInput = document.getElementById('search-input').value.toLowerCase()    ; 
        console.log(searchBoxInput);
})
};

let searchButton = () => {
    document.getElementById('search-submit').addEventListener('click', (event) => {
        //event.preventDefault;
        let card = document.getElementsByClassName('card');
        alert('search clicked');
        for (let i = 0; i < cardsPerPage; i++) {
            if (!String(`${personFirst[i]}${personLast[i]}`).includes(String(searchBoxInput))) {
                console.log(i);
                card[i].style.visibility = "hidden";
            };
            if (searchBoxInput === "") {
                card[i].style.visibility = "";
            };
        };
    });
};