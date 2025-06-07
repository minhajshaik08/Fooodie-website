const recipes = {
  indian: {
    title: "Paneer Bhurji",
    image: "he2.png",
    ingredients: [
      "200g paneer (crumbled)",
      "1 onion (finely chopped)",
      "1 tomato (finely chopped)",
      "1 green chili (finely chopped)",
      "1 tsp ginger-garlic paste",
      "1/2 tsp turmeric powder",
      "1/2 tsp red chili powder",
      "1/2 tsp garam masala",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander (chopped)"
    ],
    steps: [
      "Heat oil in a pan. Add chopped onions and green chilies; sauté until translucent.",
      "Add ginger-garlic paste and cook until raw smell disappears.",
      "Add tomatoes, turmeric, red chili powder, salt, and cook until soft.",
      "Add crumbled paneer and mix well.",
      "Cook for 2-3 minutes. Add garam masala and chopped coriander.",
      "Serve hot with roti or toast."
    ]
  },
  italian: {
    title: "Tandoori Chicken",
    image: "he3.png",
    ingredients: [
      "500g chicken (with bone)",
      "1/2 cup yogurt",
      "1 tbsp lemon juice",
      "1 tbsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1/2 tsp turmeric powder",
      "1/2 tsp garam masala",
      "Salt to taste"
    ],
    steps: [
      "Marinate chicken with all ingredients and refrigerate for 2-4 hours.",
      "Preheat oven to 200°C. Place chicken on tray.",
      "Grill for 25-30 mins or until cooked, turning once.",
      "Serve hot with mint chutney and lemon wedges."
    ]
  },
  chinese: {
    title: "Vegetable Upma",
    image: "he4.png",
    ingredients: [
      "1 cup semolina (rava/sooji)",
      "2 cups water",
      "1 onion (chopped)",
      "1 carrot (chopped)",
      "1/4 cup peas",
      "1 tsp mustard seeds",
      "1 tsp urad dal",
      "1-2 green chilies",
      "8-10 curry leaves",
      "Salt to taste",
      "1 tbsp oil"
    ],
    steps: [
      "Dry roast semolina until aromatic. Set aside.",
      "Heat oil, add mustard seeds, urad dal, curry leaves, chilies, and sauté.",
      "Add onions and vegetables. Sauté for 3-4 minutes.",
      "Add water and salt. Bring to boil.",
      "Slowly add semolina while stirring. Cook till thick.",
      "Serve hot with chutney or pickle."
    ]
  },
  japanese: {
    title: "Bottle Gourd Curry",
    image: "he5.png",
    ingredients: [
      "1 medium bottle gourd (peeled and chopped)",
      "1 onion (chopped)",
      "1 tomato (chopped)",
      "1 tsp ginger-garlic paste",
      "1/2 tsp turmeric",
      "1/2 tsp cumin seeds",
      "1/2 tsp chili powder",
      "Salt to taste",
      "1 tbsp oil"
    ],
    steps: [
      "Heat oil. Add cumin seeds and sauté onions until soft.",
      "Add ginger-garlic paste, turmeric, chili powder, and sauté.",
      "Add tomatoes and cook until mushy.",
      "Add chopped bottle gourd and salt. Mix well.",
      "Cover and cook until tender. Add water if needed.",
      "Serve with rice or chapati."
    ]
  },
  breakfast: {
    title: "Moong Dal Khichdi",
    image: "he6.png",
    ingredients: [
      "1/2 cup moong dal",
      "1/2 cup rice",
      "1 tsp cumin seeds",
      "1/4 tsp turmeric powder",
      "1 tbsp ghee",
      "Salt to taste",
      "4 cups water"
    ],
    steps: [
      "Rinse rice and dal. Heat ghee in a cooker, add cumin seeds.",
      "Add rice, dal, turmeric, salt, and water.",
      "Cook for 3-4 whistles. Let pressure release.",
      "Serve hot with ghee and pickle."
    ]
  },
  lunch: {
    title: "Tandoori Paneer Tikka",
    image: "he7.png",
    ingredients: [
      "200g paneer (cubed)",
      "1/4 cup yogurt",
      "1 tsp ginger-garlic paste",
      "1/2 tsp chili powder",
      "1/2 tsp turmeric",
      "1/2 tsp garam masala",
      "Salt to taste",
      "1 tbsp lemon juice"
    ],
    steps: [
      "Mix all ingredients and marinate paneer for 1 hour.",
      "Grill or pan-fry until golden and cooked.",
      "Serve with mint chutney."
    ]
  },
  brunch: {
    title: "Vegetable Sambar",
    image: "he8.png",
    ingredients: [
      "1/2 cup toor dal",
      "1 cup mixed vegetables (carrot, drumstick, beans)",
      "1 small onion",
      "1 tomato",
      "1/2 tsp mustard seeds",
      "1/4 tsp turmeric",
      "1 tbsp sambar powder",
      "Tamarind extract",
      "Curry leaves, salt, oil"
    ],
    steps: [
      "Cook dal until soft. Boil vegetables separately.",
      "Heat oil, add mustard seeds, onion, curry leaves.",
      "Add tomatoes, turmeric, sambar powder. Cook briefly.",
      "Add dal, vegetables, tamarind. Simmer for 5 mins.",
      "Serve hot with rice or idli."
    ]
  },
  dinner: {
    title: "Kerala-style Mutton Stew",
    image: "he9.png",
    ingredients: [
      "500g mutton (bone-in)",
      "1 onion (sliced)",
      "1 cup coconut milk",
      "1 tsp black pepper",
      "1 bay leaf, cloves, cinnamon",
      "1 tbsp ginger (sliced)",
      "Salt, oil"
    ],
    steps: [
      "Heat oil. Sauté spices, ginger, onion until translucent.",
      "Add mutton and salt. Cook for 10 mins.",
      "Add 1/2 cup water, pressure cook till soft.",
      "Add coconut milk, simmer for 5 mins.",
      "Serve with appam or rice."
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".recipe .card");

  const modal = document.createElement("div");
  modal.id = "recipeModal";
  modal.style.display = "none";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2 id="recipeTitle"></h2>
      <img id="recipeImage" alt="" />
      <h3 style="color:black ;font-size: 20px; margin-top: 15px;margin-bottom: 10px">Ingredients</h3>
      <ul id="ingredientsList"></ul><br><br>
      <h3 style="color:black;font-size: 20px; margin-top: 15px;margin-bottom: 10px">Steps</h3>
      <ol id="stepsList"></ol>
    </div>
  `;
  document.body.appendChild(modal);

  const style = document.createElement("style");
  style.innerHTML = `
    #recipeModal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      background-color: rgba(0, 0, 0, 0.7);
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .modal-content {
      background: #fff;
       padding: 20px;
      max-width: 600px;
      width: 90%;
      max-height: 90%;
      overflow-y: auto;
      border-radius: 10px;
      position: relative;
    }
    .modal-content img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      margin: 10px 0;
    }
    .close-button {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 24px;
      cursor: pointer;
    }

  `;
  document.head.appendChild(style);

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const keys = Object.keys(recipes);
      const recipe = recipes[keys[index]];
      if (!recipe) return;

      document.getElementById("recipeTitle").textContent = recipe.title;
      document.getElementById("recipeImage").src = recipe.image;
      document.getElementById("recipeImage").alt = recipe.title;

      const ingredientsList = document.getElementById("ingredientsList");
      ingredientsList.innerHTML = "";
      recipe.ingredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });

      const stepsList = document.getElementById("stepsList");
      stepsList.innerHTML = "";
      recipe.steps.forEach((step) => {
        const li = document.createElement("li");
        li.textContent = step;
        stepsList.appendChild(li);
      });

      modal.style.display = "flex";
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("close-button")) {
      modal.style.display = "none";
    }
  });
});
