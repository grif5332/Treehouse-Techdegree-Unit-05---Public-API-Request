/* ====  Person.js  =========================
=   compiles the data from the JSON data from
=   the fetch api from https://randomuser.me/
============================================= */
class Person {
    constructor(firstName, lastName, email, city, state, phone, street, dob, img) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.city = city.charAt(0).toUpperCase() + city.substr(1);;
        this.state = state.charAt(0).toUpperCase() + state.substr(1);;
        this.phone = phone;
        this.street = street.charAt(0).toUpperCase() + street.slice(1);
        this.dob = new Date(dob).toLocaleDateString('en-EN',{month:'long', day:'numeric'});
        this.img = img
    };
}
