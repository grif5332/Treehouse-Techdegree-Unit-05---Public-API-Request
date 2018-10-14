/* ======== search.js ==========================
=   search.js creates and inserts the search bar
=   and search button into the DOM.  Also, adds
=   functionality to the elements.
============================================== */

let searchField = () => {
    let searchContainer = document.getElementsByClassName('search-container');  
    searchContainer[0].innerHTML = 
    `<form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
    </form>`;

    //add search functionality

}