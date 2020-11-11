
// ============ Before ES6 ============ // 
  // when i use for or traditional 
  // loop my code isn't clean .. 
// ==================================== //

// ============ After ES6 ============ //
  // For In 
  const fruits = [ 
    'Apple 🍎',
    'Pear 🍐',
    'Banana 🍌',
    'Grape 🍇',
    'Strawberries 🍓',
    'Potato 🥔',
    'Avocado 🥑',
  ]

    // with out index
    for (const item of fruits) {
      console.log(item)
    }
    // with index
    for (const [index, item] of fruits.entries()) {
      console.log(`${index + 1} - ${item}`)
    }
  // For Of
  const fruitsObj = { 
    Apple: '🍎',
    Pear: '🍐',
    Banana: '🍌',
    Grape: '🍇',
    Strawberries: '🍓',
    Potato: '🥔',
    Avocado: '🥑',
  }

  for (const item in fruitsObj) {
    console.log(`Key: ${item}, Value: ${fruitsObj[item]}`) 
  }
// ==================================== //
