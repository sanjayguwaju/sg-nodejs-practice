// Tradition old function method
const square = function (x) {
    return x * x;
}

// ES6 Arrow Function

const square1 = (x) => {
    return x * x;
}

// ES6 One Liner Function
const square2 = (x) => x * x

console.log(square(5));


const event = {
    name: "Birthday Party",
    guestListName: ['Raju', 'Balay', 'Aakriti', 'Sakshi', 'Priyansha'],
    printGuestNames() {
        console.log('Guest list for' + this.name);

        this.guestListName.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuestNames();