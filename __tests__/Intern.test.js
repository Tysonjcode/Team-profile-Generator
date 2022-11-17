// Intern constructor 
const Intern = require('../lib/Intern');

// intern objects  
test('creates an Intern object', () => {
    const intern = new Intern('Tyson', 90, 'tyson@alittledesigner.com', 'CSHS');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// This will pull the school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Tyson', 90, 'tyson@alittledesigner.com', 'CSHS');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// This will pull the role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Tyson', 90, 'tyson@alittledesigner.com', 'CSHS');

    expect(intern.getRole()).toEqual("Intern");
}); 