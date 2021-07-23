/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input) {
  const parts = input.split(':')
  if (parts[0] < 12) {
    return "Good Morning"
  }
  if (parts[0] < 17) {
    return "Good Afternoon"
  }
  return "Good Evening"
}

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  let element = document.getElementById('greeting')
  element.innerHTML = greeting
}
