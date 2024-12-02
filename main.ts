// Function to calculate the area of a trapezoid
function calculateArea () {
    area = (base1 + base2) / 2 * height
    game.splash("The area is: " + area)
}
let area = 0
let height = 0
let base2 = 0
let base1 = 0
// Set values for the bases and height (example values)
base1 = game.askForNumber("Enter the length of Base 1:")
base2 = game.askForNumber("Enter the length of Base 2:")
height = game.askForNumber("Enter the height:")
// Calculate and display the area
calculateArea()
