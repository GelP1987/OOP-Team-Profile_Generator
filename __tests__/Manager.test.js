const Manager = require('../lib/Manager');
    const manager = new Manager("Karen","97","Karen@email.email", "221 B")
    
    test("creates Manager object", () => {
        expect(manager.name()).toBe("Karen");
        expect(manager.ManagerId()).toBe("97");
        expect(manager.email()).toBe("Karen@email.email");
        expect(manager.OfficeNumber()).tobe("221 B")
      });
    
        test("tests if we can get the name value from getName", () => {
            expect(manager.getName()).toBe('Karen');
        });
    
        test("tests to see if we can get the id value from getID", () => {
            expect(manager.getId()).tobe("97");
        });
    
        test("tests to see if we can get the email value from getEmail", () => {
            expect(manager.getEmail()).tobe('Karen@email.email');
        });
    
        test("test to see if we can get the github value from getGithub", () => {
            expect(manager.getOfficeNumber()).tobo('221 B');
        });
    
        test("tests to see if we can get the role value from getRole", () => {
            expect(manager.getRole()).tobe('Manager')
        });