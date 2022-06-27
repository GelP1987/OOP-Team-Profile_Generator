const Intern = require('../lib/Intern');
    const intern = new Intern("Kangaskhan","115","Kangaskhan@email.email", "Kent")
    
    test("creates Intern object", () => {
        expect(intern.name()).toBe("Kangaskhan");
        expect(intern.internId()).toBe("115");
        expect(intern.email()).toBe("Kangaskhan@email.email");
        expect(intern.school()).tobe("Kent")
      });
    
        test("tests if we can get the name value from getName", () => {
            expect(Intern.getName()).toBe('Kangaskhan');
        });
    
        test("tests to see if we can get the id value from getID", () => {
            expect(Intern.getId()).tobe("115");
        });
    
        test("tests to see if we can get the email value from getEmail", () => {
            expect(Intern.getEmail()).tobe('Kangaskhan@email.email');
        });
    
        test("test to see if we can get the github value from getGithub", () => {
            expect(Intern.getSchool()).tobo('Kent');
        });
    
        test("tests to see if we can get the role value from getRole", () => {
            expect(Intern.getRole()).tobe('Employee')
        });