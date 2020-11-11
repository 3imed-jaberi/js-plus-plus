
// ============ Before ES6 ============ // 
  // string concat
    var Name = 'World'
    // 1st way 
      console.log("1st old way: Hello" + " " + Name)
    // 2nd way 
      console.log("2nd old way: Hello".concat(' ', Name))
// ==================================== //

// ============ After ES6 ============ //
  // Template Strings
    Name = 'EcmaScript 6'

    console.log(`
      Current way: Hello ${Name}, 
      Today is ${new Date().toUTCString()}
    `)
  // talk about sql query problem ("'"+ var + "'") ..
// ==================================== //
