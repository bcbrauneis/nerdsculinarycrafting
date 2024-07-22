const addedIngredients = [];

const addIngredientBtn = document.querySelector("#addBtn")
const ingredientTitleTextArea = document.querySelector("#ingredientTitle");
const listIngredientUl = document.querySelector("#list-ingredient")
const submitBttn = document.querySelector("#submitBttn")

const recipeNameInput = document.querySelector("#recipeName")
const instructionsBoxInput = document.querySelector("#instructionsBox")
const themeTagSelect = document.querySelector("#themeTag")

function addToList() {

    const ingredient = ingredientTitleTextArea.value;

    const newLi = document.createElement("li");
    newLi.textContent = ingredient;
    //  <li>Eggs</li>
    listIngredientUl.append(newLi);

    // push to array
    addedIngredients.push(ingredient)
}

function saveRecipeToDb() {
   fetch("/api/recipes/", {
    method: "POST",
    body: JSON.stringify({
        recipe_name: recipeNameInput.value,
        // description: "",
        ingredients: JSON.stringify(addedIngredients),
        instructions: instructionsBoxInput.value,
        // user_id: "",
        theme_id: themeTagSelect.value
    }),
    headers: {
        "Content-Type": "application/json"
    }
   })
   .then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Failed to save recipe");
    }
   })
   .then(data => {
    console.log("Recipe saved successfully", data);
    window.location.href = "/"

   })
   .catch(error => {
    console.error("Error saving recipe", error);
   });
}

addIngredientBtn.addEventListener("click", addToList)
submitBttn.addEventListener("click", saveRecipeToDb)