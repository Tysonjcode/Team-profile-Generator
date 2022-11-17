// importing the Employee constructor 
const Employee = require('./Employee');

// Manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // This will override employee role to manager 
    getRole () {
        return "Manager";
    }
}

// Exported 
module.exports = Manager; 