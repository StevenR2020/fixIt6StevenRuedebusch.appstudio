let petNames= ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
let withMarmaduke= petNames.push("Marmaduke")
console.log(`The pet names are ${petNames}.`)

let userChoice = prompt(`Please choose the action you want by entering the corresponding number:

1. Remove Vinny from the array.
2. Remove Marty from the array.
3. Add Nancy to the front of the array.
4. Add your name to the end of the array.
5. Find out where Riley is located in the array.
6. Find out where Cindy is located in the array.
7. Show the withMarmaduke array data.`)

switch(userChoice) {
  case'1':
    let removeVinny= petNames.splice(5,1)
    alert(`The action taken was: Remove Vinny
    The remaining data are: ${petNames}`)
    console.log('The action taken was: Remove Vinny')
    console.log('The remaining data are ' + petNames)
    break;
    
  case'2':
    let removeMarty = petNames.splice(3,1)
    alert(`The action taken was: Remove Marty
    The remaining data are: ${petNames}`)
    console.log('The action taken was: Remove Marty')
    console.log('The remaining data are ' + petNames)
    break;
    
  case'3':
    let addNancy= petNames.unshift(Nancy)
    alert(`The action taken was: Add Nancy
    The remaining data are: ${petNames}`)
    console.log('The action taken was: Add Nancy')
    console.log('The remaining data are ' + petNames)
    break;
    
  case'4':
    let addUser = petNames.push(Steven)
    alert(`The action taken was: Add user name
    The remaining data are: ${petNames}`)
    console.log('The action taken was: Add User')
    console.log('The remaining data are ' + petNames)
    break;
    
  case'5':
    rileyIndex = petNames.indexOf('Riley')
    alert(`The action taken was: Find Riley
    The index of riley is ${rileyIndex}`)
    console.log('The action taken was: Find the index of Riley')
    console.log('The remaining data are ' + petNames)
    break;
  case'6':
    cindyIndex = petNames.indexOf('Cindy')
    alert(`The action taken was: Find Cindy
    The index of Cindy is ${cindyIndex}`)
    console.log('The action taken was: Find the index of Cindy')
    console.log('The remaining data are ' + petNames)
    break;
    
  case'7':
    alert(`The array data for withMarmaduke is ${withMarmaduke}`)
    console.log('The action taken was: Find the array data for withMarmaduke variable')
    console.log('The remaining data are ' + petNames)
    break;
  
  default:
    alert(`Invalid input.`)
    break;
  }



// Scenario AB

petNames.shift()
console.log(petNames)

petNames.unshift("Barney")
console.log(petNames)

let allPets = petNames.push(["Ted", "Fred", "Jed", "Ned", "Ed", "Zed"])
console.log(allPets)

let stringPets = allPets.join(["Bob", "Sam", "Andy"])
console.log(stringPets)

petNames.unshift("Agnes")
console.log(petNames)

















