/* ====  Person.js  =========================================
=   compiles the data from the JSON data from
=   the fetch api from https://randomuser.me/
=   
=   Inportant Info:
=   1) this.dob is originally in UTC timecode.  new Date
=   & toLocaleDateString converts the UTC to a  Month / Day.
=   2) this.city,state,street is initially lower case. The
=   charAt(0) set the first letter to uppercase. (WIP?)
============================================================== */
class Person {
    constructor(firstName, lastName, email, city, state, phone, street, dob, img) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.city = city;
        this.state = state;
        this.phone = phone;
        this.street = street;
        this.dob = new Date(dob).toLocaleDateString('en-EN',{month:'long', day:'numeric'});
        this.img = img;
    };
}
