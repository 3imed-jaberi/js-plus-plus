  
const useWithArray = [
  'Facebook',
  'Microsoft', 
  'Google',
  'Uber'
]

// const [FirstItem] = useWithArray
// console.log(FirstItem)

// Rest Operator .. 
const [FirstItem, SecondItem, ...RestItem] = useWithArray
console.log(FirstItem, SecondItem, RestItem)

// Spread Operator 
console.log([...useWithArray, 'Nokia'])
