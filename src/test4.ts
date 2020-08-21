interface user {
    name: string;
    age: number;
}

const users: Array<user> = [
    { name: "Boba", age: 43 },
    { name: "Lola", age: 52 },
    { name: "Nina", age: 23 },
];

function identity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

console.log(identity(users));


//-------------------------------------------------------------------//


interface person {
    name: string;
}

function withID<T extends person>(obj: T) {
    return { ...obj, id: Date.now() };
}

console.log(withID({ name: "Goga", surname: "Fara" }));
console.log(withID({ name: "Masha", age: 45, folowers: [] }));
