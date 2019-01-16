// Create an unordered list element
const list = document.createElement('ul')

// Create a list item for our list
const listItem = document.createElement('li')
listItem.className = "president"
listItem.textContent = "George Bush"

// Put the list item on the unordered list
list.appendChild(listItem)

console.log(list)