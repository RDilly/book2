/*
    Food component factory function
*/
const foodFactory = (food) => {
    return `
            <div class="food__items">
            <h3>${food.name}</h3>
            <h4>Ethnicity</h4>
            <div class="descriptions ethnicity">${food.ethnicity}</div>
            <h4>Category</h4>
            <div class="descriptions category">${food.category}</div>
            <h4>Ingredients</h4>
            <div class="descriptions ingredients">${food.ingredients}</div>
            <h4>Country</h4>
            <div class="descriptions country">${food.country}</div>
            <h4>Calories Per Serving</h4>
            <div class="descriptions calories">${food.calories}</div>
            <h4>Fat Per Serving</h4>
            <div class="descriptions fat">${food.fat}</div>
            <h4>Sugars Per Serving</h4>
            <div class="descriptions sugar">${food.sugars}</div>
            </div>`
}

/*
    Code to add food to the DOM
*/
const addFoodToDom =  (foodAsHTML) => {
    document.querySelector(".foodList").innerHTML += foodAsHTML
}


fetch("http://localhost:3000/foods")
    .then(response => response.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    food.ingredients = productInfo.product.ingredients.reduce((a, c) => {
                        return `${a}<li>${c.text}</li>`
                      },"")
                    food.countryOfOrigin = productInfo.product.countries_tags
                    food.calories = productInfo.product.nutriments.energy_serving
                    food.fatPerServing = productInfo.product.nutriments.fat_serving
                    food.sugarPerServing = productInfo.product.nutriments.sugars_serving
                    const foodAsHTML = foodFactory(food)
                    addFoodToDom(foodAsHTML)
                })
        })
})