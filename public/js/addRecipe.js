const addIngredientBtn = document.querySelector("#addBtn")
const ingredientTitleTextArea = document.querySelector("#ingredientTitle");
const listIngredientUl = document.querySelector("#list-ingredient")
const submitBttn = document.querySelector("#submitBttn")

function addToList() {

    const ingredient = ingredientTitleTextArea.value;

    const newLi = document.createElement("li");
    newLi.textContent = ingredient;
    //  <li>Eggs</li>
    listIngredientUl.append(newLi)
}

function saveRecipeToDb() {
   fetch("/api/recipes/", {
    method: "POST",
    body: JSON.stringify({
        recipe_name: "",
        description: "req.body.description",
        ingredients: "",
        instructions: req.body.instructions,
        user_id: req.body.user_id,
        theme_id: req.body.user_id
    })
   })
   .then()
   .then()
}

addIngredientBtn.addEventListener("click", addToList)
submitBttn.addEventListener("click", saveRecipeToDb)