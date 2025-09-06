// Write your solution in this file!
console.log("Welcome!;")

const burgers = ['Hamburger', 'Cheeseburger'];

let featuredDrink = 'Strawberry Milkshake';

function addBurger(){
    const newBurger = "Flatburger";
    burgers.push(newBurger); 

    if(true){
        const anotherNewBurger = 'Maple Bacon Burger';
        burgers.push(anotherNewBurger);
    }
    return burgers;
}

function changeFeaturedDrink (newDrink){
    featuredDrink = newDrink;
    return featuredDrink;
}

changeFeaturedDrink('The JavaShake');
console.log(featuredDrink);
addBurger();
console.log(burgers);