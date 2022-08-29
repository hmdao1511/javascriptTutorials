// 2/8/2022
// Part 8: Leveling Up Our Functions
// Lesson 3: Lexical Scope 

// How it works
// Example:
function bankRobbery() {
    const heroes = ['Spiderman', 'Batman', 'Superman', 'Wolverine'];
    function cryForHelp() {
        for(let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}!`);
        }
    }
    cryForHelp();
}
bankRobbery();

// As you can see, the array heroes is not within the function cryForHelp(), but it 
// exists in the parent function bankRobbery(). Yet, you can still use the variable
// heroes inside cryForHelp(), because it's the children function of bankRobbery().

// We call this lexical scope