// Starting with a reusable Math function that will find a random number between given integer parameters
let getRandomNumber = (x, y) => {
    let randomNumber = Math.floor(Math.random() * (y - x) + x);
    return randomNumber;
}

// This function selects a random armor type from an array of 5
const getEquipmentType = () => {
    const equipmentArr = ['Helmet', 'Gloves', 'Chestpiece', 'Pants', 'Boots'];
    let i = getRandomNumber(0, 5);
    return equipmentArr[i];
};

// This function produces a random number between 1-10
const getLevel = () => getRandomNumber(1, 11);

/* Testing the function
for (let i = 0; i < 10; i++) {
    console.log(getLevel());
}
*/

// This function produces a random rarity string with common being most likely and legendary being least likely
const getRarity = () => {
    let j = getRandomNumber(0, 100);
    if (j < 45) {
        return 'common';
    } else if (j >= 45 && j < 75) {
        return 'uncommon';
    } else if (j >= 75 && j < 90) {
        return 'rare';
    } else if (j >= 90 && j < 98) {
        return 'epic';
    } else {
        return 'legendary';
    }
};

/* Testing rarity
for (let i = 0; i < 50; i++) {
    console.log(getRarity());
}
*/

// Final function
const newItemDrop = (equipmentType, level, rarity) => {
    console.log(`The dropped item is a level ${level} ${equipmentType}. This is a ${rarity} item.`)
}

// Final function call
newItemDrop(getEquipmentType(), getLevel(), getRarity());