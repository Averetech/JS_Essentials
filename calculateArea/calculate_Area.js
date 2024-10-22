let length;
let width;

function calculateArea() {
    length = document.getElementById("length").value;
    width = document.getElementById("width").value;

    let area = length * width;
    document.getElementById("result").innerHTML = `The calculated is equal to ${area}.`;
}


//Practice task
let milk;
let coffee;
let sugar;

function groceryTracker() {
    milk = parseFloat(document.getElementById("milk").value);
    coffee = parseFloat(document.getElementById("coffee").value);
    sugar = parseFloat(document.getElementById("sugar").value);

    let total = milk + coffee + sugar;

    document.getElementById("total-amount").innerHTML = `The amount you need to get all the above items is ${total}`
}

