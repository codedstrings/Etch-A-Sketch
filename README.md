# Etch-A-Sketch
Etch a sketch game created with HTML, CSS and JS.

## To-do
# Etch-a-Sketch Project

## Tasks:

### 1. Create HTML structure:
   - [ ] Create an HTML file.
   - [ ] Include a container div with an id like "grid-container".
   - [ ] Link your CSS and JavaScript files.

### 2. Generate grid using JavaScript:
   - [ ] Write a JavaScript function to generate a 16x16 grid of square divs.
   - [ ] Append each square to the "grid-container" div.

### 3. Apply Flexbox for grid layout:
   - [ ] Apply Flexbox to the "grid-container" to make the squares appear in a grid layout.

### 4. Apply Hover Effect:
   - [ ] Add a hover effect to the squares that changes their color.
   - [ ] Use event listeners for mouseenter and mouseleave events to achieve the hover effect.

### 5. Add a Button for Grid Size:
   - [ ] Create a button at the top of the screen.
   - [ ] Write a JavaScript function that prompts the user for the number of squares per side.
   - [ ] Validate the input to ensure it's within the specified limits.
   - [ ] Remove the existing grid and generate a new grid based on the user input.

### 6. Push to GitHub:
   - [ ] Initialize a Git repository in your project folder.
   - [ ] Commit your changes and push to GitHub.

## Extra Credit Tasks:

### Randomize RGB Value:
   - [ ] Modify the hover effect to randomize the RGB value of the square on each interaction.

### Progressive Darkening Effect:
   - [ ] Implement a progressive darkening effect where each interaction adds 10% more black or color to the square.
   - [ ] Limit the interactions to ten, achieving a completely black square after the tenth interaction.

## Tips:
   - Use `Math.random()` to generate random RGB values.
   - Use CSS classes or direct style changes in JavaScript to update the color.
   - Limit the number of interactions for the progressive darkening effect.
   - Update the prompt to inform the user about the input constraints.
