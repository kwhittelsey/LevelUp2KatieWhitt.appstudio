var firstName = prompt("Enter your first name ")
var userState = prompt("Enter your state in the 2 letter acronym ")
var temp = Number(prompt("Enter a temperature in Fahrenheit "))
 
 // string method to capitalize the state and user's first letter
var stateCapital = userState.toUpperCase()
var capitalName = firstName.charAt(0).toUpperCase() + firstName.slice(1)

// creates array to hold all messages
var userInfo = [`${capitalName}`, `${stateCapital}`, `${temp}`]
console.log(`${userInfo}`)

if (userState == "NE" && temp < 32) {
  NSB.MsgBox(`${capitalName}, wear a warm coat, hat, scarf and gloves.`)
} else if (userState == "NE" && temp > 32 && temp < 50) {
  NSB.MsgBox(`${capitalName}, wear a warm coat but you won't need a hat, scarf or gloves.`)
  } else if (userState == "FL" && temp > 32 && temp < 50) {
  NSB.MsgBox(`${capitalName}, 	wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
  } else if (userState == "FL" && temp > 50 && temp < 70) {
  NSB.MsgBox(`${capitalName}, wear a warm coat, hat and gloves. Maybe a scarf too.`)
}