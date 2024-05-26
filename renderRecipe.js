const recipe = {
    "Name": "Christmas pie",
    "url": "https://www.bbcgoodfood.com/recipes/2793/christmas-pie",
    "Description": "Combine a few key Christmas flavours here to make a pie that both children and adults will adore",
    "Author": "Mary Cadogan",
    "Ingredients": [
        "2 tbsp olive oil",
        "knob butter",
        "1 onion, finely chopped",
        "500g sausagemeat or skinned sausages",
        "grated zest of 1 lemon",
        "100g fresh white breadcrumbs",
        "85g ready-to-eat dried apricots, chopped",
        "50g chestnut, canned or vacuum-packed, chopped",
        "2 tsp chopped fresh or 1tsp dried thyme",
        "100g cranberries, fresh or frozen",
        "500g boneless, skinless chicken breasts",
        "500g pack ready-made shortcrust pastry",
        "beaten egg, to glaze"
    ],
    "Method": [
        "Heat oven to 190C/fan 170C/gas 5. Heat 1 tbsp oil and the butter in a frying pan, then add the onion and fry for 5 mins until softened. Cool slightly. Tip the sausagemeat, lemon zest, breadcrumbs, apricots, chestnuts and thyme into a bowl. Add the onion and cranberries, and mix everything together with your hands, adding plenty of pepper and a little salt.",
        "Cut each chicken breast into three fillets lengthwise and season all over with salt and pepper. Heat the remaining oil in the frying pan, and fry the chicken fillets quickly until browned, about 6-8 mins.",
        "Roll out two-thirds of the pastry to line a 20-23cm springform or deep loose-based tart tin. Press in half the sausage mix and spread to level. Then add the chicken pieces in one layer and cover with the rest of the sausage. Press down lightly.",
        "Roll out the remaining pastry. Brush the edges of the pastry with beaten egg and cover with the pastry lid. Pinch the edges to seal, then trim. Brush the top of the pie with egg, then roll out the trimmings to make holly leaf shapes and berries. Decorate the pie and brush again with egg.",
        "Set the tin on a baking sheet and bake for 50-60 mins, then cool in the tin for 15 mins. Remove and leave to cool completely. Serve with a winter salad and pickles."
    ],
    "imageURL": "https://images.immediate.co.uk/production/volatile/sites/30/2008/01/Christmas-pie-2ed9223.jpg?quality=90&webp=true&resize=375,341"
}

const containerDetailRecipe = document.getElementById('detail_recipe');

const createRenderRecipe = (recipe) => {
    const { Name, url, Description, Author, Ingredients, Method, imageURL } = recipe;

    const recipeCard = document.createElement('div');
    recipeCard.classList.add('container');

    const recipeImage = document.createElement('img');
    recipeImage.src = imageURL;
    recipeImage.alt = Name;
    recipeImage.classList.add('image');

    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = Name;

    const recipeDescription = document.createElement('p');
    recipeDescription.textContent = Description;

    const recipeAuthor = document.createElement('p');
    recipeAuthor.textContent = `Author: ${Author}`;

    const recipeIngredients = document.createElement('ul');
    recipeIngredients.textContent = 'Ingredients:';
    Ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.fontSize = '1.2rem';
        li.textContent = ingredient;

        recipeIngredients.appendChild(li);
    });

    const recipeMethod = document.createElement('ol');
    recipeMethod.textContent = 'Method:';
    Method.forEach(step => {
        const li = document.createElement('li');
        li.style.fontSize = '1.2rem';
        li.textContent = step;

        recipeMethod.appendChild(li);
    });

    const recipeLink = document.createElement('a');
    recipeLink.classList.add('btn', 'btn-primary', 'btn-lg');
    recipeLink.href = url;
    recipeLink.textContent = 'View full recipe';
    recipeLink.target = '_blank';


    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeTitle);
    recipeCard.appendChild(recipeDescription);
    recipeCard.appendChild(recipeAuthor);
    recipeCard.appendChild(recipeIngredients);
    recipeCard.appendChild(recipeMethod);
    recipeCard.appendChild(recipeLink);

    containerDetailRecipe.appendChild(recipeCard);

    return containerDetailRecipe;
}


const renderRecipe = () => {
    createRenderRecipe(recipe);
}

renderRecipe();