


let recipeForm;
let recipeName;
let addIngredient;
let saveIngredientBtn;
let ingredientList;
let ingredientTitle;
let instructions;
let themeList;
let pictureFile;
let submitBttn;



//enter path route
if (window.location.pathname === '/') {
    recipeForm = document.querySelector('#recipeForm');
    recipeName = document.querySelector('#title');
    addIngredient = document.querySelector('.inputIngredient');
    saveIngredientBtn = document.querySelector('.btn');
    ingredientList = document.querySelector('#list-container');
    ingredientTitle = document.querySelector('#ingredientTitle')
    instructions = document.querySelector('#instructionsBox');
    themeList = document.querySelector('#themeTag');
    pictureFile = document.querySelector('.recipe-pic');
    submitBttn = document.querySelector('#submitBttn');
}

// Show an element
const show = (elem) => {
    elem.style.display = 'inline';
};

// Hide and element
const hide = (elem) => {
    elem.style.display = 'none';
};

//activeIngredient is used to keep track of the ingredients in the ingredient list area
 let activeIngredient = {};

// Get route to save ingredient to page? im kinda confuseddddd
 const saveIngred = (ingredient) => 
    fetch('/', {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingredient)
    });

    // Render saved ingredients
    const renderActiveIngredient = () => {
        hide(saveIngredientBtn);

        if (activeIngredient.id) {
            show(saveIngredientBtn);
            ingredientTitle.setAttribute('readonly', true);
            ingredientTitle.value = activeIngredient.title;
        } else {
            hide(saveIngredientBtn);
            ingredientTitle.removeAttribute('readonly');
            ingredientTitle.value = '';
        }
    };

    // handle ingredient save
    const handleSave = () => {
        const newIngredient = {
            title: ingredientTitle.value
        };
        saveIngred(newIngredient).then(() => {
            getAndRenderIngredient();
            renderActiveIngredient();
        });
    };

    // Set active ingredient and display it
    const ingredientView = (e) => {
        e.preventDefault();
        activeIngredient = JSON.parse(e.target.parentElement.getAttribute('ingred-text'));
        renderActiveIngredient();
    }

    // Sets activeIngredient to empty object and allows user to enter a new ingredient
    const handleNewIngredView = (e) => {
        activeIngredient = {};
        show(saveIngredientBtn);
        renderActiveIngredient();
    };

    // Renders save ingredient button based on state of the form
    const handleRenderBtn = () => {
        show(saveIngredientBtn);
        if (!ingredientTitle.value.trim()) {
            hide(saveIngredientBtn);
        } else {
            show(saveIngredientBtn);
        }
    };

    // Render the list of ingredient titles
    const renderIngredList = async (ingredient) => {
        let jsonIngredient = await ingredient.json();
        let ingredListItems = [];

        // Get correct path route
        if (window.location.pathname === '/') {
            ingredientList.forEach((el) => (el.innerHTML = ''));

            if (jsonIngredient.length === 0 ) {
                ingredListItems.push(createLi('No ingredients saved', false));
            }
        }

        //returns HTML element 
        const createLi = (addIngredient, saveIngredientBtn = true) => {
            const liEl = document.createElement('li');
            liEl.classList.add('list-ingred-title');

            //Do i have to put a span element after the li element is created with the new ingredient title?
            // const spanEl = document.createElement('span');

            //is this correct?
            liEl.append;(childElement);

            return liEl;
        };

        return liEl;

    };

    let jsonIngredient = [];
    let ingredListItems = [];

    if (jsonIngredient.length > 0) {
        jsonIngredient.forEach((ingredient) => {
            const li = createLi(ingredient.title);
            li.dataset.ingredient = JSON.stringify(ingredient);

            ingredListItems.push(li);
        });
    } else {
        ingredListItems.push(createLi('No ingredients saved', false));
    }

    console.log(jsonIngredient);

    //Get route path
    if (window.location.pathname === '/') {
        ingredListItems.forEach((ingredient) => ingredientList[0].append(ingredient));
    }

    // Gets ingredients from db and renders them to ingredient list section
    const getAndRender = () => saveIngred().then(renderIngredList);

    if (window.location.pathname === '/') {
        saveIngredientBtn.addEventListener('click',handleSave);
    }

    getAndRender();


    // New recipe form handler
    recipeForm.addEventListener('submit', (e) => {
        let recipe = [];
        if(recipeName.value === '' || recipeName.value == null) {
            messages.push('Recipe name required'); 
        }
        if(messages.length > 0) {
            e.preventDefault();
            errorEl.innerText = messages.join(',');
        }
    });


    // submit bttn event listener
    submitBttn.addEventListener('click', function (event) {
        event.preventDefault();
        //create object to store data
        const submitRecipe = {
            title: recipeName.value,
            ingredients: ingredientList.value,
            instructions: instructions.value.trim(),
            theme: themeList.value,
            picture: pictureFile.value,
        }
        localStorage.setItem('submitRecipe', JSON.stringify(submitRecipe));
        console.log(submitRecipe);
    });
    