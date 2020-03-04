
// ============ Before ES6 ============ // 
  // var 

  // var Name = 'imed';
  // var BrotherName = 'jawher';

  // console.log(Name, BrotherName);

// ==================================== //

// ============ After ES6 ============ //
  // let

  // let Name = 'imed';
  // let BrotherName = 'jawher';

  // console.log(Name, BrotherName);

  // const 

  // const Name = 'imed';
  // const BrotherName = 'jawher';

  // console.log(Name, BrotherName);

// ==================================== //



// ==================================== //
// ============ Let vs Var ============ //
// ==================================== //

  var Name = 'imed jaberi';
  console.log('Before change the name: ', Name);

  (function changeName () {
    Name = 'jawher jaberi';
  })() // IIFE pattern .. 

  console.log('After change the name: ', Name);

  // ============ 
  (function changeTeam () {
    let Team = 'Club Africain';
    console.log('Before init the Team in the `changeTeam` function: ', Team);
  })() // IIFE pattern .. 

  console.log('Outside the function: ', Team); // Throw Error 

// ==================================== //