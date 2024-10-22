
  // Pb:     
  // function sayHelloTo (Name) {
  //   console.log('Hello ' + Name)
  // }

  // sayHelloTo('ENSI Manouba') // success 
  // sayHelloTo() // failed 

// ============ Before ES6 ============ // 
  function sayHelloTo (Name) {
    if (Name === undefined) {
      Name = 'World !'
    }

    console.log('Hello ' + Name)
  }

  sayHelloTo('ENSI Manouba') // success 
  sayHelloTo() // success 
// ==================================== //


// ============ After ES6 ============ //
  function sayHelloTo (Name = 'World !') {
    console.log('Hello ' + Name)
  }

  sayHelloTo('ENSI Manouba') // success 
  sayHelloTo() // success 
// ==================================== //
