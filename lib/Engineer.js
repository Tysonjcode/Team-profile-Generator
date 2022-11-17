// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // returning github from what was imputted
    getGithub () {
        return this.github;
    }

     // overriding the employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// Exported 
module.exports = Engineer; 