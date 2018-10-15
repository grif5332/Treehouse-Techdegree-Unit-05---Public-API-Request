/* ====  Person.js  =========================
=   compiles the data from the JSON data from
=   the fetch api from https://randomuser.me/
============================================= */


class Person {
    constructor(firstName, lastName, email, city, state, phone, address, dob, img) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.city = city;
        this.state = state;
        this.phone = phone;
        this.address= address;
        this.dob = dob;
        this.img = img
    };

}