Answer to these questions:

1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

getElementById() → gets one element by id
getElementsByClassName() → it gets all elements with a class (returns HTMLCollection)
querySelector() → gets the first match using CSS selector
querySelectorAll() → gets all matches using CSS selector (returns NodeList)

2. How to create and insert a new element into the DOM

We can create and insert a new element using:

document.createElement()
Add text/content
Insert with appendChild() (or similar)

3. What is Event Bubbling?

Event Bubbling means an event starts on the target element and then moves up to its parent, grandparent, etc.
Example: Clicking a button inside a div can trigger both button and div click events.

4. What is Event Delegation? Why is it useful?

Event Delegation means adding one event listener to a parent and handling child events through it.

It is useful for:

Less code
Better performance
Works for dynamically added elements

5. Difference between preventDefault() and stopPropagation()

preventDefault() → stops the browser’s default action (like link opening or form submit)
stopPropagation() → stops the event from bubbling to parent elements
