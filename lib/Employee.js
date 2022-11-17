// employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returning name from inputted
    getName () {
        return this.name;
    }

    // returning ID from inputted
    getId () {
        return this.id;
    }   

    // returning email from inputted
    getEmail () {
        return this.email;
    }

    // returning employee type 
    getRole () {
        return 'Employee'; 
    }
};

// Exported 
module.exports = Employee; 