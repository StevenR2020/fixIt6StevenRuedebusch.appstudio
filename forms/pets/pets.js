let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
let withMarmaduke = petNames.push("Marmaduke")
console.log(petNames, withMarmaduke)


// These lines of code is removing the 5th element and only 1 element from the array.
petNames.splice(5,1)
console.log(petNames)
console.log("The action taken was: Remove Vinny")
console.log("The remaining data are: [Darcy, Jack, Jerry, Marty, Vito, Riley, Saddie, Marge, Sam]")

// These lines of code is removing the 3rd element and only 1 element from the array.
petNames.splice(3,1)
console.log(petNames)
console.log("The action taken was: Remove Marty")
console.log("The remaining data are: [Darcy, Jack, Jerry, Vito, Riley, Saddie, Marge, Sam]")

// These lines of code are adding the name Nancy to the beginning of the list.
petNames.unshift("Nancy")
console.log(petNames)
console.log("The action taken was: Add Nancy")
console.log("The remaining data are: [Nancy, Darcy, Jack, Jerry, Vito, Riley, Saddie, Marge, Sam]")

// These lines of code are adding the user's name to the end of the list.
petNames.push("Steven")
console.log(petNames)
console.log("The action taken was: Add user's name")
console.log("The remaining data are: [Nancy, Darcy, Jack, Jerry, Vito, Riley, Saddie, Marge, Sam, Steven]")

// These lines of code are informing the user of where the name "Riley" is located in the list.
rileyIndex = petNames.indexOf("Riley")
console.log(rileyIndex)

// These lines of code are informing the user of where the name "Cindy" is located in the list.
cindyIndex = petNames.indexOf("Cindy")
console.log(cindyIndex)