// Manager constructor 
const Manager = require('../lib/Manager');

// Manager objects
test('creates an Manager object', () => {
    const manager = new Manager('Tyson', 90, 'tyson@alittledesigner.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// This will get the role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Tyson', 90, 'tyson@alittledesigner.com');

    expect(manager.getRole()).toEqual("Manager");
}); 