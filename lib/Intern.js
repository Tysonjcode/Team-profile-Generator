// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returning school that was imputted
    getSchool () {
        return this.school;
    }

    // this overrides employee role to intern
    getRole () {
        return "Intern";
    }
}

// Exported 
module.exports = Intern; 