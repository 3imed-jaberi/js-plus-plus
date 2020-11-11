// ====================================================================================
// = I show some Strings imporovements. You can find more about Strings, Arrays       =
// = and much more here:                                                              =
// = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects =
// ====================================================================================


const Name = 'imed jaberi '

// .startsWith()
console.log(Name.startsWith('imed')) // true 
console.log(Name.startsWith('jaberi')) // false

// .endsWith()
console.log(Name.endsWith('imed')) // false 
console.log(Name.endsWith('jaberi')) // true

// .includes()
console.log(Name.includes('med')) // true 
console.log(Name.includes('chaouki')) // false

// .repeat()
console.log(Name.repeat(2)) // repeate the string .. 
