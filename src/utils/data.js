import data from './data.json'

export const categories = data.map((item) => item.category)

export const categorySet = new Set(categories)

export const uniqueCategories = Array.from(categorySet)

export const categoriesWithCounts = data.reduce((obj, cat) => {
  // check if cat exists as a key on obj
  // if category key does not exist
  // add that key with a value of 1
  // else 
  // add 1 to the current value of that key
  if (!obj[cat.category]) {
    obj[cat.category] = 1
  } else {
    obj[cat.category] += 1
  }
  return obj
}, {}) // !!! Be sure to define the initial value as an Object!

export const namesAndCategories = uniqueCategories.map(name => {
  // return an object here with the name and count
  return {
    name,
    count: categoriesWithCounts[name]
  }
})


export default data
