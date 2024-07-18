const { add } = require("lodash");

let recipeForm;
let recipeName;
let addIngredient;
let saveIngredient;
let ingredientList;
let instructions;
let themeList;
let pictureFile;
let submitBttn;

//enter path route
if (window.location.pathname === '/') {
    recipeForm = document.querySelector('#recipeForm');
    recipeName = document.querySelector('#title');
    addIngredient = document.querySelector('.inputIngredient');
    saveIngredient = document.querySelector('.btn');
    ingredientList = document.querySelector('#list-container');
    instructions = document.querySelector('#instructionsBox');
    themeList = document.querySelector('#themeTag');
    pictureFile = document.querySelector('.recipe-pic');
    submitBttn = document.querySelector('#submitBttn');
}

