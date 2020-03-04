
const ISETN = {
  name: 'ISET NABEUL',
  institut: true,
  since: 1998, // example
  geoLocation: {
    langitude: 'laaaaaaa',
    lantiutude: 'looooooo'
  },
  diplomes: [
    'DSI',
    'RSI'
  ]
}

// ============ Before ES6 ============ // 
  console.log(`
    // Before ES6 
    ${ISETN.name}
    ${ISETN.diplomes}
    ${ISETN.institut}
    // ============
  `);
  
// ==================================== //


// ============ After ES6 ============ //
  const { name, diplomes, institut } = ISETN;

  console.log(`
    // After ES6 : core concept
    ${name}
    ${diplomes}
    ${institut}
    // ============
  `);

  // 

  const { geoLocation: { langitude: la, lantiutude: lo }} = ISETN;
  console.log(`
    // After ES6 : use Nested Destructuring with renaming > advanced !
    ${la}
    ${lo}
    // ============
  `);

  // use with Function
    const GlobalProps = {
      backend_framework: [
        'Express JS',
        'Koa JS',
        'Nest JS',
        'Sails JS'
      ],
      frontend_framework: [
        'React JS',
        'Angular',
        'Vue JS'
      ]
    }

    function useWithFunc({ backend_framework }) {
      console.log(`Some Node.js Backend Framework: \n [ ${backend_framework} ]`);
    }
    
    useWithFunc(GlobalProps);
  
// ==================================== //