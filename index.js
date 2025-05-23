//Prompt User to enter comma seperated list of Froyo flavors
const order= prompt("Please enter a comma seperated list of flavors you'd like to order.","vanilla,vanilla,vanilla,strawberry,coffee,coffee");
//Display how many of each flavor where ordered.
let flavors = order.split(",");
console.log(`Flavor array size ${flavors.length}`);

console.log(flavors)
const orderTotal = flavors.reduce((objFlavors, flavor) => {
    if (objFlavors[flavor] === undefined){
        objFlavors[flavor] = 1;
    } else {
        objFlavors[flavor] += 1;
    }
    return objFlavors;
},{});

console.log(orderTotal);