const logins: string[] = [
    "Mango",
    "robotGoogles",
    "Poly",
    "Aj4x1sBozz",
    "qwerty123",
];

const addLogin = (allLogins: string[], login: string): void => {
    const loginValid: boolean = isLoginValid(login);
    const loginUnique: boolean = isLoginUnique(allLogins, login);

    loginValid && loginUnique && allLogins.push(login);
};

const isLoginValid = (login: string): boolean =>
    login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins: string[], login: string): boolean =>
    !allLogins.includes(login);

addLogin(logins, "wasd");

console.log("logins", logins);
