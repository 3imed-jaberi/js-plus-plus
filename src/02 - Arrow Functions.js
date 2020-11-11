// ============================================ //
// === Arrow Functions aka Lambda Functions === //
// ============================================ //


// ============ Before ES6 ============ // 
  // Anonymous Functions
  const add = function (a, b) {
    return a + b
  }

  console.log(add(4, 6)) // expect: 10
// ==================================== //


// ============ After ES6 ============ //
  // 1st way 
  // const add = (a, b) => {
  //   return a + b
  // }

  // console.log(add(4, 6)) // expect: 10

  // 2nd way 
  // const add = (a, b) => a + b

  // console.log(add(4, 6)) // expect: 10

  // Note: if we have one args to my arrow func i can write like this
  // const printWithStart = input => console.log('***** '+input+' *****')

  // printWithStart(6) // expect: 10
// ==================================== //
