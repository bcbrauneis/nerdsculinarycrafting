

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
   fetch("/api/Recipe/", {
    method: "POST",
    body: JSON.stringify({
        recipe_name: "",
        description: "req.body.description",
        ingredients: "",
        instructions: "",
        user_id: "",
        theme_id: ""
    }),
    headers: {
        "Content-Type": "applcation/json"
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
   })
   .catch(error => {
    console.error("Error saving recipe", error);
   });
}

addIngredientBtn.addEventListener("click", addToList)
submitBttn.addEventListener("click", saveRecipeToDb)