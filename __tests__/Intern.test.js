// using the Intern constructor 
const Intern = require('../lib/Intern');

// creating the intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Tyson', 90, 'tyson@alittledesigner.com', 'CSHS');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// pulls school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Tyson', 90, 'tyson@alittledesigner.com', 'CSHS');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// pulls role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Tyson', 90, 'tyson@alittledesigner.com', 'CSHS');

    expect(intern.getRole()).toEqual("Intern");
}); 