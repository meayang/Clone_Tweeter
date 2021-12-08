//abcd1234: $2b$12$G9xf9SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm
let users = [
    {
        id: '1',
        username: 'bob',
        password: '$2b$12$G9xf9SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm',
        name: 'Bob',
        email: 'bob@gmail.com',
        url: 'https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg'
    },
];

export async function findByUsername(username) {
    return users.find((user) => user.username === username);
}

export async function createUser(user) {
    const created = { ...user, id: Date.now().toString()};
    users.push(created)
    return created.id;
}

