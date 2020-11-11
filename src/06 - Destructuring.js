
const ENSI = {
  name: 'ENSI Manouba',
  institut: false,
  since: 1998, // example
  geoLocation: {
    langitude: 12.51,
    lantiutude: 0.77
  },
  diplomes: [
    'Software Eng.',
    'IT',
    'CS'
  ]
}

// ============ Before ES6 ============ //
  console.log(`
    // Before ES6 
    ${ENSI.name}
    ${ENSI.diplomes}
    ${ENSI.institut}
    // ============
  `)
  
// ==================================== //


// ============ After ES6 ============ //
  const { name, diplomes, institut } = ENSI

  console.log(`
    // After ES6 : core concept
    ${name}
    ${diplomes}
    ${institut}
    // ============
  `)

  // 

  const { 
    geoLocation: { 
      langitude: la,
      lantiutude: lo 
    }
  } = ENSI
  console.log(`
    // After ES6 : use Nested Destructuring with renaming > advanced !
    ${la}
    ${lo}
    // ============
  `)

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
      console.log(`Some Node.js Backend Framework: \n [ ${backend_framework} ]`)
    }

    useWithFunc(GlobalProps)
  
// ==================================== //
