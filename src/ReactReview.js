/*
React Review with Tommy 4/12/23

When you make a React App, a lot will autopopulate for you

Pictures
If you want to display images in your app, they must go in PUBLIC (you can create subfolders)

Index.html
In Public, for if we use bootstrap, CSS library, but otherwise, don't touch it

Index.js is main.js
App.js is like Nutshell.js or wherever you are writing your code

JSX = HTML
    Instead of string interpolation, we just write HTML (with return) and when we want to use Javascript, we just use brackets (no $)

Hooks...

For click events, just type onClick={() => then write a function}

a file (app.js, nav.js) is a componenet, and each can set and hold its state only

use effect always look like this: useEffect(()={},[])
use effect is something that runs the first time you render a component

we have to put something in state to be able to use it, print it, etc.

Each single component can hold its own CSS sheet and styling

when you import things in react, you don't need .js at the end, in vanilla javascript, you do

Props (stands for properties)... is a way to pass info from a parent to a child
but you have to tell them it's coming and they have to accept it

In React, the term "props" is short for "properties". "Props" is an object that contains 
arbitrary inputs (or properties) that are passed to a React component by its parent component. 
These props are used to customize the behavior and appearance of the component. In other words, props 
allow data to flow from a parent component to its child components in a unidirectional manner.


Have to use BrowserRouter from "react-router-dom" to use Routes, need to install react-router-dom first
    Each Route needs 2 things: path and element <Route path="" element={} />

    Base is just considered "/"

    React Fragments <> </> <- Put things in one "box"

    2 ways to export 

    export const functionName - as we're writing
    export default functionName - placed at the bottom

    if you loop in jsx, it needs a key

    let's you see the foreign key object

*/