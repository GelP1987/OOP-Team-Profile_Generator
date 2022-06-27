const Engineer = require('../lib/Engineer');
const employee = new Engineer("Kamber","99","kamber@email.email", "KamberHub")

test("creates Engineer object", () => {
      expect(engineer.name()).toBe("Kamber");
      expect(engineer.id()).toBe("100");
      expect(engineer.email()).toBe("Kamber@email.email");
      expect(engineer.gitHub()).tobe("KamberHub")
    });

    test("tests if we can get the name value from getName", () => {
        expect(engineer.getName()).toBe('KSteve');
    });

    test("tests to see if we can get the id value from getID", () => {
        expect(engineer.getId()).tobe("99");
    });

    test("tests to see if we can get the email value from getEmail", () => {
        expect(engineer.getEmail()).tobe('KSteve@email.email');
    });

    test("test to see if we can get the github value from getGithub", () => {
        expect(engineer.getGithub()).tobo('KamberHub');
    });

    test("tests to see if we can get the role value from getRole", () => {
        expect(engineer.getRole()).tobe('Engineer')
    });