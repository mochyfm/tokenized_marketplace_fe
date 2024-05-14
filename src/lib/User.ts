export class User {
    username: string;
    email: string;
    password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

export const userlist = [
    new User("quesito", "quesito@hotmail.com", "Test1234"),
    new User("Pedro", "pedrope@hotmail.com", "Test1234"),
    new User("Michael", "jackson@hotmail.com", "Test1234")
]