const users = [
    {
        id: 1,
        name: 'Julian Garcia',
        age: 25,
        phone: '314467',
        city: 'Armenia',
    },
    {
        id: 2,
        name: 'Andres Coreea',
        age: 35,
        phone: '233554',
        city: 'Cali',
    },
    {
        id: 3,
        name: 'Carlos Pinzon',
        age: 50,
        phone: '987645',
        city: 'Pereira',
    },
    {
        id: 4,
        name: 'Mariana Trejos',
        age: 22,
        phone: '899763',
        city: 'Bogota',
    },
    {
        id: 5,
        name: 'Carla Gomez',
        age: 30,
        phone: '987463',
        city: 'Medellin',
    }
]

//create a function using map to create a new array that has the properties id, name and age.

const usersMap = (users) => {
    const newArray = users.map((user) => {
        return {
            'id': user.id,
            'name': user.name,
            'age': user.age 
        }
    })
    return newArray;
}

const mappedUsers = usersMap(users);
console.log(mappedUsers);

//create a function that filters users whose age is greater than or equal to 30

const userFilter = (users) => {
    const filterArray = users.filter(user => user.age >= 30);
    return filterArray;
}

const filterUsers = userFilter(users);
console.log(filterUsers);


//create a function that organizes the users depending on the city from a to z
const organizeUsersByCity = (users) => {
    users.sort((a,b) => {
        const cityA = a.city.toLowerCase();
        const cityB = b.city.toLowerCase();

        if (cityA < cityB) {
            return -1;
        } else if (cityA > cityB) {
            return 1;
        } else {
            return 0;
        }
    });
    return users;
}

const organizeUsers = organizeUsersByCity(users);
console.log(organizeUsers);

//create a function which reduces the users and does not show the name of the properties but only their value

const reduceUsers = (users) => {
    users.forEach(user => {
        const {id, name, age, phone, city} = user;
        console.log(`${id}, ${name}, ${age}, ${phone}, ${city}`)
    })
}

reduceUsers(users);